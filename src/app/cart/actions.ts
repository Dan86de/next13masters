"use server";

import { ProductItem } from "@/model/productItem";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	addItemToCart,
	createShoppingCart,
	getShoppingCartByCartId,
	removeItemFromCart,
} from "../api/shopping-cart";

export async function addToCartAction({
	selectedVariant,
	userId,
}: {
	selectedVariant: ProductItem;
	userId: string;
}) {
	const cart = await getOrCreateCart(userId);

	if (!cart) {
		throw new Error("Something went wrong with cart creation/check process.");
	}

	console.log(cart);

	await addItemToCart(cart.id, selectedVariant.id);

	redirect("/cart");
}

export async function removeCartItem({
	cartId,
	productItemId,
}: {
	cartId: string;
	productItemId: string;
}) {
	await removeItemFromCart(cartId, productItemId);

	revalidatePath("/cart");
}

async function getOrCreateCart(userId: string) {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		return getShoppingCartByCartId(cartId);
	} else {
		const cart = await createShoppingCart(userId);
		cookies().set("cartId", cart.id);
		return cart;
	}
}

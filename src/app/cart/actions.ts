"use server";

import { ProductItem } from "@/model/productItem";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	addItemToCart,
	createShoppingCart,
	getShoppingCartByCartId,
	incrementItemQtyInCart as incrementItemQty,
	reduceItemQtyInCart,
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

	await addItemToCart(cart.id, selectedVariant.id);
	revalidatePath("/cart");
	redirect("/cart");
}

export async function removeCartItem({
	cartId,
	shoppingCartItemId,
}: {
	cartId: string;
	shoppingCartItemId: string;
}) {
	await removeItemFromCart(cartId, shoppingCartItemId);
	revalidatePath("/cart");
}

export async function incrementItemQtyInCart(formData: FormData) {
	const shoppingCartItemId = formData.get("shoppingCartItemId") as string;

	await incrementItemQty(shoppingCartItemId);
	revalidatePath("/cart");
}

export async function decrementItemQtyInCart(formData: FormData) {
	const cartId = formData.get("cartId") as string;
	const shoppingCartItemId = formData.get("shoppingCartItemId") as string;

	await reduceItemQtyInCart(cartId, shoppingCartItemId);
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

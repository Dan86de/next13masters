"use server";

import { ProductItem } from "@/model/productItem";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	addItemToCart,
	createShoppingCart,
	getShoppingCartByCartId,
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
	revalidateTag("cart");
}

export async function incrementItemQtyInCart(formData: FormData) {
	const cartId = formData.get("cartId") as string;
	const productItemId = formData.get("productItemId") as string;

	console.log(cartId, productItemId);
	await addItemToCart(cartId, productItemId);
	revalidateTag("cart");
}

export async function decrementItemQtyInCart({
	cartId,
	shoppingCartItemId,
}: {
	cartId: string;
	shoppingCartItemId: string;
}) {
	await reduceItemQtyInCart(cartId, shoppingCartItemId);
	revalidateTag("cart");
}

async function getOrCreateCart(userId: string) {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		revalidateTag("cart");
		return getShoppingCartByCartId(cartId);
	} else {
		const cart = await createShoppingCart(userId);
		cookies().set("cartId", cart.id);
		revalidateTag("cart");
		return cart;
	}
}

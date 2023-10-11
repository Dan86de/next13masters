"use server";

import { ProductItem } from "@/model/productItem";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { addToEmptyCart, createShoppingCart, getShoppingCartByCartId } from "../api/shopping-cart";

export async function addToCartAction({
	selectedVariant,
	userId,
}: {
	selectedVariant: ProductItem;
	userId: string;
}) {
	await getOrCreateCart(userId, selectedVariant.id);

	redirect("/cart");
}

async function getOrCreateCart(userId: string, productItemId: string) {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		return getShoppingCartByCartId(cartId);
	} else {
		const cart = await createShoppingCart(userId);
		return await addToEmptyCart(cart.id, productItemId);
	}
}

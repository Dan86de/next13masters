"use server";

import { ProductItem } from "@/model/productItem";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { addToCart, createShoppingCart, getShoppingCartByCartId } from "../api/shopping-cart";

export async function addToCartAction({
	selectedVariant,
	userId,
}: {
	selectedVariant: ProductItem;
	userId: string;
}) {
	const cart = await getOrCreateCart(userId);

	if (!cart?.id) {
		throw new Error("cart was not created");
	} else {
		await addToCart(cart.id, selectedVariant.id);
	}

	redirect("/cart");
}

async function getOrCreateCart(userId: string) {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		return getShoppingCartByCartId(cartId);
	} else return await createShoppingCart(userId);
}

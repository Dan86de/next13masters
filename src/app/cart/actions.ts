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
	console.log(selectedVariant);
	const cart = await getOrCreateCart(userId);

	if (!cart) {
		throw new Error("Something went wrong with cart creation/check process.");
	}

	await addItemToCart(cart.id, selectedVariant.id).finally(() => {
		revalidatePath("/cart");
		redirect("/cart");
	});
}

export async function removeCartItem({
	cartId,
	shoppingCartItemId,
}: {
	cartId: string;
	shoppingCartItemId: string;
}) {
	await removeItemFromCart(cartId, shoppingCartItemId).finally(() => {
		revalidatePath("/cart");
	});
}

export async function incrementItemQtyInCart(shoppingCartItemId: string) {
	await incrementItemQty(shoppingCartItemId).finally(() => {
		revalidatePath("/cart");
	});
}

export async function decrementItemQtyInCart(cartId: string, shoppingCartItemId: string) {
	await reduceItemQtyInCart(cartId, shoppingCartItemId).finally(() => {
		revalidatePath("/cart");
	});
}

async function getOrCreateCart(userId: string) {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getShoppingCartByCartId(cartId);
		if (!cart) {
			cookies().delete("cartId");
			const cart = await createShoppingCart(userId);
			cookies().set("cartId", cart.id);
			return cart;
		} else {
			return cart;
		}
	} else {
		const cart = await createShoppingCart(userId);
		cookies().set("cartId", cart.id);
		return cart;
	}
}

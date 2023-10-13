import {
	ShoppingCartAddItemDocument,
	ShoppingCartCreateDocument,
	ShoppingCartDecrementItemQtyDocument,
	ShoppingCartGetByIdDocument,
	ShoppingCartIncrementItemQtyDocument,
	ShoppingCartRemoveItemDocument,
} from "@/gql/graphql";
import { ShoppingCart, ShoppingCartWithItems } from "@/model/shoppingCart";
import { executeGraphql } from "./products";

export const createShoppingCart = async (userId: string): Promise<ShoppingCart> => {
	const graphqlResponse = await executeGraphql(ShoppingCartCreateDocument, {
		userId,
	});

	if (!graphqlResponse.createShoppingCart?.id) {
		throw new Error("Cart was not created");
	} else return { id: graphqlResponse.createShoppingCart.id };
};

export const getShoppingCartByCartId = async (
	cartId: string,
): Promise<ShoppingCartWithItems | null> => {
	const graphqlResponse = await executeGraphql(
		ShoppingCartGetByIdDocument,
		{
			cartId,
		},
		{
			tags: ["cart"],
		},
	);

	if (!graphqlResponse.shoppingCartGetByCartId) {
		throw new Error("Cart does not exist");
	}

	return {
		id: graphqlResponse.shoppingCartGetByCartId.id,
		shoppingCartItems: graphqlResponse.shoppingCartGetByCartId.shopping_cart_item.map((item) => ({
			id: item.id,
			productItem: {
				id: item.product_item.id,
				images: item.product_item.product_images,
				price: item.product_item.price,
				productId: item.product_item_id,
				SKU: item.product_item.SKU,
				quantityInStock: item.product_item.qty_in_stock,
			},
			productItemId: item.product_item_id,
			qty: item.qty,
		})),
	};
};

export const addItemToCart = async (
	cartId: string,
	productItemId: string,
	qty?: number,
): Promise<{ id: string } | null> => {
	const graphqlResponse = await executeGraphql(ShoppingCartAddItemDocument, {
		cartId,
		productItemId,
		qty,
	});

	if (!graphqlResponse.addItemToCart) {
		throw new Error("There is something wrong with adding item ot cart.");
	}

	return {
		id: graphqlResponse.addItemToCart.id,
	};
};

export const removeItemFromCart = async (
	cartId: string,
	shoppingCartItemId: string,
): Promise<{ id: string } | null> => {
	const graphqlResponse = await executeGraphql(ShoppingCartRemoveItemDocument, {
		cartId,
		shoppingCartItemId,
	});

	if (!graphqlResponse.removeItemFromCart) {
		throw new Error("There is something wrong with adding item to cart.");
	}

	return {
		id: graphqlResponse.removeItemFromCart.id,
	};
};

export const incrementItemQtyInCart = async (shoppingCartItemId: string) => {
	const graphqlResponse = await executeGraphql(ShoppingCartIncrementItemQtyDocument, {
		shoppingCartItemId,
	});

	if (!graphqlResponse.incrementItemQtyInCart) {
		throw new Error("There is something wrong with incrementing item qty in cart.");
	}

	return {
		id: graphqlResponse.incrementItemQtyInCart.id,
	};
};

export const reduceItemQtyInCart = async (
	cartId: string,
	shoppingCartItemId: string,
): Promise<{ id: string } | null> => {
	const graphqlResponse = await executeGraphql(
		ShoppingCartDecrementItemQtyDocument,
		{
			cartId,
			shoppingCartItemId,
		},
		{},
		"no-store",
	);

	if (!graphqlResponse.reduceItemQtyInCart) {
		throw new Error("There is something wrong with removing item from cart.");
	}

	return {
		id: graphqlResponse.reduceItemQtyInCart.id,
	};
};

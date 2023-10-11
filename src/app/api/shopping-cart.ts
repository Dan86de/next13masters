import {
	ShoppingCartAddItemDocument,
	ShoppingCartCreateDocument,
	ShoppingCartGetByIdDocument,
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
	const graphqlResponse = await executeGraphql(ShoppingCartGetByIdDocument, {
		cartId,
	});

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
): Promise<ShoppingCartWithItems | null> => {
	const graphqlResponse = await executeGraphql(ShoppingCartAddItemDocument, {
		cartId,
		cartItemId: productItemId,
		qty,
	});

	if (!graphqlResponse.addItemToCart) {
		throw new Error("There is something wrong with adding item ot cart.");
	}

	return {
		id: graphqlResponse.addItemToCart.id,
		shoppingCartItems: graphqlResponse.addItemToCart.shopping_cart_item.map((item) => ({
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

export const removeItemFromCart = async (
	cartId: string,
	productItemId: string,
): Promise<ShoppingCartWithItems | null> => {
	const graphqlResponse = await executeGraphql(ShoppingCartRemoveItemDocument, {
		cartId,
		shoppingCartItemId: productItemId,
	});

	if (!graphqlResponse.removeItemFromCart) {
		throw new Error("There is something wrong with adding item ot cart.");
	}

	return {
		id: graphqlResponse.removeItemFromCart.id,
		shoppingCartItems: graphqlResponse.removeItemFromCart.shopping_cart_item.map((item) => ({
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

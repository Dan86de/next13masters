import {
	ShoppingCartAddItemDocument,
	ShoppingCartCreateDocument,
	ShoppingCartGetByIdDocument,
} from "@/gql/graphql";
import { ShoppingCart } from "@/model/shoppingCart";
import { executeGraphql } from "./products";

export const createShoppingCart = async (userId: string): Promise<ShoppingCart> => {
	const graphqlResponse = await executeGraphql(ShoppingCartCreateDocument, {
		userId,
	});

	if (!graphqlResponse.createShoppingCart?.id) {
		throw new Error("Cart was not created");
	}

	return {
		id: graphqlResponse.createShoppingCart.id,
		shoppingCartItems: graphqlResponse.createShoppingCart.shopping_cart_item.length
			? graphqlResponse.createShoppingCart.shopping_cart_item.map((item) => ({
					id: item.id,
					productItemId: item.product_item_id,
					qty: item.qty,
			  }))
			: [],
	};
};

export const getShoppingCartByCartId = async (cartId: string): Promise<ShoppingCart | null> => {
	const graphqlResponse = await executeGraphql(ShoppingCartGetByIdDocument, {
		cartId,
	});

	if (!graphqlResponse.shoppingCartGetByCartId) {
		return null;
	} else
		return {
			id: graphqlResponse.shoppingCartGetByCartId?.id,
			shoppingCartItems: graphqlResponse.shoppingCartGetByCartId.shopping_cart_item.map((item) => ({
				id: item.id,
				productItemId: item.product_item.id,
				qty: item.qty,
			})),
		};
};

export const addToCart = async (cartId: string, productItemId: string) => {
	const graphqlResponse = await executeGraphql(ShoppingCartAddItemDocument, {
		cartId,
		productItemId,
	});

	return graphqlResponse.addToCart?.id;
};

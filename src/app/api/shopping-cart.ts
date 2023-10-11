import {
	ShoppingCartAddFirstItemDocument,
	ShoppingCartCreateDocument,
	ShoppingCartGetByIdDocument,
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

export const addToEmptyCart = async (
	cartId: string,
	productItemId: string,
): Promise<ShoppingCartWithItems> => {
	const graphqlResponse = await executeGraphql(ShoppingCartAddFirstItemDocument, {
		cartId,
		productItemId,
	});

	if (!graphqlResponse.addToEmptyCart) {
		throw new Error("Something went wrong with adding to cart.");
	}

	return {
		id: graphqlResponse.addToEmptyCart.id,
		shoppingCartItems: graphqlResponse.addToEmptyCart.shopping_cart_item
			? graphqlResponse.addToEmptyCart.shopping_cart_item.map((item) => ({
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
			  }))
			: [],
	};
};

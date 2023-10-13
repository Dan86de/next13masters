import { type ShoppingCartItem } from "./shoppingCartItem";

export type ShoppingCart = {
	id: string;
};

export interface ShoppingCartWithItems extends ShoppingCart {
	shoppingCartItems: ShoppingCartItem[];
}

import { type ShoppingCartItem } from "./shoppingCartItem";

export type ShoppingCart = {
	id: string;
	shoppingCartItems: ShoppingCartItem[];
};

import { type ProductItem } from "./productItem";

export type ShoppingCartItem = {
	id: string;
	productItemId: string;
	qty: number;
	productItem: ProductItem;
};

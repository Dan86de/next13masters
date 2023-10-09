import { type ProductItem } from "./productItem";

export type Product = {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	image: {
		alt: string;
		src: string;
	};
	product_items: ProductItem[];
};

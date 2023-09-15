import { type Product } from "@/model/product";

export type ProductFromResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};

export const getProductsList = async (take?: number) => {
	const takePart = take ? `?take=${take}` : "";
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products${takePart}`);
	const productsResponse = (await res.json()) as ProductFromResponse[];
	const products = productsResponse.map((product): Product => {
		return {
			id: product.id,
			name: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: {
				src: product.image,
				alt: product.title,
			},
		};
	});

	return products;
};

export const getProductById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductFromResponse;
	const product: Product = {
		id: productResponse.id,
		name: productResponse.title,
		price: productResponse.price,
		description: productResponse.description,
		category: productResponse.category,
		image: {
			src: productResponse.image,
			alt: productResponse.title,
		},
	};

	return product;
};

export const getProductsPaginated = async (page: number) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${page === 1 ? 0 : page * 20}`,
	);
	const productsResponse = (await res.json()) as ProductFromResponse[];
	const products = productsResponse.map((product): Product => {
		return {
			id: product.id,
			name: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: {
				src: product.image,
				alt: product.title,
			},
		};
	});

	return products;
};

import {
	ProductGetByCategoryIdDocument,
	ProductGetByCollectionIdDocument,
	ProductGetByIdDocument,
	ProductsByNameDocument,
	ProductsGetListDocument,
	type TypedDocumentString,
} from "@/gql/graphql";
import { type Product } from "@/model/product";
import { redirect } from "next/navigation";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
	next?: NextFetchRequestConfig,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL not set");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
		next,
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GRAPHQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};

export const getProductsList = async (skip?: number, take?: number): Promise<Product[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { skip, take });

	return graphqlResponse.products.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category.category_name,
		image: {
			src: product.product_image,
			alt: product.name,
		},
		price: product.product_items[0].price,
		product_items: product.product_items.map((item) => ({
			id: item.id,
			price: item.price,
			images: item.product_images,
			productId: product!.id,
			quantityInStock: item.qty_in_stock,
			SKU: item.SKU,
		})),
	}));
};

export const getProductById = async (id: string): Promise<Product | null> => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id }, { revalidate: 1 });
	if (!graphqlResponse.product) {
		redirect("/");
	}
	return {
		id: graphqlResponse.product.id,
		name: graphqlResponse.product.name,
		description: graphqlResponse.product.description,
		category: graphqlResponse.product.category.category_name,
		image: {
			src: graphqlResponse.product.product_image,
			alt: graphqlResponse.product.name,
		},
		price: graphqlResponse.product.product_items[0].price,
		product_items: graphqlResponse.product.product_items.map((item) => ({
			id: item.id,
			price: item.price,
			images: item.product_images,
			productId: graphqlResponse.product!.id,
			quantityInStock: item.qty_in_stock,
			SKU: item.SKU,
		})),
	};
};

export const getProductsByCategoryId = async (categoryId: string): Promise<Product[]> => {
	const graphqlResponse = await executeGraphql(ProductGetByCategoryIdDocument, { categoryId });
	if (!graphqlResponse.productsFromCategory) {
		redirect("/");
	}
	return graphqlResponse.productsFromCategory.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category.category_name,
		image: {
			src: product.product_image,
			alt: product.name,
		},
		price: product.product_items[0].price,
		product_items: product.product_items.map((item) => ({
			id: item.id,
			price: item.price,
			images: item.product_images,
			productId: product!.id,
			quantityInStock: item.qty_in_stock,
			SKU: item.SKU,
		})),
	}));
};

export const getProductsByCollectionId = async (collectionId: string): Promise<Product[]> => {
	const graphqlResponse = await executeGraphql(ProductGetByCollectionIdDocument, { collectionId });
	if (!graphqlResponse.productsFromCollection) {
		redirect("/");
	}
	return graphqlResponse.productsFromCollection.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category.category_name,
		image: {
			src: product.product_image,
			alt: product.name,
		},
		price: product.product_items[0].price,
		product_items: product.product_items.map((item) => ({
			id: item.id,
			price: item.price,
			images: item.product_images,
			productId: product!.id,
			quantityInStock: item.qty_in_stock,
			SKU: item.SKU,
		})),
	}));
};

export const getProductsByName = async (name: string): Promise<Product[]> => {
	const graphqlResponse = await executeGraphql(ProductsByNameDocument, { name });
	if (!graphqlResponse.productsByName) {
		redirect("/");
	}
	return graphqlResponse.productsByName.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category.category_name,
		image: {
			src: product.product_image,
			alt: product.name,
		},
		price: product.product_items[0].price,
		product_items: product.product_items.map((item) => ({
			id: item.id,
			price: item.price,
			images: item.product_images,
			productId: product!.id,
			quantityInStock: item.qty_in_stock,
			SKU: item.SKU,
		})),
	}));
};

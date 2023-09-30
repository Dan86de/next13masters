import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type TypedDocumentString,
} from "@/gql/graphql";
import { type Product } from "@/model/product";

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
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
	}));
};

export const getProductById = async (id: string): Promise<Product | null> => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });
	if (!graphqlResponse.product) {
		throw new Error("There is no product with this ID");
	}
	console.log(graphqlResponse.product.category.variations);
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
	};
};

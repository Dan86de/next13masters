import { CategoriesGetListDocument, CategoryGetByNameDocument } from "@/gql/graphql";
import { Category } from "@/model/category";
import { executeGraphql } from "./products";

export const getCategoriesList = async (skip?: number, take?: number): Promise<Category[]> => {
	const graphqlResponse = await executeGraphql(CategoriesGetListDocument, { skip, take });

	return graphqlResponse.categories.map((category) => ({
		id: category.id,
		name: category.category_name,
	}));
};

export const getCategoryByName = async (name: string): Promise<Category> => {
	const graphqlResponse = await executeGraphql(CategoryGetByNameDocument, { name });
	if (!graphqlResponse.category) {
		throw new Error("There is no category with this name");
	}
	return {
		id: graphqlResponse.category.id,
		name: graphqlResponse.category.category_name,
	};
};

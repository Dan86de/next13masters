import { CollectionGetByNameDocument } from "@/gql/graphql";
import { Collection } from "@/model/collection";
import { redirect } from "next/navigation";
import { executeGraphql } from "./products";

export const getCollectionByName = async (collectionName: string): Promise<Collection> => {
	const graphqlResponse = await executeGraphql(CollectionGetByNameDocument, { collectionName });
	if (!graphqlResponse.collection) {
		redirect("/");
	}
	return {
		id: graphqlResponse.collection.id,
		name: graphqlResponse.collection.name,
	};
};

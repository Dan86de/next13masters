import { getCollectionByName } from "@/app/api/collections";
import { getProductsByCollectionId } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> {
	const collection = await getCollectionByName(params.collection);

	return {
		title: collection?.name,
		openGraph: {
			title: collection?.name,
		},
	};
}

export default async function SingleCollectionPage({ params }: { params: { collection: string } }) {
	const collection = await getCollectionByName(params.collection);
	const productsInCollection = await getProductsByCollectionId(collection.id);
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<h1 className="pb-20 text-4xl font-extrabold first-letter:uppercase" role="heading">
				{params.collection}
			</h1>
			<ProductList products={productsInCollection} />
		</main>
	);
}

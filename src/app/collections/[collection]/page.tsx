import { getCollectionByName } from "@/app/api/collections";
import { getProductsByCollectionId } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function SingleCollectionPage({ params }: { params: { collection: string } }) {
	const collection = await getCollectionByName(params.collection);
	const productsInCollection = await getProductsByCollectionId(collection.id);
	return (
		<main className="min-h-screen">
			<h1 className="px-16 pb-20 text-4xl font-extrabold first-letter:uppercase">
				{params.collection}
			</h1>
			<ProductList products={productsInCollection} />
		</main>
	);
}

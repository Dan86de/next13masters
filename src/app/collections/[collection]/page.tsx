import { getCollectionByName } from "@/app/api/collections";
import { getProductsByCollectionId } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function SingleCollectionPage({ params }: { params: { collection: string } }) {
	const collection = await getCollectionByName(params.collection);
	const productsInCollection = await getProductsByCollectionId(collection.id);
	return (
		<main className="min-h-screen">
			<ProductList products={productsInCollection} />
		</main>
	);
}

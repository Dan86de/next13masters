import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList(4);

	return (
		<>
			<div className="py-24 text-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
				<p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
					Thoughtfully designed objects for the workspace, home, and travel.
				</p>
			</div>
			<ProductList products={products} />
		</>
	);
}

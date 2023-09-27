import { getProducts } from "@/app/api/products";
import { NewArrivalsPromoSection } from "@/components/NewArrivalsPromoSection";
import { ProductList } from "@/components/ProductList";

export default async function ProductsPage() {
	const products = await getProducts(4);

	return (
		<>
			<div className="mb-12 py-24 text-center">
				<h1 className="text-5xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
				<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
					Thoughtfully designed objects for the workspace, home, and travel.
				</p>
			</div>
			<ProductList products={products} />
			<NewArrivalsPromoSection />
		</>
	);
}

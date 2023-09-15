import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList();

	return <ProductList products={products} />;
}

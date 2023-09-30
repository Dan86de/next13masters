import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList(0, 20);

	return <ProductList products={products} />;
}

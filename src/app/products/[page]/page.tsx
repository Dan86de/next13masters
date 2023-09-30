import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export async function generateStaticParams() {
	const products = await getProductsList(undefined, 300);
	const numOfPages = Math.ceil(products.length / 20);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const skip = Number(params.page) === 1 ? 0 : Number(params.page) * 20 - 20;
	const products = await getProductsList(skip, 20);

	return <ProductList products={products} />;
}

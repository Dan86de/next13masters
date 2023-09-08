import { getProductsList, getProductsPaginated } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export async function generateStaticParams() {
	const products = await getProductsList();
	const numOfPages = Math.ceil(products.length / 20);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const products = await getProductsPaginated(Number(params.page));

	return <ProductList products={products} />;
}

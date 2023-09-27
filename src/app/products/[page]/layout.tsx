import { getProducts } from "@/app/api/products";
import { Pagination } from "@/components/Pagination";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const products = await getProducts();
	const numOfPages = Math.ceil(products.length / 20);
	return (
		<>
			<section>{children}</section>
			<Pagination numOfPages={numOfPages} />
		</>
	);
}

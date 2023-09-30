import { Pagination } from "@/components/Pagination";
import { getProductsList } from "../api/products";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const products = await getProductsList(0, 300);
	const numOfPages = Math.ceil(products.length / 20);
	return (
		<>
			<section>{children}</section>
			<Pagination numOfPages={numOfPages} baseUrl="products" />
		</>
	);
}

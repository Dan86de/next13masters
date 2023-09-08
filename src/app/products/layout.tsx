import { getProductsList } from "@/app/api/products";
import { Pagination } from "@/components/Pagination";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const products = await getProductsList();
	const numOfPages = Math.ceil(products.length / 20);
	return (
		<>
			{children}
			<Pagination numOfPages={numOfPages} />
		</>
	);
}

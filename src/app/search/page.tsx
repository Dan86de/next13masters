import { ProductList } from "@/components/ProductList";
import { getProductsByName } from "../api/products";

export default async function SearchResultPage({
	searchParams,
}: {
	searchParams: {
		query: string;
	};
}) {
	const query = searchParams.query || "";
	const products = await getProductsByName(query);
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<h1 className="pb-20 text-4xl font-extrabold first-letter:uppercase" role="heading">
				Search Results
			</h1>
			{products.length === 0 ? (
				<p className="pb-20 text-2xl font-extrabold first-letter:uppercase" role="heading">
					No results found
				</p>
			) : (
				<ProductList products={products} />
			)}
		</main>
	);
}

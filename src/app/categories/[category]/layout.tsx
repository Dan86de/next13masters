import { getCategoryByName } from "@/app/api/categories";
import { getProductsByCategoryId } from "@/app/api/products";
import { Pagination } from "@/components/Pagination";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> {
	const category = await getCategoryByName(params.category);

	return {
		title: category?.name,
		openGraph: {
			title: category?.name,
		},
	};
}

export default async function CategoryLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string };
}) {
	const products = await getProductsByCategoryId(params.category);
	const numOfPages = Math.ceil(products.length / 20);
	return (
		<>
			<h1 className="mx-auto max-w-7xl pb-20 text-4xl font-extrabold first-letter:uppercase">
				{params.category}
			</h1>
			<main className="mx-auto max-w-7xl">{children}</main>
			<Pagination numOfPages={numOfPages} baseUrl={`categories/${params.category}`} />
		</>
	);
}

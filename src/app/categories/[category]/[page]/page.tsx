import { getCategoryByName } from "@/app/api/categories";
import { getProductsByCategoryId } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function CategoryPage({ params }: { params: { category: string } }) {
	const category = await getCategoryByName(params.category);
	const productsInThisCategory = await getProductsByCategoryId(category?.id);
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<ProductList products={productsInThisCategory} />
		</main>
	);
}

import { getCategoryByName } from "@/app/api/categories";
import { getProductsByCategoryId } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function CategoryPage({ params }: { params: { category: string } }) {
	const category = await getCategoryByName(params.category);
	if (!category) return <div>Category not found</div>;
	const productsInThisCategory = await getProductsByCategoryId(category?.id);
	return (
		<main className="min-h-screen">
			<ProductList products={productsInThisCategory} />
		</main>
	);
}

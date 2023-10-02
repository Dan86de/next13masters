import { getCategoriesList } from "@/app/api/categories";
import { getProductsByCategoryId } from "@/app/api/products";
import { Category } from "@/model/category";
import Link from "next/link";

export const SuggestedProducts = async ({ categoryName }: { categoryName: string }) => {
	const otherCategories: Category[] = (await getCategoriesList()).filter(
		(category) => category.name !== categoryName,
	);
	const randomRelatedCategory = otherCategories[Math.floor(Math.random() * otherCategories.length)];

	const fourRelatedProducts = (await getProductsByCategoryId(randomRelatedCategory.id)).splice(
		0,
		4,
	);
	{
		/* Related products */
	}
	return (
		<section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
			<h2 id="related-heading" className="text-lg font-medium text-gray-900">
				Customers also purchased
			</h2>

			<ul
				className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
				data-testid="related-products"
			>
				{fourRelatedProducts.map((relatedProduct) => (
					<li key={relatedProduct.id} className="group relative">
						<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
							<img
								src={relatedProduct.image.src}
								alt={relatedProduct.image.alt}
								className="h-full w-full object-cover object-center lg:h-full lg:w-full"
							/>
						</div>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-sm text-gray-700">
									<Link href={`/product/${relatedProduct.id}`}>
										<span aria-hidden="true" className="absolute inset-0" />
										{relatedProduct.name}
									</Link>
								</h3>
								<p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
							</div>
							<p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

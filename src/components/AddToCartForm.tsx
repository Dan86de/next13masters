import { getCategoryByName } from "@/app/api/categories";
import { ProductColorPicker } from "@/components/ProductColorPicker";
import { ProductSizePicker } from "@/components/ProductSizePicker";
import { Button } from "@/components/ui/button";

export const AddToCartForm = async ({
	params,
	searchParams,
	productCategory,
}: {
	params: { productId: string };
	searchParams: { color: string; size: string };
	productCategory: string;
}) => {
	const category = await getCategoryByName(productCategory);

	async function addToCartAction(formData: FormData) {
		"use server";
		console.log(category);
		console.log("params", params.productId);
		console.log(formData);
		console.log("add to cart");
	}

	return (
		<form action={addToCartAction}>
			{/* Color picker */}
			{category.variations.filter((variation) => variation.name === "color").length > 0 && (
				<ProductColorPicker
					currentColor={searchParams.color}
					currentSize={searchParams.size}
					colorVariationOptions={
						category.variations.filter((variation) => variation.name === "color")[0]
							.variation_options
					}
				/>
			)}

			{/* Size picker */}
			{category.variations.filter((variation) => variation.name === "size").length > 0 && (
				<ProductSizePicker
					currentColor={searchParams.color}
					currentSize={searchParams.size}
					sizeVariationOptions={
						category.variations.filter((variation) => variation.name === "size")[0]
							.variation_options
					}
				/>
			)}

			<Button variant={"default"} className="mt-4 w-full">
				Add to cart
			</Button>
		</form>
	);
};

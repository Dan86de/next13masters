import { getCategoryByName } from "@/app/api/categories";
import { addToCartAction } from "@/app/cart/actions";
import { ProductColorPicker } from "@/components/ProductColorPicker";
import { ProductSizePicker } from "@/components/ProductSizePicker";
import { Button } from "@/components/ui/button";
import { ProductItem } from "@/model/productItem";

export const AddToCartForm = async ({
	params,
	searchParams,
	productCategory,
	selectedVariant,
}: {
	params: { productId: string };
	searchParams: { color: string; size: string };
	productCategory: string;
	selectedVariant: ProductItem;
}) => {
	const category = await getCategoryByName(productCategory);
	const colorOptions = category.variations.filter((variation) => variation.name === "color");
	const sizeOptions = category.variations.filter((variation) => variation.name === "size");

	const addToCartActionWithSelectedItem = addToCartAction.bind(null, {
		selectedVariant,
		// TODO: think about user flow in app
		userId: "6f45312c-270c-4dd1-b8b3-106ff53907d6",
	});

	return (
		<form action={addToCartActionWithSelectedItem}>
			<input type="hidden" value={params.productId} name="productId" />
			{/* Color picker */}
			{colorOptions.length > 0 && (
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
			{sizeOptions.length > 0 && (
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

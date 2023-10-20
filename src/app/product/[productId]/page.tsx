import { getCategoryByName } from "@/app/api/categories";
import { getProductById } from "@/app/api/products";
import { AddToCartForm } from "@/components/AddToCartForm";
import { SupportedColors } from "@/components/ProductColorPicker";
import { ProductReviews } from "@/components/ProductReviews";
import { SupportedSizes } from "@/components/ProductSizePicker";
import { SuggestedProducts } from "@/components/SuggestedProducts";
import { cn, formatMoney } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product?.name,
		description: product?.description,
		openGraph: {
			title: product?.name,
			description: product?.description,
			images: [
				{
					url: product?.image.src || "",
					width: 800,
					height: 600,
					alt: product?.image.alt,
				},
			],
		},
	};
}

export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { color: string; size: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		return <div>There is no product with this id.</div>;
	}
	const category = await getCategoryByName(product.category);

	const sizeVariationOptions =
		category.variations.filter((variation) => variation.name === "size").length > 0
			? category.variations.filter((variation) => variation.name === "size")[0].variation_options
			: [];

	let selectedColor = searchParams.color;
	let selectedSize = searchParams.size;
	if (!Object.values(SupportedColors).includes(selectedColor as SupportedColors)) {
		selectedColor = SupportedColors.white;
	}
	if (
		!Object.values(SupportedSizes).includes(selectedSize as SupportedSizes) &&
		sizeVariationOptions.length
	) {
		if (sizeVariationOptions[0].value === "XXS") {
			selectedSize = SupportedSizes.XXS;
		} else {
			selectedSize = SupportedSizes._36;
		}
	}
	const selectedVariant = product?.product_items.find((item) => {
		if (selectedColor && selectedSize) {
			return item.SKU === `${selectedSize.toUpperCase()}_${selectedColor.toUpperCase()}`;
		} else if (selectedColor) {
			return item.SKU === `${selectedColor.toUpperCase()}`;
		} else {
			item.SKU === `${selectedSize.toUpperCase()}`;
		}
	});

	// if (!selectedVariant) {
	// 	return <div>There is no product with this id.</div>;
	// }

	return (
		<main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
			<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
				<div className="lg:col-span-5 lg:col-start-8">
					<div className="flex justify-between">
						<h1 className="text-xl font-medium text-zinc-900">{product.name}</h1>
						<p className="text-xl font-medium text-zinc-900">
							{selectedVariant
								? formatMoney(selectedVariant.price / 100)
								: formatMoney(product.price / 100)}
						</p>
					</div>
					{/* Reviews */}
					<div className="mt-4">
						<h2 className="sr-only">Reviews</h2>
						<div className="flex items-center">
							<p className="text-sm text-zinc-700">
								{5.0}
								<span className="sr-only"> out of 5 stars</span>
							</p>
							<div className="ml-1 flex items-center">
								{[1, 2, 3, 4, 5].map((rating) => (
									<StarIcon
										key={rating}
										className={cn(
											5.0 > rating ? "text-orange-500" : "text-zinc-200",
											"h-5 w-5 flex-shrink-0",
										)}
										aria-hidden="true"
									/>
								))}
							</div>
							<div aria-hidden="true" className="ml-4 text-sm text-zinc-300">
								·
							</div>
							<div className="ml-4 flex">
								<a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-500">
									See all {543} reviews
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Image gallery */}
				<div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
					<h2 className="sr-only">Images</h2>

					<Image
						width={696}
						height={696}
						priority
						key={product.image.alt}
						src={product.image.src}
						alt={product.image.alt}
						className={cn(true ? "lg:col-span-2 lg:row-span-2" : "hidden lg:block", "rounded-lg")}
					/>
				</div>
				<div className="mt-8 lg:col-span-5">
					{/* Add to cart form and variations picker */}
					<AddToCartForm
						params={params}
						productCategory={product.category}
						searchParams={searchParams}
						selectedVariant={selectedVariant ?? product.product_items[0]}
					/>
					<p>{`Still ${
						selectedVariant
							? selectedVariant.quantityInStock
							: product.product_items[0].quantityInStock
					} items in stock.`}</p>

					{/* Product details */}
					<div className="mt-10">
						<h2 className="text-sm font-medium text-zinc-900">Description</h2>
						<div className="prose prose-sm mt-4 text-zinc-500">{product.description}</div>
					</div>
				</div>
			</div>

			{/* Reviews */}
			<Suspense>
				<ProductReviews />
			</Suspense>
			<Suspense>
				<SuggestedProducts categoryName={product.category} />
			</Suspense>
		</main>
	);
}

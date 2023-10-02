import { getCategoryByName } from "@/app/api/categories";
import { getProductById } from "@/app/api/products";
import { ProductReviews } from "@/components/ProductReviews";
import { SuggestedProducts } from "@/components/SuggestedProducts";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	const selectedSize = "37";
	const setSelectedSize = () => {};

	if (!product) {
		return <div>There is no product with this id.</div>;
	}
	const category = await getCategoryByName(product.category);
	// const classes = [
	// 	"bg-red-500",
	// 	"bg-blue-500",
	// 	"bg-gray-500",
	// 	"bg-orange-500",
	// 	"bg-yellow-500",
	// 	"bg-black-500",
	// 	"bg-white-500",
	// ];

	const colors: { [K: string]: { name: string; bgColor: string; selectedColor: string } } = {
		black: { name: "black", bgColor: "bg-zinc-900", selectedColor: "ring-zinc-900" },
		white: { name: "white", bgColor: "bg-white-400", selectedColor: "ring-gray-400" },
		red: { name: "red", bgColor: "bg-red-400", selectedColor: "ring-red-400" },
		blue: { name: "blue", bgColor: "bg-blue-400", selectedColor: "ring-blue-400" },
		gray: { name: "gray", bgColor: "bg-gray-400", selectedColor: "ring-gray-400" },
		orange: { name: "orange", bgColor: "bg-orange-400", selectedColor: "ring-orange-400" },
		yellow: { name: "yellow", bgColor: "bg-yellow-400", selectedColor: "ring-yellow-400" },
	};
	async function addToCartAction() {
		"use server";
		console.log(category);
		console.log("params", params.productId);
		console.log("add to cart");
	}
	return (
		<main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
			<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
				<div className="lg:col-span-5 lg:col-start-8">
					<div className="flex justify-between">
						<h1 className="text-xl font-medium text-zinc-900">{product.name}</h1>
						<p className="text-xl font-medium text-zinc-900">{formatMoney(product.price / 100)}</p>
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
								{[0, 1, 2, 3, 4].map((rating) => (
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
						key={product.image.alt}
						src={product.image.src}
						alt={product.image.alt}
						className={cn(true ? "lg:col-span-2 lg:row-span-2" : "hidden lg:block", "rounded-lg")}
					/>
				</div>

				<div className="mt-8 lg:col-span-5">
					<form action={addToCartAction}>
						{/* Color picker */}
						{category.variations.filter((variation) => variation.name === "color").length > 0 && (
							<div>
								<h2 className="text-sm font-medium text-zinc-900">Color</h2>

								<RadioGroup className="my-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
									<Label className="sr-only">Choose a color</Label>
									<div className="flex items-center space-x-3">
										{category.variations
											.filter((variation) => variation.name === "color")[0]
											.variation_options.map((color) => (
												<RadioGroupItem
													key={color.id}
													value={color.value}
													className={cn(
														colors[color.value] ? colors[color.value].bgColor : "bg-gray-900",
														"h-8 w-8 rounded-full border border-black border-opacity-10",
													)}
												>
													<Label className="sr-only">{color.value}</Label>
												</RadioGroupItem>
											))}
									</div>
								</RadioGroup>
							</div>
						)}

						{/* Size picker */}
						{category.variations.filter((variation) => variation.name === "size").length > 0 && (
							<div className="mt-8">
								<div className="flex items-center justify-between">
									<h2 className="text-sm font-medium text-zinc-900">Size</h2>
								</div>

								<RadioGroup
									className="my-4 grid grid-cols-3 gap-3 sm:grid-cols-6"
									// DEFAULT VALUE ??
									// defaultValue={
									// 	category.variations.filter((variation) => variation.name === "size")[0]
									// 		.variation_options[0].value
									// }
								>
									<Label className="sr-only">Choose a size</Label>
									{category.variations
										.filter((variation) => variation.name === "size")[0]
										.variation_options.map((size) => (
											<div>
												<RadioGroupItem
													value={size.value}
													id={size.id}
													className="peer sr-only checked:bg-zinc-950 checked:text-zinc-50"
												/>
												<Label
													htmlFor={size.id}
													className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
												>
													{size.value}
												</Label>
											</div>
										))}
								</RadioGroup>
							</div>
						)}

						<Button variant={"default"} className="w-full">
							Add to cart
						</Button>
					</form>

					{/* Product details */}
					<div className="mt-10">
						<h2 className="text-sm font-medium text-zinc-900">Description</h2>

						<div
							className="prose prose-sm mt-4 text-zinc-500"
							dangerouslySetInnerHTML={{ __html: product.description }}
						/>
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

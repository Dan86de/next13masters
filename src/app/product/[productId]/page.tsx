import { getProductById } from "@/app/api/products";
import { SuggestedProducts } from "@/components/SuggestedProducts";
import { Button } from "@/components/ui/button";
import { cn, formatMoney } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { type Metadata } from "next";

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
	if (!product) {
		return <div>There is no product with this id.</div>;
	}
	console.log(product);
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

					{/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
						{product.images.map((image) => (
							<img
								key={image.id}
								src={image.imageSrc}
								alt={image.imageAlt}
								className={classNames(
									image.primary ? "lg:col-span-2 lg:row-span-2" : "hidden lg:block",
									"rounded-lg",
								)}
							/>
						))}
					</div> */}

					<img
						key={product.image.alt}
						src={product.image.src}
						alt={product.image.alt}
						className={cn(true ? "lg:col-span-2 lg:row-span-2" : "hidden lg:block", "rounded-lg")}
					/>
				</div>

				<div className="mt-8 lg:col-span-5">
					<form>
						{/* Color picker */}
						{/* <div>
							<h2 className="text-sm font-medium text-zinc-900">Color</h2>

							<RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
								<RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
								<div className="flex items-center space-x-3">
									{product.colors.map((color) => (
										<RadioGroup.Option
											key={color.name}
											value={color}
											className={({ active, checked }) =>
												classNames(
													color.selectedColor,
													active && checked ? "ring ring-offset-1" : "",
													!active && checked ? "ring-2" : "",
													"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
												)
											}
										>
											<RadioGroup.Label as="span" className="sr-only">
												{color.name}
											</RadioGroup.Label>
											<span
												aria-hidden="true"
												className={classNames(
													color.bgColor,
													"h-8 w-8 rounded-full border border-black border-opacity-10",
												)}
											/>
										</RadioGroup.Option>
									))}
								</div>
							</RadioGroup>
						</div> */}

						{/* Size picker */}
						{/* <div className="mt-8">
							<div className="flex items-center justify-between">
								<h2 className="text-sm font-medium text-zinc-900">Size</h2>
								<a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
									See sizing chart
								</a>
							</div>

							<RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
								<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
								<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
									{product.sizes.map((size) => (
										<RadioGroup.Option
											key={size.name}
											value={size}
											className={({ active, checked }) =>
												classNames(
													size.inStock
														? "cursor-pointer focus:outline-none"
														: "cursor-not-allowed opacity-25",
													active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
													checked
														? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
														: "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50",
													"flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1",
												)
											}
											disabled={!size.inStock}
										>
											<RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
										</RadioGroup.Option>
									))}
								</div>
							</RadioGroup>
						</div> */}

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

					{/* <div className="mt-8 border-t border-zinc-200 pt-8">
						<h2 className="text-sm font-medium text-zinc-900">Fabric &amp; Care</h2>

						<div className="prose prose-sm mt-4 text-zinc-500">
							<ul role="list">
								{product.details.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div> */}

					{/* Policies */}
					{/* <section aria-labelledby="policies-heading" className="mt-10">
						<h2 id="policies-heading" className="sr-only">
							Our Policies
						</h2>

						<dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
							{policies.map((policy) => (
								<div
									key={policy.name}
									className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-center"
								>
									<dt>
										<policy.icon
											className="mx-auto h-6 w-6 flex-shrink-0 text-zinc-400"
											aria-hidden="true"
										/>
										<span className="mt-4 text-sm font-medium text-zinc-900">{policy.name}</span>
									</dt>
									<dd className="mt-1 text-sm text-zinc-500">{policy.description}</dd>
								</div>
							))}
						</dl>
					</section> */}
				</div>
			</div>

			{/* Reviews */}
			{/* <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
				<h2 id="reviews-heading" className="text-lg font-medium text-zinc-900">
					Recent reviews
				</h2>

				<div className="mt-6 space-y-10 divide-y divide-zinc-200 border-b border-t border-zinc-200 pb-10">
					{reviews.featured.map((review) => (
						<div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
								<div className="flex items-center xl:col-span-1">
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={classNames(
													review.rating > rating ? "text-yellow-400" : "text-zinc-200",
													"h-5 w-5 flex-shrink-0",
												)}
												aria-hidden="true"
											/>
										))}
									</div>
									<p className="ml-3 text-sm text-zinc-700">
										{review.rating}
										<span className="sr-only"> out of 5 stars</span>
									</p>
								</div>

								<div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
									<h3 className="text-sm font-medium text-zinc-900">{review.title}</h3>

									<div
										className="mt-3 space-y-6 text-sm text-zinc-500"
										dangerouslySetInnerHTML={{ __html: review.content }}
									/>
								</div>
							</div>

							<div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
								<p className="font-medium text-zinc-900">{review.author}</p>
								<time
									dateTime={review.datetime}
									className="ml-4 border-l border-zinc-200 pl-4 text-zinc-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
								>
									{review.date}
								</time>
							</div>
						</div>
					))}
				</div>
			</section> */}

			<SuggestedProducts categoryName={product.category} />
		</main>
	);
}

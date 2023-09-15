import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getProductsList } from "@/app/api/products";

export const HomeTrendingProducts = async () => {
	const trendingProducts = await getProductsList(4);
	return (
		<section aria-labelledby="trending-heading" className="bg-white">
			<div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
				<div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
					<h2 id="trending-heading" className="text-2xl font-bold tracking-tight text-gray-900">
						Trending products
					</h2>
					<Link
						href={"/products/1"}
						className="hidden text-sm font-semibold text-zinc-600 hover:text-zinc-500 sm:block"
					>
						See everything
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>

				<div className="relative mt-8">
					<div className="relative w-full overflow-x-auto">
						<ul
							role="list"
							className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-2 md:gap-y-0 lg:grid-cols-4 lg:gap-x-8"
						>
							{trendingProducts.map((product) => (
								<li
									key={product.id}
									className="mx-auto inline-flex w-64 flex-col text-center lg:w-auto"
								>
									<div className="group relative">
										<div className="aspect-h-1 aspect-w-1 h-96 w-full overflow-hidden rounded-md bg-gray-200">
											<Image
												src={product.image.src}
												alt={product.image.alt}
												width={100}
												height={100}
												className="h-full w-full object-cover object-center group-hover:opacity-75"
											/>
										</div>
										<div className="mt-6">
											<p className="text-sm text-gray-500">{product.category}</p>
											<h3 className="mt-1 font-semibold text-gray-900">
												<Link href={`/product/${product.id}`}>
													<span className="absolute inset-0" />
													{product.name}
												</Link>
											</h3>
											<p className="mt-1 text-gray-900">{product.price}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-12 px-4 sm:hidden">
					<Link href={"/products"}>
						<Button>
							See everything<span aria-hidden="true"> &rarr;</span>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

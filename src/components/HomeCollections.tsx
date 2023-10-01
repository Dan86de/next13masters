import { getCollectionsList } from "@/app/api/collections";
import Link from "next/link";
import { UrlObject } from "url";
import { Button } from "./ui/button";

export const HomeCollections = async () => {
	const collections = (await getCollectionsList()).slice(0, 4);
	return (
		<section aria-labelledby="trending-heading" className="bg-white">
			<div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
				<div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
					<h2 id="trending-heading" className="text-2xl font-bold tracking-tight text-zinc-900">
						Trending Collections
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
							data-testid="collections-list"
							role="list"
							className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-2 md:gap-y-0 lg:grid-cols-4 lg:gap-x-8"
						>
							{collections.map((collection) => (
								<li
									key={collection.id}
									className="mx-auto inline-flex w-64 flex-col text-center lg:w-auto"
								>
									<div className="group relative">
										<div className="mt-6">
											<h3 className="mt-1 font-semibold text-zinc-900">
												<Link href={`/collections/${collection.name}` as unknown as UrlObject}>
													<span className="absolute inset-0" />
													{collection.name}
												</Link>
											</h3>
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

import clsx from "clsx";
import { StarIcon } from "lucide-react";

const reviews = {
	average: 4,
	totalCount: 1624,
	counts: [
		{ rating: 5, count: 1019 },
		{ rating: 4, count: 162 },
		{ rating: 3, count: 97 },
		{ rating: 2, count: 199 },
		{ rating: 1, count: 147 },
	],
	featured: [
		{
			id: 1,
			rating: 5,
			content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
			author: "Emily Selman",
			avatarSrc:
				"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
		},
		// More reviews...
	],
};

export const ProductReviews = () => {
	return (
		<section aria-labelledby="reviews-heading" className="mt-8 sm:mt-16">
			<div className="bg-zinc-100">
				<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
					<div className="lg:col-span-4">
						<h2 className="text-2xl font-bold tracking-tight text-zinc-900">Customer Reviews</h2>

						{/* STARS AND BASED ON TEXT */}
						<div className="mt-3 flex items-center">
							<div>
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={clsx(
												reviews.average > rating ? "text-orange-400" : "text-zinc-300",
												"h-5 w-5 flex-shrink-0",
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
							</div>
							<p className="ml-2 text-sm text-zinc-900">Based on {reviews.totalCount} reviews</p>
						</div>
						{/* REVIEW STATS AND PERCENTAGES */}
						<div className="mt-6">
							<h3 className="sr-only">Review data</h3>

							<dl className="space-y-3">
								{reviews.counts.map((count) => (
									<div key={count.rating} className="flex items-center text-sm">
										<dt className="flex flex-1 items-center">
											<p className="w-3 font-medium text-zinc-900">
												{count.rating}
												<span className="sr-only"> star reviews</span>
											</p>
											<div aria-hidden="true" className="ml-1 flex flex-1 items-center">
												<StarIcon
													className={clsx(
														count.count > 0 ? "text-orange-400" : "text-zinc-300",
														"h-5 w-5 flex-shrink-0",
													)}
													aria-hidden="true"
												/>

												<div className="relative ml-3 flex-1">
													<div className="h-3 rounded-full border border-zinc-200 bg-zinc-100" />
													{count.count > 0 ? (
														<div
															className="absolute inset-y-0 rounded-full border border-orange-400 bg-orange-400"
															style={{
																width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
															}}
														/>
													) : null}
												</div>
											</div>
										</dt>
										<dd className="ml-3 w-10 text-right text-sm tabular-nums text-zinc-900">
											{Math.round((count.count / reviews.totalCount) * 100)}%
										</dd>
									</div>
								))}
							</dl>
						</div>
						{/* WRITE A REVIEW BUTTON */}
						<div className="mt-10">
							<h3 className="text-lg font-medium text-zinc-900">Share your thoughts</h3>
							<p className="mt-1 text-sm text-zinc-600">
								If you’ve used this product, share your thoughts with other customers
							</p>
							{/* <AddReviewForm /> */}
						</div>
					</div>
					{/* REVIEW LIST */}
					<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
						<h3 className="sr-only">Recent reviews</h3>

						<div className="flow-root">
							<div className="-my-12 divide-y divide-zinc-200">
								{reviews.featured.map((review) => (
									<div key={review.id} className="py-12">
										<div className="flex items-center">
											<img
												src={review.avatarSrc}
												alt={`${review.author}.`}
												className="h-12 w-12 rounded-full"
											/>
											<div className="ml-4">
												<h4 className="text-sm font-bold text-zinc-900">{review.author}</h4>
												<div className="mt-1 flex items-center">
													{[0, 1, 2, 3, 4].map((rating) => (
														<StarIcon
															key={rating}
															className={clsx(
																review.rating > rating ? "text-orange-400" : "text-zinc-300",
																"h-5 w-5 flex-shrink-0",
															)}
															aria-hidden="true"
														/>
													))}
												</div>
												<p className="sr-only">{review.rating} out of 5 stars</p>
											</div>
										</div>

										<div
											className="mt-4 space-y-6 text-base italic text-zinc-600"
											dangerouslySetInnerHTML={{ __html: review.content }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

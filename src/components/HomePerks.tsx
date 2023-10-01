import Image from "next/image";

const perks = [
	{
		name: "Free returns",
		imageUrl: "./icons/icon-returns-light.svg",
		description:
			"Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
	},
	{
		name: "Same day delivery",
		imageUrl: "./icons/icon-calendar-light.svg",
		description:
			"We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
	},
	{
		name: "All year discount",
		imageUrl: "./icons/icon-gift-card-light.svg",
		description:
			'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
	},
	{
		name: "For the planet",
		imageUrl: "./icons/icon-planet-light.svg",
		description:
			"We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
	},
];

export const HomePerks = () => {
	return (
		<section aria-labelledby="perks-heading" className="border-t border-zinc-200 bg-zinc-200">
			<h2 id="perks-heading" className="sr-only">
				Our perks
			</h2>

			<div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
					{perks.map((perk) => (
						<div
							key={perk.name}
							className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
						>
							<div className="md:flex-shrink-0">
								<div className="flow-root">
									<Image
										className="-my-1 mx-auto h-24 w-auto"
										width={100}
										height={100}
										src={perk.imageUrl}
										alt={perk.name}
									/>
								</div>
							</div>
							<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
								<h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
								<p className="mt-3 text-sm text-gray-500">{perk.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

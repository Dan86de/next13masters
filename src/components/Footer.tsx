import Link from "next/link";

const navigation = {
	solutions: [
		{ name: "Marketing", href: "#" },
		{ name: "Analytics", href: "#" },
		{ name: "Commerce", href: "#" },
		{ name: "Insights", href: "#" },
	],
	support: [
		{ name: "Pricing", href: "#" },
		{ name: "Documentation", href: "#" },
		{ name: "Guides", href: "#" },
		{ name: "API Status", href: "#" },
	],
	company: [
		{ name: "About", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Jobs", href: "#" },
		{ name: "Press", href: "#" },
		{ name: "Partners", href: "#" },
	],
	legal: [
		{ name: "Claim", href: "#" },
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
	],
};

export const Footer = () => {
	return (
		<footer className="bg-zinc-950" aria-labelledby="footer-heading">
			<h3 id="footer-heading" className="sr-only">
				Footer
			</h3>
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<Link href={"/"} className="block w-40 ">
						<h3 className="-rotate-6 bg-zinc-50 p-2 text-3xl font-semibold text-zinc-950">
							ShopSync
						</h3>
					</Link>
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-zinc-100">Solutions</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.solutions.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-zinc-300 hover:text-zinc-100"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-zinc-100">Support</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-zinc-300 hover:text-zinc-100"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-zinc-100">Company</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-zinc-300 hover:text-zinc-100"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-zinc-100">Legal</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-zinc-300 hover:text-zinc-100"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<p className="mt-20 text-center text-sm text-zinc-200">
					&copy; {new Date().getFullYear()} ShopSync Studios
				</p>
			</div>
		</footer>
	);
};

import { getCategoriesList } from "@/app/api/categories";
import Link from "next/link";
import { UrlObject } from "url";
import { ActiveLink } from "./ActiveLink";

export const Navbar = async () => {
	const categories = await getCategoriesList();
	return (
		<nav className="mx-auto flex max-w-7xl justify-between p-6 py-10">
			<Link href={"/"}>
				<span className="block -rotate-6 bg-zinc-950 p-2 text-3xl font-semibold text-zinc-50">
					ShopSync
				</span>
			</Link>
			<ul className="flex items-center gap-4" role="navigation">
				<ActiveLink
					href={"/"}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold"
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={"/products"}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold"
					exact={false}
				>
					All
				</ActiveLink>
				{categories.map((category) => (
					<ActiveLink
						key={category.id}
						href={`/categories/${category.name}` as unknown as UrlObject}
						className="border-b-2 border-b-transparent text-lg"
						activeClassName="border-b-2 border-zinc-900 text-lg font-semibold"
						exact={false}
					>
						{category.name}
					</ActiveLink>
				))}
			</ul>
		</nav>
	);
};

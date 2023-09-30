import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
	return (
		<nav className="mx-auto flex max-w-7xl justify-between p-6 py-10">
			<Link href={"/"}>
				<h2 className="-rotate-6 bg-zinc-950 p-2 text-3xl font-semibold text-zinc-50">ShopSync</h2>
			</Link>
			<ul className="flex items-center gap-4" role="navigation">
				<ActiveLink
					href={"/"}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={"/products"}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
					exact={false}
				>
					All
				</ActiveLink>
			</ul>
		</nav>
	);
};

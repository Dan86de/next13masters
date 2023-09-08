import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
	return (
		<nav className="mx-auto flex max-w-7xl justify-between p-4">
			<Link href={"/"}>
				<h2 className="text-2xl font-semibold">SneakerSync</h2>
			</Link>
			<ul className="flex items-center gap-4">
				<ActiveLink href={"/"} activeClassName="border-b-2 border-zinc-900">
					Home
				</ActiveLink>
				<ActiveLink href={"/products"} activeClassName="border-b-2 border-zinc-900">
					All
				</ActiveLink>
			</ul>
		</nav>
	);
};

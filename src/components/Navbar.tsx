import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
	return (
		<nav className="mx-auto flex max-w-7xl justify-between p-4">
			<h1 className="text-2xl font-semibold">SneakerSync</h1>
			<ul className="flex items-center gap-4">
				<ActiveLink href={"/"}>Home</ActiveLink>
				<ActiveLink href={"/products"}>All</ActiveLink>
			</ul>
		</nav>
	);
};

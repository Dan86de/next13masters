"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type ActiveLinkProps = ComponentProps<typeof Link> & {
	exact?: boolean;
	activeClassName?: string;
};

export const ActiveLink = ({
	exact = true,
	href,
	className,
	activeClassName,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();

	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;
	const isActive =
		(matchedPath &&
			pathname &&
			(exact ? pathname === matchedPath : pathname.startsWith(matchedPath))) ||
		false;

	return (
		<Link
			{...props}
			href={href}
			className={isActive ? activeClassName : className}
			aria-current={isActive ? isActive : undefined}
			role={"link"}
		/>
	);
};

"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type ActiveLinkProps = ComponentProps<typeof Link> & {
	exact?: boolean;
	activeClassName?: string;
};

export const ActiveLink = ({ exact = true, href, ...props }: ActiveLinkProps) => {
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
			className="group relative block cursor-pointer text-sm font-normal uppercase outline-offset-4"
		>
			<div className="absolute bottom-0 flex w-full items-center justify-center">
				<div
					className={clsx(
						"h-[2px] w-0 bg-zinc-950 transition-all  duration-200 ease-in-out  group-hover:w-full dark:h-[1px]",
						{ "w-full": isActive },
					)}
				/>
			</div>
			{props.children}
		</Link>
	);
};

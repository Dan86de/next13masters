"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const ActivePaginationBtn = ({ page }: { page: number }) => {
	const pathname = usePathname();
	const currentPageFromPathname = pathname.split("/")[2];
	return (
		<Button
			variant="link"
			className={cn(page.toString() === currentPageFromPathname && "underline")}
		>
			{page}
		</Button>
	);
};

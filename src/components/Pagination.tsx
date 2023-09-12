import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Pagination = ({ numOfPages }: { numOfPages: number }) => {
	return (
		<div aria-label="pagination" className="mt-4 flex items-center justify-center gap-4">
			{Array.from({ length: numOfPages }, (_, i) => i + 1).map((page) => {
				return (
					<Link href={`/products/${page}`} key={page}>
						<Button variant="link">{page}</Button>
					</Link>
				);
			})}
		</div>
	);
};

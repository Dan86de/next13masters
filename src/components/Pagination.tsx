import Link from "next/link";

export const Pagination = ({ numOfPages }: { numOfPages: number }) => {
	return (
		<div aria-label="pagination" className="flex items-center justify-center gap-4">
			{Array.from({ length: numOfPages }, (_, i) => i + 1).map((page) => {
				return (
					<Link href={`/products/${page}`} key={page}>
						{page}
					</Link>
				);
			})}
		</div>
	);
};

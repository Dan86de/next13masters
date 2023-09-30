import Link from "next/link";
import { UrlObject } from "url";
import { ActivePaginationBtn } from "./ActivePaginationBtn";

export const Pagination = ({ numOfPages }: { numOfPages: number }) => {
	return (
		<nav>
			<ul aria-label="pagination" className="mt-4 flex items-center justify-center gap-4">
				{Array.from({ length: numOfPages }, (_, i) => i + 1).map((page) => {
					return (
						<li key={page}>
							<Link href={`/products/${page}` as unknown as UrlObject}>
								<ActivePaginationBtn page={page} />
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

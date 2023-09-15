import { ProductListItem } from "@/components/ProductListItem";
import { cn } from "@/lib/utils";
import { type Product } from "@/model/product";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul
			data-testid="products-list"
			className={cn(
				"mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8",
				products.length === 4 && `xl:grid-cols-4`,
			)}
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};

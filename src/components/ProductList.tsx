import { ProductListItem } from "@/components/ProductListItem";
import { type Product } from "@/model/product";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8 xl:grid-cols-4"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};

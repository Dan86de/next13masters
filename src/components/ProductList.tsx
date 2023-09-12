import { ProductListItem } from "@/components/ProductListItem";
import { type Product } from "@/model/product";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-0.5 gap-y-4 sm:grid-cols-2 xl:grid-cols-4"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};

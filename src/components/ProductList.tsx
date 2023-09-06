import { ProductListItem } from "@/components/ProductListItem";
import { type Product } from "@/model/product";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul data-testid="products-list" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};

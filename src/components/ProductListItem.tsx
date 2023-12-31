import { ProductCoverImage } from "@/components/ProductCoverImage";
import { ProductListItemDescription } from "@/components/ProductListItemDescription";
import { type Product } from "@/model/product";
import Link from "next/link";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.id} className="group">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.image.src} alt={product.image.alt} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};

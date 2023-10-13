import { getProductById } from "@/app/api/products";
import { formatMoney } from "@/lib/utils";
import { ProductItem } from "@/model/productItem";
import Link from "next/link";

export const ProductDetailsOnCartProductListItem = async ({
	productItem,
}: {
	productItem: ProductItem;
}) => {
	const product = await getProductById(productItem.productId);
	return (
		<div>
			<div className="flex justify-between">
				<h3 className="text-sm">
					<Link
						href={`/product/${product?.id}`}
						className="font-medium text-zinc-700 hover:text-zinc-800"
					>
						{product?.name}
					</Link>
				</h3>
			</div>
			{/* <div className="mt-1 flex text-sm">
				<p className="text-zinc-500">{color}</p>
				{size ? (
                            <p className="ml-4 border-l border-zinc-200 pl-4 text-zinc-500">
                              {size}
                            </p>
                          ) : null}
			</div> */}
			<p className="mt-1 text-sm font-medium text-zinc-900">
				{formatMoney(productItem.price / 100)}
			</p>
		</div>
	);
};

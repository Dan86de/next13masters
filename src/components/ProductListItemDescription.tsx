import { formatMoney } from "@/lib/utils";
import { type Product } from "@/model/product";

type ProductListItemDescriptionProps = {
	product: Product;
};

export const ProductListItemDescription = ({
	product: { name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
			<span className="text-sm text-zinc-700">{name}</span>

			<p className="font-mono text-sm font-medium text-zinc-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};

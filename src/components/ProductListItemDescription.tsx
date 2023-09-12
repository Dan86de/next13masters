import { formatMoney } from "@/lib/utils";
import { type Product } from "@/model/product";

type ProductListItemDescriptionProps = {
	product: Product;
};

export const ProductListItemDescription = ({
	product: { name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex flex-col justify-between gap-0.5">
			<div>
				<h3 className="text-sm text-zinc-700">{name}</h3>
			</div>
			<p className="font-mono text-sm font-medium text-zinc-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};

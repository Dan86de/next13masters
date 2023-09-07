import { formatMoney } from "@/lib/utils";
import { type Product } from "@/model/product";

type ProductListItemDescriptionProps = {
	product: Product;
};

export const ProductListItemDescription = ({
	product: { name, category, description, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-zinc-700">{name}</h2>
				<p className="text-sm text-zinc-500">
					<span className="sr-only">Kategoria: </span>
					{category}
				</p>
				<p className="text-sm text-zinc-500">{description}</p>
			</div>
			<p className="text-sm font-medium text-zinc-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};

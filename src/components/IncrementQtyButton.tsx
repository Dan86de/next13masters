import { incrementItemQtyInCart } from "@/app/cart/actions";
import { LucidePlusSquare } from "lucide-react";
import { Button } from "./ui/button";

export const IncrementQtyBtn = ({
	cartId,
	productItemId,
}: {
	cartId: string;
	productItemId: string;
}) => {
	const incrementQtyBtnAction = incrementItemQtyInCart.bind(null, { cartId, productItemId });
	return (
		<form action={incrementQtyBtnAction}>
			<Button
				size={"icon"}
				variant={"ghost"}
				className="aspect-square"
				type="submit"
				data-testid="add-to-cart-button"
			>
				<LucidePlusSquare />
			</Button>
		</form>
	);
};

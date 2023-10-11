import { decrementItemQtyInCart } from "@/app/cart/actions";
import { LucideMinusSquare } from "lucide-react";
import { Button } from "./ui/button";

export const DecrementQtyBtn = ({
	cartId,
	shoppingCartItemId,
}: {
	cartId: string;
	shoppingCartItemId: string;
}) => {
	const decrementQtyBtnAction = decrementItemQtyInCart.bind(null, { cartId, shoppingCartItemId });
	return (
		<form action={decrementQtyBtnAction}>
			<Button
				data-testid="decrement"
				size={"icon"}
				variant={"ghost"}
				className="aspect-square"
				type="submit"
			>
				<LucideMinusSquare />
			</Button>
		</form>
	);
};

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
	return (
		<form action={decrementItemQtyInCart}>
			<input type="text" name="cartId" defaultValue={cartId} className="sr-only" />
			<input
				type="text"
				name="shoppingCartItemId"
				defaultValue={shoppingCartItemId}
				className="sr-only"
			/>
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

import { incrementItemQtyInCart } from "@/app/cart/actions";
import { LucidePlusSquare } from "lucide-react";
import { Button } from "./ui/button";

export const IncrementQtyBtn = ({ shoppingCartItemId }: { shoppingCartItemId: string }) => {
	console.log("INCREMENT BTN DATA:", shoppingCartItemId);

	// TODO check if qty exists?
	return (
		<form action={incrementItemQtyInCart}>
			<input
				type="text"
				name="shoppingCartItemId"
				defaultValue={shoppingCartItemId}
				className="sr-only"
			/>
			<Button
				size={"icon"}
				variant={"ghost"}
				className="aspect-square"
				type="submit"
				data-testid="increment"
			>
				<LucidePlusSquare />
			</Button>
		</form>
	);
};

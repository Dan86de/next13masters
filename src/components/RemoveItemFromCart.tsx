import { removeCartItem } from "@/app/cart/actions";
import { LucideXCircle } from "lucide-react";
import { Button } from "./ui/button";

export const RemoveItemFromCartBtn = ({
	cartId,
	shoppingCartItemId,
}: {
	cartId: string;
	shoppingCartItemId: string;
}) => {
	const removeFromCartAction = removeCartItem.bind(null, { cartId, shoppingCartItemId });
	return (
		<form className="absolute right-0 top-0" action={removeFromCartAction}>
			<Button
				size={"icon"}
				variant={"ghost"}
				type="submit"
				className="-m-2 inline-flex p-2 text-zinc-400 hover:text-zinc-500"
			>
				<span className="sr-only">Remove</span>
				<LucideXCircle className="h-5 w-5" aria-hidden="true" />
			</Button>
		</form>
	);
};

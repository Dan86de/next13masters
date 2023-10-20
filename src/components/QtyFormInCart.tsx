"use client";

import { decrementItemQtyInCart, incrementItemQtyInCart } from "@/app/cart/actions";
import { Label } from "@radix-ui/react-label";
import { experimental_useOptimistic } from "react";
import { DecrementQtyBtn } from "./DecrementQtyButton";
import { IncrementQtyBtn } from "./IncrementQtyButton";

type QtyFormCartProps = {
	cartItemQty: number;
	cartItemId: string;
	cartId: string;
};

export const QtyFormInCart = ({ cartId, cartItemId, cartItemQty }: QtyFormCartProps) => {
	const [optimisticQty, changeQty] = experimental_useOptimistic(
		cartItemQty,
		(state: number, amount: number) => {
			console.log(state, amount, state + Number(amount));
			return state + Number(amount);
		},
	);
	const incrementQty = () => changeQty(1);
	const decrementQty = () => changeQty(-1);

	const incrementCartQty = async () => {
		await incrementItemQtyInCart(cartItemId);
		incrementQty();
	};

	const decrementCartQty = async () => {
		await decrementItemQtyInCart(cartId, cartItemId);
		decrementQty();
	};

	return (
		<div className="flex items-center gap-2">
			<Label htmlFor={`quantity`} className="sr-only">
				Quantity, {cartItemQty}
			</Label>
			<DecrementQtyBtn onClick={decrementCartQty} />
			<div data-testid="quantity" className="w-12 text-center">
				{optimisticQty}
			</div>
			<IncrementQtyBtn onClick={incrementCartQty} />
		</div>
	);
};

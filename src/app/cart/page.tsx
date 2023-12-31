import { ProductDetailsOnCartProductListItem } from "@/components/ProductDetailsOnCartProductListItem";
import { QtyFormInCart } from "@/components/QtyFormInCart";
import { RemoveItemFromCartBtn } from "@/components/RemoveItemFromCart";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/utils";
import { ShoppingCartItem } from "@/model/shoppingCartItem";
import { LucideCheck, LucideClock, LucideShieldQuestion } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import { getShoppingCartByCartId } from "../api/shopping-cart";

export const dynamic = "force-dynamic";
const estimateShippingCost = 0;

function calculateSubtotal(cartItems: ShoppingCartItem[]): number {
	return cartItems.reduce((acc, item) => {
		return acc + item.qty * item.productItem.price;
	}, 0);
}

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return <div>Firs you have to add something into cart.</div>;
	}
	const cart = await getShoppingCartByCartId(cartId);

	if (!cart) {
		return <div>There is no cart with given id.</div>;
	}

	const subtotal = calculateSubtotal(cart.shoppingCartItems);
	const estimateTax = subtotal * 0.22;
	const total = estimateShippingCost + estimateTax + subtotal;

	return (
		<main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Shopping Cart</h1>

			<div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
				<section aria-labelledby="cart-heading" className="lg:col-span-7">
					<h2 id="cart-heading" className="sr-only">
						Items in your shopping cart
					</h2>

					<ul role="list" className="divide-y divide-zinc-200 border-b border-t border-zinc-200">
						{cart?.shoppingCartItems.map((cartItem) => (
							<li key={cartItem.id} className="flex py-6 sm:py-10">
								<div className="flex-shrink-0">
									<Image
										width={300}
										height={300}
										src={cartItem.productItem.images[0]}
										alt={cartItem.id}
										className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
									/>
								</div>

								<div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
									<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
										<ProductDetailsOnCartProductListItem productItem={cartItem.productItem} />

										<div className="mt-4 sm:-mt-2 sm:pr-9">
											<QtyFormInCart
												cartId={cartId}
												cartItemId={cartItem.id}
												cartItemQty={cartItem.qty}
											/>

											<RemoveItemFromCartBtn cartId={cartId} shoppingCartItemId={cartItem.id} />
										</div>
									</div>

									<p className="mt-4 flex space-x-2 text-sm text-zinc-700">
										{cartItem.productItem.quantityInStock ? (
											<LucideCheck
												className="h-5 w-5 flex-shrink-0 text-green-500"
												aria-hidden="true"
											/>
										) : (
											<LucideClock
												className="h-5 w-5 flex-shrink-0 text-zinc-300"
												aria-hidden="true"
											/>
										)}

										<span>
											{cartItem.productItem.quantityInStock ? "In stock" : `Ships in 3-4 weeks`}
										</span>
									</p>
								</div>
							</li>
						))}
					</ul>
				</section>

				{/* Order summary */}
				<section
					aria-labelledby="summary-heading"
					className="mt-16 rounded-lg bg-zinc-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
				>
					<h2 id="summary-heading" className="text-lg font-medium text-zinc-900">
						Order summary
					</h2>

					<dl className="mt-6 space-y-4">
						<div className="flex items-center justify-between">
							<dt className="text-sm text-zinc-600">Subtotal</dt>
							<dd className="text-sm font-medium text-zinc-900">{formatMoney(subtotal / 100)}</dd>
						</div>
						<div className="flex items-center justify-between border-t border-zinc-200 pt-4">
							<dt className="flex items-center text-sm text-zinc-600">
								<span>Shipping estimate</span>
								<a href="#" className="ml-2 flex-shrink-0 text-zinc-400 hover:text-zinc-500">
									<span className="sr-only">Learn more about how shipping is calculated</span>
									<LucideShieldQuestion className="h-5 w-5" aria-hidden="true" />
								</a>
							</dt>
							<dd className="text-sm font-medium text-zinc-900">
								{formatMoney(estimateShippingCost)}
							</dd>
						</div>
						<div className="flex items-center justify-between border-t border-zinc-200 pt-4">
							<dt className="flex text-sm text-zinc-600">
								<span>Tax estimate</span>
								<a href="#" className="ml-2 flex-shrink-0 text-zinc-400 hover:text-zinc-500">
									<span className="sr-only">Learn more about how tax is calculated</span>
									<LucideShieldQuestion className="h-5 w-5" aria-hidden="true" />
								</a>
							</dt>
							<dd className="text-sm font-medium text-zinc-900">
								{formatMoney(estimateTax / 100)}
							</dd>
						</div>
						<div className="flex items-center justify-between border-t border-zinc-200 pt-4">
							<dt className="text-base font-medium text-zinc-900">Order total</dt>
							<dd className="text-base font-medium text-zinc-900">{formatMoney(total / 100)}</dd>
						</div>
					</dl>

					<div className="mt-6">
						<Button
							variant={"default"}
							size={"lg"}
							type="submit"
							className="w-full rounded-md border border-transparent bg-orange-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
						>
							Checkout
						</Button>
					</div>
				</section>
			</div>

			{/* Related products */}
			{/* <section aria-labelledby="related-heading" className="mt-24">
				<h2 id="related-heading" className="text-lg font-medium text-zinc-900">
					You may also like&hellip;
				</h2>

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{relatedProducts.map((relatedProduct) => (
						<div key={relatedProduct.id} className="group relative">
							<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
								<img
									src={relatedProduct.imageSrc}
									alt={relatedProduct.imageAlt}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-zinc-700">
										<a href={relatedProduct.href}>
											<span aria-hidden="true" className="absolute inset-0" />
											{relatedProduct.name}
										</a>
									</h3>
									<p className="mt-1 text-sm text-zinc-500">{relatedProduct.color}</p>
								</div>
								<p className="text-sm font-medium text-zinc-900">{relatedProduct.price}</p>
							</div>
						</div>
					))}
				</div>
			</section> */}
		</main>
	);
}

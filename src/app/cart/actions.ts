"use server";

import { ProductItem } from "@/model/productItem";

export async function addToCartAction(selectedVariant: ProductItem, formData: FormData) {
	console.log(selectedVariant);
}

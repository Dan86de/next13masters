import { type Metadata } from "next";
import { getProductById } from "@/app/api/products";
import { ProductCoverImage } from "@/components/ProductCoverImage";
import { ProductListItemDescription } from "@/components/ProductListItemDescription";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.image.src,
					width: 800,
					height: 600,
					alt: product.image.alt,
				},
			],
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<div className="mx-auto max-w-2xl">
			<h1>{product.name}</h1>
			<ProductCoverImage {...product.image} />
			<ProductListItemDescription
				product={{
					...product,
				}}
			/>
			<p>{product.description}</p>
		</div>
	);
}

import { ProductList } from "@/components/ProductList";
import { type Product } from "@/model/product";

const products: Product[] = [
	{
		id: "1",
		name: "Adidas One",
		description: "Awesome adidas sneaker.",
		category: "Sneakers",
		price: 2799,
		image: {
			alt: "Car",
			src: "./adidas_sneaker.png",
		},
	},
	{
		id: "1",
		name: "CC Whistle",
		description: "Incredible CalvinKlein sneaker.",
		category: "Sneakers",
		price: 18783,
		image: {
			alt: "Mario cart",
			src: "./cc_sneaker.png",
		},
	},
	{
		id: "3",
		name: "Lacoste Run",
		description: "Some Lacoste sneaker.",
		category: "Sneakers",
		price: 4353,
		image: {
			alt: "Toy Car",
			src: "./lacoste_sneaker.png",
		},
	},
	{
		id: "4",
		name: "Nike Impossible",
		description: "Nike Impossible is nothing sneaker.",
		category: "Sneakers",
		price: 1653,
		image: {
			alt: "Backpack",
			src: "./nike_sneaker.png",
		},
	},
];

export default function ProductsPage() {
	return <ProductList products={products} />;
}

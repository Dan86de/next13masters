import { ProductList } from "@/components/ProductList";
import { type Product } from "@/model/product";

const products: Product[] = [
	{
		id: "1",
		name: "Car",
		description: "Awesome camper toy",
		category: "Toys",
		price: 2799,
		image: {
			alt: "Car",
			src: "./car.png",
		},
	},
	{
		id: "2",
		name: "Mario",
		description: "Awesome mario cart",
		category: "Toys",
		price: 3878,
		image: {
			alt: "Mario cart",
			src: "./mario.png",
		},
	},
	{
		id: "3",
		name: "Toy Car",
		description: "Some awesome car toy.",
		category: "Toys",
		price: 435,
		image: {
			alt: "Toy Car",
			src: "./toy_car.png",
		},
	},
	{
		id: "4",
		name: "Spidey's Backpack",
		description: "Awesome school backpack.",
		category: "Toys",
		price: 1653,
		image: {
			alt: "Backpack",
			src: "./backpack.png",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<ProductList products={products} />
		</section>
	);
}

import { Hero } from "@/components/Hero";
import { HomePerks } from "@/components/HomePerks";
import { HomeTrendingProducts } from "@/components/HomeTrendingProducts";

export default function HomePage() {
	return (
		<section>
			<Hero />
			<HomeTrendingProducts />
			<HomePerks />
		</section>
	);
}

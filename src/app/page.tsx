import { Hero } from "@/components/Hero";
import { HomeCollections } from "@/components/HomeCollections";
import { HomePerks } from "@/components/HomePerks";
import { HomeTrendingProducts } from "@/components/HomeTrendingProducts";

export default function HomePage() {
	return (
		<section>
			<Hero />
			<HomeCollections />
			<HomeTrendingProducts />
			<HomePerks />
		</section>
	);
}

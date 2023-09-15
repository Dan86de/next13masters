import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export const Hero = () => {
	return (
		<div className="relative">
			<div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-zinc-200 lg:block" />
			<div className="relative bg-zinc-100 lg:bg-transparent">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
					<div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
						<div className="lg:pr-16">
							<h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl xl:text-6xl">
								Shop what matters
							</h1>
							<p className="mt-4 text-xl text-zinc-600">
								All the clothes, jewelery, and products in the world can&apos;t beat checking off in
								our shop.
							</p>
							<div className="mt-6">
								<Link href="/products/1">
									<Button size={"lg"}>See our products</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
				<Image
					width={1080}
					height={1080}
					src="https://dsc.cloud/88160a/Shared-Image-2023-09-15-21-14-50.png"
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	);
};

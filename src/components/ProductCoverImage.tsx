import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 relative w-full overflow-hidden rounded-lg">
			<div className="flex h-[400px] items-center justify-center ">
				<Image
					className="h-full w-full object-cover object-center group-hover:opacity-75"
					width={100}
					height={100}
					src={src}
					alt={alt}
				/>
			</div>
			<div
				className="
					absolute 
					left-0 
					right-0 
					top-[calc(100%_-_56px)] 
					z-10 
					flex 
					items-center 
					justify-center 
					opacity-0 
					transition-all 
					duration-300 
					group-hover:opacity-100"
			>
				<Button variant={"outline"} className="border-2 border-zinc-900 bg-zinc-50">
					{"Quick add"}
				</Button>
			</div>
		</div>
	);
};

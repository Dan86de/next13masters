export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="flex aspect-square items-center justify-center overflow-hidden rounded-md">
			<img
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				src={src}
				alt={alt}
			/>
		</div>
	);
};

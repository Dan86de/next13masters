import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { VariationOption } from "@/model/variation";
import Link from "next/link";

export enum SupportedColors {
	black = "black",
	white = "white",
	red = "red",
	blue = "blue",
	gray = "gray",
	orange = "orange",
	yellow = "yellow",
}

const supportedColors: {
	[K in SupportedColors]: { name: string; bgColor: string; selectedColor: string; border: string };
} = {
	black: {
		name: "black",
		bgColor: "bg-zinc-900",
		selectedColor: "ring-zinc-900",
		border: "border-zinc-950",
	},
	white: {
		name: "white",
		bgColor: "bg-white-400",
		selectedColor: "ring-gray-400",
		border: "border-gray-950",
	},
	red: {
		name: "red",
		bgColor: "bg-red-400",
		selectedColor: "ring-red-400",
		border: "border-red-950",
	},
	blue: {
		name: "blue",
		bgColor: "bg-blue-400",
		selectedColor: "ring-blue-400",
		border: "border-blue-950",
	},
	gray: {
		name: "gray",
		bgColor: "bg-gray-400",
		selectedColor: "ring-gray-400",
		border: "border-gray-950",
	},
	orange: {
		name: "orange",
		bgColor: "bg-orange-400",
		selectedColor: "ring-orange-400",
		border: "border-orange-950",
	},
	yellow: {
		name: "yellow",
		bgColor: "bg-yellow-400",
		selectedColor: "ring-yellow-400",
		border: "border-yellow-950",
	},
};

export const ProductColorPicker = ({
	currentColor,
	currentSize,
	colorVariationOptions,
}: {
	currentColor: string;
	currentSize: string;
	colorVariationOptions: VariationOption[];
}) => {
	let selectedColor = currentColor;
	if (!Object.values(SupportedColors).includes(selectedColor as SupportedColors)) {
		selectedColor = SupportedColors.black;
	}

	return (
		<div className="grow-1">
			<h2 className="text-sm font-medium text-zinc-900">Color</h2>
			<RadioGroup value={selectedColor} className="mt-2" name="size">
				<Label className="sr-only">Choose a size</Label>
				<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{colorVariationOptions.map((option) => (
						<div>
							<RadioGroupItem value={option.value} id={option.id} className="peer sr-only" />
							<Label
								htmlFor={option.id}
								className={cn(
									"flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
								)}
							>
								<Link
									href={
										currentSize
											? `?size=${currentSize}&color=${option.value}`
											: `?color=${option.value}`
									}
									className={cn(
										supportedColors[option.value as SupportedColors]
											? supportedColors[option.value as SupportedColors].bgColor
											: "bg-gray-900",
										"w-full rounded-sm p-4 text-center",
									)}
								/>
							</Label>
						</div>
					))}
				</div>
			</RadioGroup>
		</div>
	);
};

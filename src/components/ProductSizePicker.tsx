import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { VariationOption } from "@/model/variation";
import Link from "next/link";
import { Label } from "./ui/label";

export enum SupportedSizes {
	XXS = "XXS",
	XS = "XS",
	S = "S",
	M = "M",
	L = "L",
	XL = "XL",
	XXL = "XXL",
	_36 = "36",
	_37 = "37",
	_38 = "38",
	_39 = "39",
	_40 = "40",
	_41 = "41",
	_42 = "42",
	_43 = "43",
	_44 = "44",
}

export const ProductSizePicker = ({
	currentSize,
	currentColor,
	sizeVariationOptions,
}: {
	currentSize: string;
	currentColor: string;
	sizeVariationOptions: VariationOption[];
}) => {
	let selectedSize = currentSize;

	if (!Object.values(SupportedSizes).includes(selectedSize as SupportedSizes)) {
		if (sizeVariationOptions[0].value === "XXS") {
			selectedSize = SupportedSizes.XXS;
		} else {
			selectedSize = SupportedSizes._36;
		}
	}

	return (
		<div className="mt-8">
			<div className="flex items-center justify-between">
				<h2 className="text-sm font-medium text-zinc-900">Size</h2>
			</div>

			<RadioGroup value={selectedSize} className="mt-2" name="size">
				<Label className="sr-only">Choose a size</Label>
				<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{sizeVariationOptions.map((option) => (
						<div>
							<RadioGroupItem value={option.value} id={option.id} className="peer sr-only" />
							<Label
								htmlFor={option.id}
								className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
							>
								<Link
									href={
										currentColor
											? `?size=${option.value}&color=${currentColor}`
											: `?size=${option.value}`
									}
									className="w-full p-4 text-center"
								>
									{option.value}
								</Link>
							</Label>
						</div>
					))}
				</div>
			</RadioGroup>
		</div>
	);
};

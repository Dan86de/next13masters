export type Variation = {
	id: string;
	name: string;
	variation_options: VariationOption[];
};

export type VariationOption = {
	id: string;
	value: string;
};

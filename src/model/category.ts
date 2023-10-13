import { type Variation } from "@/model/variation";

export type Category = {
	id: string;
	name: string;
};

export interface CategoryWithVariations extends Category {
	variations: Variation[];
}

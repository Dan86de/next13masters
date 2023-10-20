import { LucideMinusSquare } from "lucide-react";
import { Button } from "./ui/button";

export const DecrementQtyBtn = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			data-testid="decrement"
			size={"icon"}
			variant={"ghost"}
			className="aspect-square"
			onClick={onClick}
		>
			<LucideMinusSquare />
		</Button>
	);
};

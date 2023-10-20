import { LucidePlusSquare } from "lucide-react";
import { Button } from "./ui/button";

export const IncrementQtyBtn = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			size={"icon"}
			variant={"ghost"}
			className="aspect-square"
			data-testid="increment"
			onClick={onClick}
		>
			<LucidePlusSquare />
		</Button>
	);
};

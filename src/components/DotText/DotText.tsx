import "./DotText.scss";

import { DotTextProps } from "../../interfaces/DotText";
import DotDecorator from "./decorator/DotDecorator";

export const DotText = ({
	children = "",
	color = "default",
	customClassname = "",
	position = "left",
	size = "md",
}: DotTextProps) => {
	let positioned;

	switch (position) {
		case "left":
			positioned = (
				<>
					<DotDecorator color={color} size={size} />
					<p data-testid="dot-text-content">{children}</p>
				</>
			);
			break;
		case "right":
			positioned = (
				<>
					<p data-testid="dot-text-content">{children}</p>
					<DotDecorator color={color} size={size} />
				</>
			);
			break;
		default:
			break;
	}

	return (
		<span className={`rtd-dot ${customClassname}`} data-testid="dot-text">
			{positioned}
		</span>
	);
};

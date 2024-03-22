import "./DotText.scss";

import { DotTextProps } from "../../interfaces/DotText";
import DotDecorator from "./decorator/DotDecorator";

export const DotText = ({
	text = "",
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
					<p>{text}</p>
				</>
			);
			break;
		case "right":
			positioned = (
				<>
					<p>{text}</p>
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

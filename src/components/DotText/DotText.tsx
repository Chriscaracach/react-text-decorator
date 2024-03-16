import "./DotText.scss";

import { DotTextProps } from "../../interfaces/DotText";
import DotDecorator from "./decorator/DotDecorator";

// TODO Add size feature
// TODO Check what are we gonna do with the "rtd-dot" classname

export const DotText = ({
	text = "",
	color = "default",
	customClassname = "",
	position = "left",
}: DotTextProps) => {
	let positioned;

	switch (position) {
		case "left":
			positioned = (
				<>
					<DotDecorator color={color} />
					<p>{text}</p>{" "}
				</>
			);
			break;
		case "right":
			positioned = (
				<>
					<p>{text}</p>
					<DotDecorator color={color} />
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

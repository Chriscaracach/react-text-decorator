import "./BadgeText.scss";

import { BadgeTextProps } from "../../interfaces/BadgeText";
import BadgeDecorator from "./decorator/BadgeDecorator";

export const BadgeText = ({
	text = "",
	color = "default",
	customClassname = "",
	position = "left",
	size = "md",
}: BadgeTextProps) => {
	let positioned;

	switch (position) {
		case "left":
			positioned = (
				<>
					<BadgeDecorator color={color} size={size} />
					<p data-testid="dot-text-content">{text}</p>
				</>
			);
			break;
		case "right":
			positioned = (
				<>
					<p data-testid="dot-text-content">{text}</p>
					<BadgeDecorator color={color} size={size} />
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

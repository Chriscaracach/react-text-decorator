import "./BadgeText.scss";

import { BadgeTextProps } from "../../interfaces/BadgeText";
import BadgeDecorator from "./decorator/BadgeDecorator";

export const BadgeText = ({
	text = " ",
	color,
	customClassname = "",
	position,
	size,
}: BadgeTextProps) => {
	return (
		<div className={`rtd-badge-text-container ${customClassname}`} data-testid="badge-text">
			<span data-testid="badge-text-content">{text}</span>
			<BadgeDecorator color={color} size={size} position={position} />
		</div>
	);
};

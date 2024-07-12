import "./BadgeText.scss";

import { BadgeTextProps } from "../../interfaces/BadgeText";
import BadgeDecorator from "./decorator/BadgeDecorator";

export const BadgeText = ({
	children,
	color,
	customClassname = "",
	position,
	size,
}: BadgeTextProps) => {
	return (
		<div className={`rtd-badge-text-container ${customClassname}`} data-testid="badge-text">
			<span data-testid="badge-text-content">{children}</span>
			<BadgeDecorator color={color} size={size} position={position} />
		</div>
	);
};

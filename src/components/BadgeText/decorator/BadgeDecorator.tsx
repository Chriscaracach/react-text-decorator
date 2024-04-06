import "./BadgeDecorator.scss";

import { BadgeDecoratorProps } from "../../../interfaces/BadgeText";

const BadgeDecorator = ({
	color = "default",
	size = "md",
	position = "topLeft",
}: BadgeDecoratorProps) => {
	const className = `rtd-badge-decorator rtd-badge-decorator-color-${color} rtd-badge-decorator-size-${size} rtd-badge-decorator-position-${position}`;

	return <div className={className} data-testid="badge-decorator"></div>;
};

export default BadgeDecorator;

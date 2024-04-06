import "./BadgeDecorator.scss";

import { BadgeDecoratorProps } from "../../../interfaces/BadgeText";

const BadgeDecorator = ({ color = "default", size = "md" }: BadgeDecoratorProps) => {
	const className = `rtd-dot-decorator rtd-dot-decorator-color-${color} rtd-dot-decorator-size-${size}`;

	return <div className={className} data-testid="dot-decorator"></div>;
};

export default BadgeDecorator;

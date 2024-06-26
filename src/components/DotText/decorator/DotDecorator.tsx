import "./DotDecorator.scss";

import { DotDecoratorProps } from "../../../interfaces/DotText";

const DotDecorator = ({ color = "default", size = "md" }: DotDecoratorProps) => {
	const className = `rtd-dot-decorator rtd-dot-decorator-color-${color} rtd-dot-decorator-size-${size}`;

	return <div className={className} data-testid="dot-decorator"></div>;
};

export default DotDecorator;

import "./DotDecorator.scss";

import { DotDecoratorProps } from "../../../interfaces/DotText";

const DotDecorator = ({ color = "default", size = "md" }: DotDecoratorProps) => {
	const className = `rtd-dot-decorator rtd-dot-color-${color} rtd-dot-decorator-size-${size}`;

	return <div className={className}></div>;
};

export default DotDecorator;

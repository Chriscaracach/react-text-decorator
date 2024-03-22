import "./StripeDecorator.scss";

import { StripeDecoratorProps } from "../../../interfaces/StripeText";

const StripeDecorator = ({ color = "default", size = "md" }: StripeDecoratorProps) => {
	const className = `rtd-stripe-color-${color} rtd-stripe-decorator-size-${size}`;

	return (
		<>
			<div className={`rtd-stripe-1 ${className}`}></div>
			<div className={`rtd-stripe-2 ${className}`}></div>
			<div className={`rtd-stripe-3 ${className}`}></div>
		</>
	);
};

export default StripeDecorator;

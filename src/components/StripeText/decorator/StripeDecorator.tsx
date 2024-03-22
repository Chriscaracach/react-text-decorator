import "./StripeDecorator.scss";

import { StripeDecoratorProps } from "../../../interfaces/StripeText";

const StripeDecorator = ({ color = "default", size = "md" }: StripeDecoratorProps) => {
	const className = `rtd-stripe-decorator-color-${color} rtd-stripe-decorator-size-${size}`;

	return (
		<>
			<div className={`rtd-stripe-decorator-1 ${className}`} data-testid="stripe-decorator-1"></div>
			<div className={`rtd-stripe-decorator-2 ${className}`} data-testid="stripe-decorator-2"></div>
			<div className={`rtd-stripe-decorator-3 ${className}`} data-testid="stripe-decorator-3"></div>
		</>
	);
};

export default StripeDecorator;

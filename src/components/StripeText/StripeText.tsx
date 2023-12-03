import "./StripeText.scss";

import StripeDecorator from "./StripeDecorator";

interface StripeTextProps {
	text: string;
	color?: string;
	customClassname?: string;
}

export const StripeText = ({ text = "", color, customClassname = "" }: StripeTextProps) => {
	return (
		<span className={`rtd-stripe ${customClassname}`}>
			<StripeDecorator color={color ?? ""} />
			<p>{text}</p>
		</span>
	);
};

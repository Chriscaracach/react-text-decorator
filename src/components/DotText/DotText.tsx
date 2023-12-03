import "./DotText.scss";

import DotDecorator from "./DotDecorator";

interface StripeTextProps {
	text: string;
	color: string;
	customClassname: string;
}

export const DotText = ({ text = "", color, customClassname = "" }: StripeTextProps) => {
	return (
		<span className={`rtd-dot ${customClassname}`}>
			<DotDecorator color={color} />
			<p>{text}</p>
		</span>
	);
};

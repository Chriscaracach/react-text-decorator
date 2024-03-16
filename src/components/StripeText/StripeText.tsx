import "./StripeText.scss";

import type { StripeTextProps } from "../../interfaces/StripeText";
import StripeDecorator from "./decorator/StripeDecorator";

// TODO Add left/right-decorator feature
// TODO Add Size feature
// TODO See what are we going to do with the "rtd-stripe" classname

export const StripeText = ({
	text = "",
	color = "default",
	customClassname = "",
}: StripeTextProps) => {
	return (
		<div className={`rtd-stripe ${customClassname}`} data-testid="stripe-text">
			<StripeDecorator color={color} />
			<p>{text}</p>
		</div>
	);
};

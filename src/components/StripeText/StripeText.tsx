import "./StripeText.scss";

import type { StripeTextProps } from "../../interfaces/StripeText";
import StripeDecorator from "./decorator/StripeDecorator";

export const StripeText = ({
	text = "",
	color = "default",
	customClassname = "",
}: StripeTextProps) => {
	return (
		<div className={`rtd-stripe ${customClassname}`}>
			<StripeDecorator color={color} />
			<p>{text}</p>
		</div>
	);
};

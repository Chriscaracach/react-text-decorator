import type { StripeTextProps } from "../../interfaces/StripeText";
import StripeDecorator from "./decorator/StripeDecorator";

export const StripeText = ({
	text = "",
	color = "default",
	customClassname = "",
	size = "md",
}: StripeTextProps) => {
	return (
		<div className={`${customClassname}`} data-testid="stripe-text">
			<StripeDecorator color={color} size={size} />
			<p>{text}</p>
		</div>
	);
};

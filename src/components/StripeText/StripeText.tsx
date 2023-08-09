import "./StripeText.scss";

import StripeDecorator from "./StripeDecorator";

const StripeText = ({ text }: { text: string }) => {
	return (
		<span className="rtd-stripe">
			<StripeDecorator />
			<p>{text}</p>
		</span>
	);
};

export default StripeText;

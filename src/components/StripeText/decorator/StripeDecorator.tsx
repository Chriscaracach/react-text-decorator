import "./StripeDecorator.scss";

const StripeDecorator = ({ color }: { color: string }) => {
	const className = `rtd-stripe-color-${color ? color : "default"}`;

	return (
		<>
			<div className={`rtd-stripe-1 ${className}`}></div>
			<div className={`rtd-stripe-2 ${className}`}></div>
			<div className={`rtd-stripe-3 ${className}`}></div>
		</>
	);
};

export default StripeDecorator;

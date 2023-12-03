import "./DotDecorator.scss";

const DotDecorator = ({ color }: { color: string }) => {
	const className = `rtd-dot-decorator rtd-dot-color-${color ? color : "default"}`;

	return <div className={className}></div>;
};

export default DotDecorator;

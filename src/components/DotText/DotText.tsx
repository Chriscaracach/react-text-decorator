import "./DotText.scss";

import { DotTextProps } from "../../interfaces/DotText";
import DotDecorator from "./decorator/DotDecorator";

export const DotText = ({ text = "", color = "default", customClassname = "" }: DotTextProps) => {
	return (
		<span className={`rtd-dot ${customClassname}`}>
			<DotDecorator color={color} />
			<p>{text}</p>
		</span>
	);
};

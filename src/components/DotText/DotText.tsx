import "./DotText.scss";

import { DotTextProps } from "../../interfaces/DotText";
import DotDecorator from "./decorator/DotDecorator";

// TODO Add left/right-decorator feature
// TODO Add size feature
// TODO Check what are we gonna do with the "rtd-dot" classname

export const DotText = ({ text = "", color = "default", customClassname = "" }: DotTextProps) => {
	return (
		<span className={`rtd-dot ${customClassname}`}>
			<DotDecorator color={color} />
			<p>{text}</p>
		</span>
	);
};

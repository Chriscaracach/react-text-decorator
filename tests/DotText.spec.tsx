// Import necessary dependencies
import "@testing-library/jest-dom/extend-expect";
import "../src/components/DotText/DotText.scss";

import { render, screen } from "@testing-library/react";

import { DotText } from "../src/components/DotText/DotText";

describe("DotText component", () => {
	test("renders with default props", () => {
		render(<DotText />);

		// Ensure the component is rendered
		expect(screen.getByTestId("dot-text")).toBeInTheDocument();

		// Ensure the default color class is applied
		expect(screen.getByTestId("dot-text")).toHaveClass("rtd-dot");

		// Ensure the text is rendered
		expect(screen.getByTestId("dot-text")).toBeInTheDocument();
	});

	test("renders with custom props", () => {
		const customText = "Custom Text";
		const customColor = "error";
		const customClassname = "custom-class";

		render(<DotText text={customText} color={customColor} customClassname={customClassname} />);

		// Ensure the component is rendered
		expect(screen.getByTestId("dot-text")).toBeInTheDocument();

		// Ensure the custom color class is applied
		expect(screen.getByTestId("dot-text")).toHaveClass(`rtd-dot ${customClassname}`);

		// Ensure the custom text is rendered
		expect(screen.getByText(customText)).toBeInTheDocument();
	});

	test("renders with empty text", () => {
		render(<DotText text="" />);

		// Ensure the component is rendered without errors
		expect(screen.getByTestId("dot-text")).toBeInTheDocument();
	});
});

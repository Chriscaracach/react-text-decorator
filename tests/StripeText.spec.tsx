// Import necessary dependencies
import "@testing-library/jest-dom/extend-expect";
import "../src/components/StripeText/StripeText.scss";

import { render, screen } from "@testing-library/react";

import { StripeText } from "../src/components/StripeText/StripeText";

describe("StripeText component", () => {
	test("renders with default props", () => {
		render(<StripeText />);

		// Ensure the component is rendered
		expect(screen.getByTestId("stripe-text")).toBeInTheDocument();

		// Ensure the default color class is applied
		expect(screen.getByTestId("stripe-text")).toHaveClass("rtd-stripe default");

		// Ensure the text is rendered
		expect(screen.getByText("")).toBeInTheDocument();
	});

	test("renders with custom props", () => {
		const customText = "Custom Text";
		const customColor = "error";
		const customClassname = "custom-class";

		render(<StripeText text={customText} color={customColor} customClassname={customClassname} />);

		// Ensure the component is rendered
		expect(screen.getByTestId("stripe-text")).toBeInTheDocument();

		// Ensure the custom color class is applied
		expect(screen.getByTestId("stripe-text")).toHaveClass(
			`rtd-stripe ${customColor} ${customClassname}`
		);

		// Ensure the custom text is rendered
		expect(screen.getByText(customText)).toBeInTheDocument();
	});
});

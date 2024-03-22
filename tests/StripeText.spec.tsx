// Import necessary dependencies
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import React from "react";

import { StripeText } from "../src/components/StripeText/StripeText";

describe("StripeText component", () => {
	test("renders with default props", () => {
		render(<StripeText />);

		// Ensure the component is rendered
		expect(screen.getByTestId("stripe-text")).toBeInTheDocument();
	});

	test("renders with custom props", () => {
		const customText = "Custom Text";
		const customColor = "error";
		const customClassname = "custom-class";
		const customSize = "sm";

		render(
			<StripeText
				text={customText}
				color={customColor}
				size="sm"
				customClassname={customClassname}
			/>
		);

		// Ensure the component is rendered
		expect(screen.getByTestId("stripe-text")).toBeInTheDocument();

		// Ensure the custom color class is applied
		expect(screen.getByTestId("stripe-text")).toHaveClass(`${customClassname}`);

		// Ensure the decorator receives custom size
		expect(screen.getByTestId("stripe-decorator-1")).toHaveClass(
			`rtd-stripe-decorator-1 rtd-stripe-decorator-color-error rtd-stripe-decorator-size-${customSize}`
		);

		// Ensure the custom text is rendered
		expect(screen.getByText(customText)).toBeInTheDocument();
	});

	test("renders with empty text", () => {
		render(<StripeText text="" />);

		// Ensure the component is rendered without errors
		expect(screen.getByTestId("stripe-text")).toBeInTheDocument();
	});
});

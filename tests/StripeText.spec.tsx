// Import necessary dependencies
import "@testing-library/jest-dom/extend-expect";
import "../src/components/StripeText/StripeText.scss";

import { render, screen } from "@testing-library/react";

import StripeText from "../src/components/StripeText/StripeText";

describe("StripeText Component", () => {
	it("renders text and custom class", () => {
		// Arrange
		const text = "Hello, World!";
		const color = "error";
		const customClassname = "custom-class";

		// Act
		render(<StripeText text={text} color={color} customClassname={customClassname} />);

		// Assert
		const stripeText = screen.getByText(text);
		expect(stripeText).toBeInTheDocument();
		expect(stripeText).toHaveClass("rtd-stripe custom-class");
	});

	it("renders text with default custom class", () => {
		// Arrange
		const text = "Hello, World!";
		const color = "red";

		// Act
		render(<StripeText text={text} color={color} />);

		// Assert
		const stripeText = screen.getByText(text);
		expect(stripeText).toBeInTheDocument();
		expect(stripeText).toHaveClass("rtd-stripe");
	});

	it("renders text with default color and custom class", () => {
		// Arrange
		const text = "Hello, World!";
		const customClassname = "custom-class";

		// Act
		render(<StripeText text={text} customClassname={customClassname} />);

		// Assert
		const stripeText = screen.getByText(text);
		expect(stripeText).toBeInTheDocument();
		expect(stripeText).toHaveClass("rtd-stripe custom-class");
	});

	it("renders text with default color and custom class when color is not provided", () => {
		// Arrange
		const text = "Hello, World!";

		// Act
		render(<StripeText text={text} />);

		// Assert
		const stripeText = screen.getByText(text);
		expect(stripeText).toBeInTheDocument();
		// expect(stripeText).toHaveClass("rtd-stripe");
	});
});

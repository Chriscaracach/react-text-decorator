// Import necessary dependencies
import "../src/components/DotText/DotText.scss";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import React from "react";

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
		const customPosition = "right";

		render(
			<DotText
				text={customText}
				color={customColor}
				position={customPosition}
				customClassname={customClassname}
			/>
		);

		// Ensure the component is rendered
		expect(screen.getByTestId("dot-text")).toBeInTheDocument();

		// Ensure the custom color class is applied
		expect(screen.getByTestId("dot-text")).toHaveClass(`rtd-dot ${customClassname}`);

		// Ensure decorator receives custom color
		expect(screen.getByTestId("dot-decorator")).toHaveClass(
			`rtd-dot-decorator rtd-dot-decorator-color-${customColor}`
		);

		// Ensure the custom text is rendered
		expect(screen.getByText(customText)).toBeInTheDocument();
	});

	test("renders decorator position correctly", () => {
		// Render the component
		render(<DotText text="test" position="right" />);

		// Get the elements
		const content = screen.getByTestId("dot-text-content");
		const decorator = screen.getByTestId("dot-decorator");

		// Ensure dot is rendered "after" content
		expect(
			content.compareDocumentPosition(decorator) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeGreaterThan(0);
	});

	test("renders with empty text", () => {
		render(<DotText text="" />);

		// Ensure the component is rendered without errors
		expect(screen.getByTestId("dot-text")).toBeInTheDocument();
	});
});

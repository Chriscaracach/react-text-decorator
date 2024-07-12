import type { Meta, StoryObj } from "@storybook/react";

import { StripeText } from "./StripeText";

const meta = {
	title: "StripeText",
	component: StripeText,
	argTypes: {
		children: {
			control: "text",
		},
		color: {
			control: "select",
			options: ["default", "primary", "secondary"],
		},
		customClassname: {
			control: "text",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
} satisfies Meta<typeof StripeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "StripeText",
		color: "default",
		customClassname: "",
	},
};

import type { Meta, StoryObj } from "@storybook/react";

import StripeText from "./StripeText";

const meta = {
	title: "StripeText",
	component: StripeText,
} satisfies Meta<typeof StripeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "StripeText",
		color: "default",
	},
};

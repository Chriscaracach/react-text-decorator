import type { Meta, StoryObj } from "@storybook/react";

import { BadgeText } from "./BadgeText";

const meta = {
	title: "DotText",
	component: BadgeText,
} satisfies Meta<typeof BadgeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "DotText",
		color: "default",
		customClassname: "",
		size: "md",
	},
};

import type { Meta, StoryObj } from "@storybook/react";

import { BadgeText } from "./BadgeText";

const meta = {
	title: "BadgeText",
	component: BadgeText,
} satisfies Meta<typeof BadgeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "BadgeText",
		color: "default",
		customClassname: "",
		size: "md",
		position: "topLeft",
	},
};

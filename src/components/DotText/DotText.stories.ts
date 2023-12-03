import type { Meta, StoryObj } from "@storybook/react";

import { DotText } from "./DotText";

const meta = {
	title: "DotText",
	component: DotText,
} satisfies Meta<typeof DotText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "DotText",
		color: "default",
		customClassname: "",
	},
};

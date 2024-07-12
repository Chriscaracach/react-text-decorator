import type { Meta, StoryObj } from "@storybook/react";

import { DotText } from "./DotText";

const meta = {
	title: "DotText",
	component: DotText,
	argTypes: {
		children: {
			control: {
				type: "text",
			},
		},
		color: {
			control: {
				type: "select",
				options: ["default", "primary", "secondary", "success", "warning", "danger"],
			},
		},
		customClassname: {
			control: {
				type: "text",
			},
		},
		size: {
			control: {
				type: "select",
				options: ["sm", "md", "lg"],
			},
		},
		position: {
			control: {
				type: "select",
				options: ["left", "right"],
			},
		},
	},
} satisfies Meta<typeof DotText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "DotText",
		color: "default",
		customClassname: "",
		size: "md",
	},
};

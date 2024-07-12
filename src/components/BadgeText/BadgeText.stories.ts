import type { Meta, StoryObj } from "@storybook/react";

import { BadgeText } from "./BadgeText";

const meta = {
	title: "BadgeText",
	component: BadgeText,
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
				options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
			},
		},
	},
} satisfies Meta<typeof BadgeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Content",
		color: "default",
		customClassname: "",
		size: "md",
		position: "topLeft",
	},
};

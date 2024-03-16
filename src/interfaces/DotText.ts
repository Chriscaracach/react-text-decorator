export interface DotTextProps {
	text?: string;
	color?: "default" | "info" | "error" | "success" | "warning";
	customClassname?: string;
	position?: "left" | "right";
	size?: "sm" | "md" | "lg";
}

export interface DotDecoratorProps {
	color?: "default" | "info" | "success" | "error" | "warning";
	size?: "sm" | "md" | "lg";
}

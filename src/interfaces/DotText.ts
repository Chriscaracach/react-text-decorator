export interface DotTextProps {
	text?: string;
	color?: "default" | "info" | "error" | "success" | "warning";
	customClassname?: string;
	position?: "left" | "right";
	size?: "sm" | "md" | "lg";
}

export interface DotDecoratorProps {
	color?: string; // TODO Enum
	size?: "sm" | "md" | "lg";
}

export interface StripeTextProps {
	children?: React.ReactNode;
	color?: "default" | "info" | "error" | "success" | "warning";
	customClassname?: string;
	size?: "sm" | "md" | "lg";
}

export interface StripeDecoratorProps {
	color?: "default" | "info" | "success" | "error" | "warning";
	size?: "sm" | "md" | "lg";
}

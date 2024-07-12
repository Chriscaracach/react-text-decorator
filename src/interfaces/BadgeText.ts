export interface BadgeTextProps {
	children: React.ReactNode;
	color?: "default" | "info" | "error" | "success" | "warning";
	customClassname?: string;
	position?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
	size?: "sm" | "md" | "lg";
}

export interface BadgeDecoratorProps {
	color?: "default" | "info" | "success" | "error" | "warning";
	size?: "sm" | "md" | "lg";
	position?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
}

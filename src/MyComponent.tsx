import "./MyComponent.scss";

// TODO Remove this component entirely

export function MyComponent({ title }: { title: string }) {
	return (
		<div className="myComponent">
			<h1>{title}</h1>
		</div>
	);
}

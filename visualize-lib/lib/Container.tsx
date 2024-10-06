import { useVisualize } from "./Context";
import Element from "./Element";

export default function Container() {
	const { state } = useVisualize();

	return (
		<>
			{state.map((element, index) => (
				<Element key={index} elementState={element} />
			))}
		</>
	);
}

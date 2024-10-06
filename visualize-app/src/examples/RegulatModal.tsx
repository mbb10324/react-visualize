import { hideElement } from "react-visualize";
import "./regularModal.css";

export default function RegularModal() {
	return (
		<div className="regular-modal">
			<h1>Regular Modal</h1>
			<p>This is the default configuration that renders a modal.</p>
			<button onClick={() => hideElement("regular")}>Close</button>
		</div>
	);
}

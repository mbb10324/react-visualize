import { VisualizeProvider } from "react-visualize";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<VisualizeProvider>
		<App />
	</VisualizeProvider>
);

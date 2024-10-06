import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { VisualizeProvider } from "react-visualize";

createRoot(document.getElementById("root")!).render(
  <VisualizeProvider>
    <App />
  </VisualizeProvider>
);

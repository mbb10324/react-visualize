import RegularModal from "./examples/RegulatModal";
import "./App.css";
import { registerElements, showElement } from "react-visualize";
import DrawerRight from "./examples/DrawerRight";
import ToastTopRight from "./examples/ToastTopRight";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    registerElements([
      { id: "regular", body: <RegularModal /> },
      {
        id: "drawer-right",
        body: <DrawerRight />,
        options: {
          position: { right: "0", top: "0" },
          animation: {
            shown: { transform: "translateX(0)" },
            hidden: { transform: "translateX(100%)" },
            always: { transition: "all 0.3s ease-in-out" },
          },
        },
      },
      {
        id: "toast-top-right",
        body: <ToastTopRight />,
        options: {
          position: { right: "20px", top: "20px" },
          animation: {
            shown: { transform: "scale(1)", opacity: 1 },
            hidden: { transform: "scale(0)", opacity: 0 },
            always: { transition: "all 0.3s ease-in-out" },
          },
          showBackdrop: false,
          timeout: 5000,
        },
      },
    ]);
  }, []);

  return (
    <>
      <h1>React Visualize</h1>
      <div className="card">
        <div className="buttons">
          <button onClick={() => showElement("regular")}>Regular Modal</button>
          <button onClick={() => showElement("drawer-right")}>
            Drawer Right
          </button>
          <button onClick={() => showElement("toast-top-right")}>
            Toast Top Right
          </button>
        </div>
        <p>
          React visualize is a library that manages the state for hiding and
          showing ui components.
        </p>
      </div>
    </>
  );
}

export default App;

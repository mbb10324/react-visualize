import { hideElement } from "react-visualize";
import "./toastTopRight.css";

export default function ToastTopRight() {
  return (
    <div className="toast-top-right">
      <button onClick={() => hideElement("toast-top-right")}>X</button>
      <p>Toast top right</p>
    </div>
  );
}

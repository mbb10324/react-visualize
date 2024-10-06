import { hideElement } from "react-visualize";
import "./drawerRight.css";

export default function DrawerRight() {
  return (
    <div className="drawer-right">
      <h1>Drawer Right</h1>
      <p>This is an example on how to make a drawer appear from the right.</p>
      <button onClick={() => hideElement("drawer-right")}>Close</button>
    </div>
  );
}

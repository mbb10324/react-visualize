import { createContext, useContext, type ReactNode } from "react";
import { ElementOptions, VisualizeContextType } from "./models";
import { useVisualizeReducer } from "./reducer";
import ModalContainer from "./Container";
import "./visualize.css";

const Context = createContext<VisualizeContextType | undefined>(undefined);

export function VisualizeProvider({ children }: { children: ReactNode }) {
  const { state, register, show, hide } = useVisualizeReducer();

  function registerElement(
    id: string,
    body: ReactNode,
    options?: ElementOptions
  ) {
    register(id, body, options || {});
  }

  function showElement(id: string) {
    show(id);
  }

  function hideElement(id: string) {
    hide(id);
  }

  registerElementHandler = registerElement;
  showElementHandler = showElement;
  hideElementHandler = hideElement;

  return (
    <Context.Provider value={{ state }}>
      {children}
      <ModalContainer />
    </Context.Provider>
  );
}

let registerElementHandler: (
  id: string,
  body: ReactNode,
  options?: ElementOptions
) => void;
let showElementHandler: (id: string) => void;
let hideElementHandler: (id: string) => void;

export function registerElements(
  elements: { id: string; body: ReactNode; options?: ElementOptions }[]
) {
  elements.forEach((element) => {
    registerElementHandler(element.id, element.body, element.options);
  });
}

export function registerElement(
  id: string,
  body: ReactNode,
  options?: ElementOptions
) {
  registerElementHandler(id, body, options);
}

export function showElement(id: string) {
  showElementHandler(id);
}

export function hideElement(id: string) {
  hideElementHandler(id);
}

export function useVisualize() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useVisualize must be used within a VisualizeProvider");
  }
  return context;
}

import {
  Actions,
  ElementState,
  ElementOptions,
  VisualizeAction,
} from "./models";
import { useReducer, type ReactNode } from "react";

const initialState: ElementState[] = [];

const defaultOptions: ElementOptions = {
  position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  showBackdrop: true,
  backdropColor: "rgba(0, 0, 0, 0.5)",
  clickBackdropToClose: true,
  animation: {
    shown: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
    always: { transition: "all 0.5s ease-in-out" },
  },
  backdropAnimation: {
    shown: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
    always: { transition: "all 0.5s ease-in-out" },
  },
};

function reducer(
  state: ElementState[],
  action: VisualizeAction
): ElementState[] {
  switch (action.type) {
    case Actions.REGISTER:
      if (state.find((element) => element.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    case Actions.SHOW:
      return state.map((element) => {
        if (element.id === action.payload) {
          return { ...element, show: true };
        }
        return element;
      });
    case Actions.HIDE:
      return state.map((element) => {
        if (element.id === action.payload) {
          return { ...element, show: false };
        }
        return element;
      });
    default:
      return state;
  }
}

export function useVisualizeReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = (id: string, body: ReactNode, options?: ElementOptions) => {
    const newElement: ElementState = {
      id,
      show: false,
      body,
      options: { ...defaultOptions, ...options },
    };
    dispatch({ type: Actions.REGISTER, payload: newElement });
  };

  const show = (id: string) => {
    dispatch({ type: Actions.SHOW, payload: id });
  };

  const hide = (id: string) => {
    dispatch({ type: Actions.HIDE, payload: id });
  };

  return { state, register, show, hide };
}

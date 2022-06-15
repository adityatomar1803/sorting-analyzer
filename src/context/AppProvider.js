import { createContext, useReducer } from "react";
import { INITIAL_STATE } from "./InitialState";
import { Reducer } from "./Reducer";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

import * as React from 'react';
import DarkModeReducer from './darkModeReducer';

type INITIAL_STATE_TYPE = {
  darkMode?: boolean;
  dispatch?: React.Dispatch<any>;
};

const INTIAL_STATE: INITIAL_STATE_TYPE = {
  darkMode: false,
};

export const DarkModeContext = React.createContext(INTIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(DarkModeReducer, INTIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

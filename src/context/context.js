
import React from 'react'
import { createContext, useContext, useReducer } from 'react';
import { createInitialState, makeUnlimitedLine, makeTabletLine, makeWatchLine, makeNowLine } from './stateTools';
import rootReducer from './reducers/rootReducer';

// To make changes to initial state, update rootReducer and stateTools
const initialState = createInitialState();
const buildInitialState = () => {
          
}
const Context = createContext(initialState);

// wrapper for index.js to provide context (obviously)
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// import useAppContext when testing isolated state logic
const useAppContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};

export default useAppContext;

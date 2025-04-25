import React, { createContext, useContext, useReducer } from 'react';
import { createInitialState } from './stateTools';
import rootReducer from './reducers/rootReducer';

const initialState = createInitialState();

const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};

export default useAppContext;

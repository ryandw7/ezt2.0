import React, { createContext, useContext, useReducer } from "react";
import rootReducer from "./reducers/rootReducer";

const initialState = {
    
    previousServices: {

    },
    newCore: {
        internet: {
            info: '',
            cost: 0
        },
        tv: {
            info: '',
            cost: 0
        }

    },
    newMobile: {
        lines: [],
        info: '',
        total: 0

    },
    rep: {
        name: '',
        contact: ''
    }
}

const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    )
}

const useAppContext = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useAppContext must be used within a ContextProvider");
    }
    return context;
};

export default useAppContext;
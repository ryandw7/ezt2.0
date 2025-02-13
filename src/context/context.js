import React, { createContext, useContext, useReducer } from "react";
import rootReducer from "./reducers/rootReducer";

const initialState = {

    currentServices: {
        internet: '',
        internetCost: Number,
        tv: '',
        tvCost: Number,
        mobile: '',
        mobileCost: Number,
        notes: ''

    },
    newCore: {
        internet: '',
        internetCost: Number,
        tv: '',
        tvCost: Number,
        notes: ''
    },
    newMobile: {
        lines: [{
            isEdit: true,
            id: 0,
            name: '',
            isBYOD: true,
            number: Number,
            port: true,
            dataPlan: 'unlimited',
            deviceModel: null,
            deviceTotalCost: Number,
            deviceDiscountDesc: '',
            DeviceDiscount: Number,
            deviceMonthly: Number,
            payInFull: false,
            cost: Number,
            lineDiscount: Number
        }],
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
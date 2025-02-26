import React, { createContext, useContext, useReducer } from "react";
import rootReducer from "./reducers/rootReducer";

const initialState = {

    currentServices: {
        internet: '',
        internetCost: 0,
        tv: '',
        tvCost: 0,
        mobile: '',
        mobileCost: 0,
        notes: ''

    },
    newCore: {
        internet: '',
        internetCost: 0,
        tv: '',
        tvCost: 0,
        notes: ''
    },
    newMobile: {
        lines: [{
            isEdit: true,
            id: 0,
            name: '',
            isBYOD: true,
            number: 0,
            port: true,
            dataPlan: 'Unlimited',
            deviceModel: null,
            deviceTotalCost: 0,
            deviceDiscountDesc: '',
            DeviceDiscount: 0,
            deviceMonthly: 0,
            payInFull: false,
            cost: 0,
            lineDiscount: 0
        }],
        hasUnlimited: true,
        hasBTG: false,
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
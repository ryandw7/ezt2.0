import { breadcrumbsClasses } from "@mui/material";

const initialState = {
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

}

const newMobileReducer = (state = initialState, action) => {

    const newMobileObj = {
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
    };

    switch (action.type) {
        case 'ADD_LINE': {
            const newLine = newMobileObj;
            newLine.id = state.lines.length;
            newLine.isEdit = true;
            const newLinesArr = state.lines.map((line) => {
                if (line.id !== newLine.id) {
                    return {
                        ...line,
                        isEdit: false
                    }
                } else {
                    return line
                }
            })

            return { ...state, lines: [...newLinesArr, newLine] }
        }
        case 'REMOVE_LINE': {
            const filteredLines = state.lines.filter((line) => line.id !== action.payload);
            return { ...state, lines: filteredLines }
        }
        case 'UPDATE_LINE': {
            const { id, key, value } = action.payload;
            const updatedLines = state.lines.map((line) => {
                if (line.id === id) {
                    return {
                        ...line,
                        [key]: value
                    }
                } else {
                    return line
                }
            })
            return { ...state, lines: updatedLines }
        }
        case 'SET_NEW_EDIT': {
            const id = action.payload;
            console.log(action.payload)
            const newLinesArr = state.lines.map((line) => {
                if (line.id !== id) {
                    console.log(line.id, id)
                    return {
                        ...line,
                        isEdit: false
                    }
                } else {
                    return {
                        ...line,
                        isEdit: true
                    }
                }
            })
            return { ...state, lines: newLinesArr }
        }
        default: {
            return state;
        }

    };
};

export default newMobileReducer;
import { breadcrumbsClasses } from "@mui/material";

const initialState = {
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

}

const newMobileReducer = (state = initialState, action) => {
    console.log(state)
    const newMobileObj = {
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
    };

    switch (action.type) {
        case 'QUICK_ADD_LINE': {
            const newLine = newMobileObj;
            newLine.id = state.lines.length;
            newLine.isEdit = false;
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
        case 'UPDATE_PRICING': {
            let hasUnlimited = false;
            let hasBTG = false;

            const updatedLines = state.lines.map((item) => {
                switch (item.dataPlan) {
                    case 'Unlimited': {
                        if (hasUnlimited === false) {
                            item.cost = 40;
                            hasUnlimited = true;
                        } else {
                            item.cost = 20;
                        }
                        return item;
                    }
                    case 'Unlimited Plus': {
                        if (hasUnlimited === false) {
                            item.cost = 50;
                            hasUnlimited = true;
                        } else {
                            item.cost = 30;
                        }
                        return item;
                    }
                    case 'By the Gig': {
                        if (hasBTG === false) {
                            item.cost = 20;
                            hasBTG = true;
                        } else {
                            item.cost = 0;
                        }
                        return item;
                    }
                }
            });
            console.log(updatedLines);
            return { ...state, lines: updatedLines, hasUnlimited: hasUnlimited, hasBTG: hasBTG }
        }
        default: {
            return state;
        }

    };
};

export default newMobileReducer;
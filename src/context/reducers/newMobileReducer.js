import { createInitialState, lineObj } from "../stateTools.js";
console.log(createInitialState)


const initialState = createInitialState().newMobile;

const newMobileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'QUICK_ADD_LINE': {
            const newLine = lineObj();
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
            const newLine = lineObj();
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
           
            return { ...state, lines: updatedLines, hasUnlimited: hasUnlimited, hasBTG: hasBTG }
        }
        default: {
            return state;
        }

    };
};

export default newMobileReducer;
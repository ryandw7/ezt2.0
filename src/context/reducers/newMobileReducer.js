import { createInitialState, lineObj, phoneLineObj, watchLineObj, tabletLineObj, updateDataFlags } from "../stateTools.js";
import { v4 as uuidv4 } from 'uuid';

const initialState = createInitialState().newMobile;

const newMobileReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PHONE_LINE2': {
            const id = uuidv4();
            const line = phoneLineObj();
            line.id = id;
            return {
                ...state,
                linesById: {
                    ...state.linesById,
                    [id]: line
                }
            }
        }

        case 'ADD_WATCH_LINE2': {
            const id = uuidv4();
            const line = watchLineObj();
            line.id = id;
            return {
                ...state,
                linesById: {
                    ...state.linesById,
                    [id]: line
                }
            }
        }
        case 'ADD_TABLET_LINE2': {
            const id = uuidv4();
            const line = tabletLineObj();
            line.id = id;
            return {
                ...state,
                linesById: {
                    ...state.linesById,
                    [id]: line
                }
            }
        }
        case 'ADD_LINE': {
            const newLine = lineObj();
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
            const { hasBTG, hasUnlimited } = updateDataFlags(newLinesArr);
            return { ...state, hasBTG, hasUnlimited, lines: [...newLinesArr, newLine] }
        }
        case 'ADD_TABLET': {
            const newTablet = lineObj();
            newTablet.id = state.lines.length;
            newTablet.isEdit = true;
            newTablet.dataPlan = "Tablet";

            const newLinesArr = state.lines.map((line) => {
                if (line.id !== newTablet.id) {
                    return {
                        ...line,
                        isEdit: false
                    }
                } else {
                    return line
                }
            })
            const { hasBTG, hasUnlimited } = updateDataFlags(newLinesArr);
            return { ...state, hasBTG, hasUnlimited, lines: [...newLinesArr, newTablet] }
        }
        case 'ADD_WATCH': {
            const newWatch = lineObj();
            newWatch.id = state.lines.length;
            newWatch.isEdit = true;
            newWatch.dataPlan = "Watch";

            const newLinesArr = state.lines.map((line) => {
                if (line.id !== newWatch.id) {
                    return {
                        ...line,
                        isEdit: false
                    }
                } else {
                    return line
                }
            })
            const { hasBTG, hasUnlimited } = updateDataFlags(newLinesArr);
            return { ...state, hasBTG, hasUnlimited, lines: [...newLinesArr, newWatch] }
        }
        case 'REMOVE_LINE': {
            const filteredLines = state.lines.filter((line) => line.id !== action.payload);
            const { hasBTG, hasUnlimited } = updateDataFlags(filteredLines);

            return { ...state, hasBTG, hasUnlimited, lines: filteredLines }
        }
        case 'UPDATE_LINE': {
            const { id, key, value } = action.payload;

            const updatedLines = state.lines.map((line) => {
                if (line.id === id) {
                    if (key === 'dataPlan') {
                        dataFlag = true;
                    }
                    return {
                        ...line,
                        [key]: value
                    }
                } else if (key === 'isEdit' && value === true) {
                    return {
                        ...line,
                        isEdit: false
                    }
                } else {
                    return line
                }
            })
            if (!dataFlag) {
                return { ...state, lines: updatedLines }
            }

            const { hasBTG, hasUnlimited } = updateDataFlags(updatedLines);
            return { ...state, lines: updatedLines, hasBTG, hasUnlimited }
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


const initialState = {
    lines: [],
    info: '',
    total: 0
}

const newMobileReducer = (state = initialState, action) => {

    const newMobileObj = {
        id: Number,
        name: '',
        number: Number,
        isBYOD: true,
        newDevice: {},
        cost: 0,
        discount: 0,
    };

    switch (action.type) {
        case 'ADD_LINE':
            return { ...state, lines: [...state.lines, newMobileObj] }
        case 'REMOVE_LINE':
            const filteredLines = state.lines.filter((line) => line.id !== action.payload);
            return { ...state, lines: filteredLines }
        case 'UPDATE_LINE':
            const { id, updatedLine } = action.payload;
            const newLinesArr = state.lines.map((item) => item.id === id ? updatedLine : item);
            return { ...state, lines: newLinesArr }
        default:
            return state;
    };
};

export default newMobileReducer;
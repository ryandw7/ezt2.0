
const combineReducers = (reducers) => (state, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key](state[key], action);
        return acc;
    }, {});
};

const reducers = {

}

const rootReducer = combineReducers(reducers);

export default rootReducer;
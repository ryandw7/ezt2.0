import currentReducer from './currentReducer.js';
import newMobileReducer from './newMobileReducer.js';
import newCoreReducer from './newCoreReducer.js'

const combineReducers = (reducers) => (state, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key](state[key], action);
        return acc;
    }, {});
};

const reducers = {
currentServices: currentReducer,
newMobile: newMobileReducer,
newCore: newCoreReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
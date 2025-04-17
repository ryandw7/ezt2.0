
import { currentServicesObj } from "../stateTools";

const initialState = {
    internet: '',
    internetCost: 0,
    tv: '',
    tvCost: 0,
    mobile: '',
    mobileCost: 0,
    notes: ''

}

const currentReducer = (state = initialState, action) => {
    console.log(state)
    console.log('DISPATCHING ' + action.type)
    switch (action.type) {
        case 'ADD_ITEM': {
            const newArr = state.items;
            newArr.push(currentServicesObj());
            return { ...state, items: newArr }
        }
        case 'DELETE_CURRENT_ITEM': {
            const newArr = state.items.filter((item) => item.id !== action.payload);
            return { ...state, items: newArr }

        }
        case 'UPDATE_CURRENT_ITEM': {

            const { id, key, value } = action.payload;
            console.log(id)
            const newArr = state.items.map((item) => item.id === id ? { ...item, [key]: value } : item);

            return { ...state, items: newArr }
        }
        
        case 'UPDATE_CURRENT': {

            const { key, value } = action.payload;

            return { ...state, [key]: value }
        }
        case 'UPDATE_CURRENT_INTERNET':
            return { ...state, internet: action.payload }
        case 'UPDATE_CURRENT_INTERNET_COST':
            return { ...state, internetCost: action.payload }
        case 'UPDATE_CURRENT_TV':
            return { ...state, tv: action.payload }
        case 'UPDATE_CURRENT_TV_COST':
            return { ...state, tvCost: action.payload }
        case 'UPDATE_CURRENT_MOBILE':
            return { ...state, mobile: action.payload }
        case 'UPDATE_CURRENT_MOBILE_COST':
            return { ...state, mobileCost: action.payload }
        case 'UPDATE_CURRENT_NOTES':
            return { ...state, notes: action.payload }
        default:
            return state;
    }

}

export default currentReducer;
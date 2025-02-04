

const initialState = {
    internet: '',
    internetCost: Number,
    tv: '',
    tvCost: Number
}

const currentReducer = (state = initialState, action) => {
    console.log(state)
    console.log('DISPATCHING ' + action.type)
    switch(action.type){
        case 'UPDATE':
            return action.payload
        case 'UPDATE_INTERNET':
            return {...state, internet: action.payload}
        default:
            return state;
    }
    
}

export default currentReducer;
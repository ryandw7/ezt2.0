const initialState = {
    internet: '',
    internetCost: 0,
    tv: '',
    tvCost: 0,
    notes: ''
}
const NewCoreReducer = (state = initialState, action) => {
    console.log(state)
    console.log('DISPATCHING ' + action.type)
    switch(action.type){
        case 'UPDATE_NEW_CORE':{
            
            const { key, value } = action.payload;

            return {...state, [key]:value}
        }
        case 'UPDATE_NEW_INTERNET':
            return {...state, internet: action.payload}
        case 'UPDATE_NEW_INTERNET_COST':
            return {...state, internetCost: action.payload}
        case 'UPDATE_NEW_TV':
            return {...state, tv: action.payload}
        case 'UPDATE_NEW_TV_COST':
            return {...state, tvCost: action.payload}
        case 'UPDATE_NEW_CORE_NOTES':
            return {...state, notes: action.payload}
        default:
            return state;
    }
    
}

export default NewCoreReducer;
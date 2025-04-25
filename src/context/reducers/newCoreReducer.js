import { serviceItemObj } from '../stateTools';

const initialState = {
  internet: '',
  internetCost: 0,
  tv: '',
  tvCost: 0,
  items: [],
  notes: '',
};
const NewCoreReducer = (state = initialState, action) => {
  console.log(state);
  console.log('DISPATCHING ' + action.type);
  switch (action.type) {
    case 'ADD_NEW_CORE_ITEM': {
      const newArr = state.items;
      newArr.push(serviceItemObj());
      return { ...state, items: newArr };
    }
    case 'DELETE_NEW_CORE_ITEM': {
      const newArr = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: newArr };
    }
    case 'UPDATE_NEW_CORE_ITEM': {
      const { id, key, value } = action.payload;

      const newArr = state.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );

      return { ...state, items: newArr };
    }
    case 'UPDATE_NEW_CORE': {
      const { key, value } = action.payload;

      return { ...state, [key]: value };
    }
    case 'UPDATE_NEW_INTERNET':
      return { ...state, internet: action.payload };
    case 'UPDATE_NEW_INTERNET_COST':
      return { ...state, internetCost: action.payload };
    case 'UPDATE_NEW_TV':
      return { ...state, tv: action.payload };
    case 'UPDATE_NEW_TV_COST':
      return { ...state, tvCost: action.payload };
    case 'UPDATE_NEW_CORE_NOTES':
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

export default NewCoreReducer;

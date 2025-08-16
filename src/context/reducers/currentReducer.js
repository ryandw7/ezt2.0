import { serviceItemObj, createInitialState } from '../stateTools';

const initialState = createInitialState().currentServices;

const currentReducer = (state = initialState, action) => {
  console.log(state);
  console.log('DISPATCHING ' + action.type);
  switch (action.type) {
    case 'ADD_CURRENT_SERVICES_ITEM': {
      const itemObj = serviceItemObj();
      const id = itemObj.id;

      return { ...state, itemsById: { ...state.itemsById, [id]: itemObj } };
    }
    case 'DELETE_CURRENT_SERVICES_ITEM': {
      const id = action.payload;
      const { [id]: _, ...newObj } = state.itemsById;
      return { ...state, itemsById: newObj };
    }

    case 'UPDATE_CURRENT_SERVICES_ITEM': {
      const { id, key, value } = action.payload;
      return {
        ...state,
        itemsById: {
          ...state.itemsById,
          [id]: {
            ...state.itemsById[id],
            [key]: value,
          },
        },
      };
    }
    case 'ADD_ITEM': {
      const newArr = state.items;
      newArr.push(serviceItemObj());
      return { ...state, items: newArr };
    }
    case 'DELETE_CURRENT_ITEM': {
      const newArr = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: newArr };
    }
    case 'UPDATE_CURRENT_ITEM': {
      const { id, key, value } = action.payload;
      console.log(id);
      const newArr = state.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );

      return { ...state, items: newArr };
    }

    case 'UPDATE_CURRENT': {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    }

    case 'UPDATE_CURRENT_INTERNET':
      return { ...state, internet: action.payload };
    case 'UPDATE_CURRENT_INTERNET_COST':
      return { ...state, internetCost: action.payload };
    case 'UPDATE_CURRENT_TV':
      return { ...state, tv: action.payload };
    case 'UPDATE_CURRENT_TV_COST':
      return { ...state, tvCost: action.payload };
    case 'UPDATE_CURRENT_MOBILE':
      return { ...state, mobile: action.payload };
    case 'UPDATE_CURRENT_MOBILE_COST':
      return { ...state, mobileCost: action.payload };
    case 'UPDATE_CURRENT_NOTES':
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

export default currentReducer;

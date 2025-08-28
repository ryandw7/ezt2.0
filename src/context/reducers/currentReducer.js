import { serviceItemObj, createInitialState } from '../stateTools';

const initialState = createInitialState().currentServices;

const currentReducer = (state, action) => {

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

    default:
      return state;
  }
};

export default currentReducer;

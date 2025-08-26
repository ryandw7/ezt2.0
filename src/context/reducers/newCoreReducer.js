import { serviceItemObj, createInitialState } from '../stateTools';

const initialState = createInitialState().newCoreServices;

const newCoreReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case 'ADD_NEW_CORE_SERVICES_ITEM': {
      const itemObj = serviceItemObj();
      const id = itemObj.id;

      return { ...state, itemsById: { ...state.itemsById, [id]: itemObj } };
    }

    case 'DELETE_NEW_CORE_SERVICES_ITEM': {
      const id = action.payload;
      const { [id]: _, ...newObj } = state.itemsById;

      return { ...state, itemsById: newObj };
    }

    case 'UPDATE_NEW_CORE_SERVICES_ITEM': {
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

export default newCoreReducer;

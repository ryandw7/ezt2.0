import { makeServiceItem } from '../stateTools';

const newCoreReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_CORE_SERVICES_ITEM': {
      const itemObj = makeServiceItem();
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

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

    case 'FETCH_SERVICE_DEALS_START': {
      return {
        ...state,
        serviceDeals: {
          ...state.serviceDeals,
          loading: true
        }
      }
    }

    case 'FETCH_SERVICE_DEALS_SUCCESS': {
      return {
        ...state,
        serviceDeals: {
          data: action.payload,
          loading: false,
          error: null
        }
      }
    }

    case 'FETCH_SERVICE_DEALS_ERROR': {
      return {
        ...state,
        serviceDeals: {
          ...state.serviceDeals,
          loading: false,
          error: action.payload
        }
      }
    }
    default:
      return state;
  }
};

export default newCoreReducer;

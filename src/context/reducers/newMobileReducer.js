import {
  createInitialState,
  phoneLineObj,
  watchLineObj,
  tabletLineObj,
  nowLineObj,
} from '../stateTools.js';
import { v4 as uuidv4 } from 'uuid';

const initialState = createInitialState().newMobile;

const newMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PHONE_LINE': {
      const id = uuidv4();
      const line = phoneLineObj();
      line.id = id;
      return {
        ...state,
        linesById: {
          ...state.linesById,
          [id]: line,
        },
      };
    }

    case 'ADD_WATCH_LINE': {
      const id = uuidv4();
      const line = watchLineObj();
      line.id = id;
      return {
        ...state,
        linesById: {
          ...state.linesById,
          [id]: line,
        },
      };
    }
    case 'ADD_TABLET_LINE': {
      const id = uuidv4();
      const line = tabletLineObj();
      line.id = id;
      return {
        ...state,
        linesById: {
          ...state.linesById,
          [id]: line,
        },
      };
    }

    case 'ADD_NOW_MOBILE_LINE': {
      const id = uuidv4();
      const line = nowLineObj();
      line.id = id;
      return {
        ...state,
        linesById: {
          ...state.linesById,
          [id]: line,
        },
      };
    }

    case 'UPDATE_MOBILE_LINE': {
      const { id, key, value } = action.payload;

      return {
        ...state,
        linesById: {
          ...state.linesById,
          [id]: {
            ...state.linesById[id],
            [key]: value,
          },
        },
      };
    }

    case 'REMOVE_MOBILE_LINE': {
      const id = action.payload;
      const { [id]: _, ...newObj } = state.linesById;
      return { ...state, linesById: newObj, isEditId: '' };
    }

    case 'TOGGLE_IS_XFINITY_MOBILE': {
      return { ...state, isXfinityMobile: !state.isXfinityMobile };
    }
    default: {
      return state;
    }
    case 'SET_EDITING_LINE': {
      return { ...state, isEditId: action.payload };
    }
  }
};

export default newMobileReducer;

const additionalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REP': {
      return { ...state, rep: action.payload };
    }
    case 'UPDATE_CONTACT': {
      return { ...state, contact: action.payload };
    }
    case 'UPDATE_ADDITIONAL_NOTES': {
      return { ...state, additionalNotes: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default additionalReducer;

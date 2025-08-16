import useAppContext from '../context';

const useNewMobileActions = () => {
  const { dispatch } = useAppContext();

  const addPhoneLine = () => {
    dispatch({ type: 'ADD_PHONE_LINE' });
  };
  const addTabletLine = () => {
    dispatch({ type: 'ADD_TABLET_LINE' });
  };
  const addWatchLine = () => {
    dispatch({ type: 'ADD_WATCH_LINE' });
  };

  const addNowMobileLine = () => {
    dispatch({type: "ADD_NOW_MOBILE_LINE"})
  }

  const removeMobileLine = (id) => {
    dispatch({ type: 'REMOVE_MOBILE_LINE', payload: id });
  };

  const updateNewMobileLine = (id, key, value) => {
    dispatch({ type: 'UPDATE_MOBILE_LINE', payload: { id, key, value } });
  };

  const setEditingLineId = (id) => {
    dispatch({ type: 'SET_EDITING_LINE', payload: id });
  };

  const toggleIsXfinityMobile = () => {
    dispatch({ type: 'TOGGLE_IS_XFINITY_MOBILE' });
  };
  return {
    addPhoneLine,
    addTabletLine,
    addWatchLine,
    addNowMobileLine,
    removeMobileLine,
    updateNewMobileLine,
    setEditingLineId,
    toggleIsXfinityMobile,
  };
};

export default useNewMobileActions;

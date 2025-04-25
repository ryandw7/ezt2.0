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
  const removeMobileLine = (id) => {
    dispatch({ type: 'REMOVE_MOBILE_LINE', payload: id });
  };

  const updateNewMobileLine = (id, key, value) => {
    dispatch({ type: 'UPDATE_MOBILE_LINE', payload: { id, key, value } });
  };

  const setEditingLineId = (id) => {
    dispatch({ type: 'SET_EDITING_LINE', payload: id });
  };

  return {
    addPhoneLine,
    addTabletLine,
    addWatchLine,
    removeMobileLine,
    updateNewMobileLine,
    setEditingLineId,
  };
};

export default useNewMobileActions;

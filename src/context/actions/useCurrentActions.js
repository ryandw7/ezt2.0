import useAppContext from '../context.js';

const useCurrentActions = () => {
  const { dispatch } = useAppContext();

  const addCurrentItem = () => {
    dispatch({ type: 'ADD_ITEM' });
  };

  const deleteCurrentItem = (id) => {
    dispatch({ type: 'DELETE_CURRENT_ITEM', payload: id });
  };

  const updateCurrentItem = (id, key, value) => {
    dispatch({ type: 'UPDATE_CURRENT_ITEM', payload: { id, key, value } });
  };

  const updateCurrent = (key, value) => {
    dispatch({ type: 'UPDATE_CURRENT', payload: { key, value } });
  };
  const updateCurrentInternet = (updatedInternet) => {
    dispatch({ type: 'UPDATE_CURRENT_INTERNET', payload: updatedInternet });
  };

  const updateCurrentInternetCost = (updatedInternetCost) => {
    dispatch({
      type: 'UPDATE_CURRENT_INTERNET_COST',
      payload: Number(updatedInternetCost),
    });
  };

  const updateCurrentTv = (updatedTv) => {
    dispatch({ type: 'UPDATE_CURRENT_TV', payload: updatedTv });
  };

  const updateCurrentTvCost = (updatedTvCost) => {
    dispatch({
      type: 'UPDATE_CURRENT_TV_COST',
      payload: Number(updatedTvCost),
    });
  };

  const updateCurrentMobile = (updatedMobile) => {
    dispatch({ type: 'UPDATE_CURRENT_MOBILE', payload: updatedMobile });
  };

  const updateCurrentMobileCost = (updatedMobileCost) => {
    dispatch({
      type: 'UPDATE_CURRENT_MOBILE_COST',
      payload: Number(updatedMobileCost),
    });
  };

  const updateCurrentNotes = (updatedNotes) => {
    dispatch({ type: 'UPDATE_CURRENT_NOTES', payload: updatedNotes });
  };
  return {
    deleteCurrentItem,
    addCurrentItem,
    updateCurrentItem,
    updateCurrent,
    updateCurrentInternet,
    updateCurrentInternetCost,
    updateCurrentTv,
    updateCurrentTvCost,
    updateCurrentMobile,
    updateCurrentMobileCost,
    updateCurrentNotes,
  };
};

export default useCurrentActions;

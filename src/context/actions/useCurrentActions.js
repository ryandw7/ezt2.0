import useAppContext from '../context.js';

const useCurrentActions = () => {
  const { dispatch } = useAppContext();

  const addCurrentServicesItem = () => {
    dispatch({ type: 'ADD_CURRENT_SERVICES_ITEM' });
  };

  const deleteCurrentServicesItem = (id) => {
    dispatch({ type: 'DELETE_CURRENT_SERVICES_ITEM', payload: id });
  };

  const updateCurrentServicesItem = (id, key, value) => {
    dispatch({
      type: 'UPDATE_CURRENT_SERVICES_ITEM',
      payload: { id, key, value },
    });
  };

  return {
    addCurrentServicesItem,
    deleteCurrentServicesItem,
    updateCurrentServicesItem,
  };
};

export default useCurrentActions;

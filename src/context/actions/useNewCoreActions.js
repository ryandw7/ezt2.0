import useAppContext from '../context.js';

const useNewCoreActions = () => {
  const { dispatch } = useAppContext();

  const addNewCoreServicesItem = () => {
    dispatch({ type: 'ADD_NEW_CORE_SERVICES_ITEM' });
  };

  const deleteNewCoreServicesItem = (id) => {
    dispatch({ type: 'DELETE_NEW_CORE_SERVICES_ITEM', payload: id });
  };

  const updateNewCoreServicesItem = (id, key, value) => {
    dispatch({
      type: 'UPDATE_NEW_CORE_SERVICES_ITEM',
      payload: { id, key, value },
    });
  };

  return {
    addNewCoreServicesItem,
    updateNewCoreServicesItem,
    deleteNewCoreServicesItem,
  };
};

export default useNewCoreActions;

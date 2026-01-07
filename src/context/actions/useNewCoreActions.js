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

  const fetchServiceDeals = async (serviceType) => {
    dispatch({ type: 'FETCH_SERVICE_DEALS_START' });
    try {
      const response = await fetch(`http://68.61.168.65:9001/service-deals`);
      const data = await response.json();
      dispatch({ type: 'FETCH_SERVICE_DEALS_SUCCESS', payload: data });

    }catch (error) {
      dispatch({ type: 'FETCH_SERVICE_DEALS_ERROR', payload: error.message });
    }
  }

  return {
    addNewCoreServicesItem,
    updateNewCoreServicesItem,
    deleteNewCoreServicesItem,
    fetchServiceDeals
  };
};

export default useNewCoreActions;

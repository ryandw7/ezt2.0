import useAppContext from '../context.js';
import createSelector from './createSelector.js';

export const getNewCoreServicesItems = (state) =>
  state.newCoreServices?.itemsById || {};

export const getNewCoreServicesItemById = createSelector(
  [getNewCoreServicesItems],
  (newCoreServicesItems) => {
    return (id) => {
      return newCoreServicesItems[id];
    };
  }
);

export const getNewCoreServicesItemsList = createSelector(
  [getNewCoreServicesItems],
  (newCoreServiceItems) => {
    return Object.values(newCoreServiceItems);
  }
);

export const getNewCoreServicesItemValueById = createSelector(
  [getNewCoreServicesItemById],
  (newCoreServicesItemsById) => {
    return (id, key) => {
      return newCoreServicesItemsById(id)[key];
    };
  }
);

export const getNewCoreServicesTotalCost = createSelector(
  [getNewCoreServicesItems],
  (newCoreServicesItems) => {
    return Object.values(newCoreServicesItems).reduce((accumulator, item) => {
      return accumulator + item.cost;
    }, 0);
  }
);

const useNewCoreSelectors = () => {
  const { state } = useAppContext();
  if (!state) {
    console.error('State is undefined in useAppSelectors');
    return {};
  }
  const newCoreServicesItems = getNewCoreServicesItems(state);
  const newCoreServicesItemById = getNewCoreServicesItemById(state);
  const newCoreServicesItemsList = getNewCoreServicesItemsList(state);
  const newCoreServicesTotalCost = getNewCoreServicesTotalCost(state) || 0;

  return {
    newCoreServicesItems,
    newCoreServicesItemById,
    newCoreServicesItemsList,
    newCoreServicesTotalCost,
  };
};

export default useNewCoreSelectors;

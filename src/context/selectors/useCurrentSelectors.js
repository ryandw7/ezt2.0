import useAppContext from '../context.js';
import createSelector from './createSelector.js';

export const getCurrentServicesItems = (state) =>
  state.currentServices?.itemsById || {};

export const getCurrentServicesItemById = createSelector(
  [getCurrentServicesItems],
  (currentServicesItems) => {
    return (id) => {
      return currentServicesItems[id];
    };
  }
);

export const getCurrentServicesItemsList = createSelector(
  [getCurrentServicesItems],
  (currentServiceItems) => {
    return Object.values(currentServiceItems);
  }
);

export const getCurrentServicesItemValueById = createSelector(
  [getCurrentServicesItemById],
  (currentServicesItemsById) => {
    return (id, key) => {
      return currentServicesItemsById(id)[key];
    };
  }
);

export const getCurrentServicesTotalCost = createSelector(
  [getCurrentServicesItems],
  (currentServicesItems) => {
    return Object.values(currentServicesItems).reduce((accumulator, item) => {
      return accumulator + item.cost;
    }, 0);
  }
);

const useCurrentSelectors = () => {
  const { state } = useAppContext();
  if (!state) {
    console.error('State is undefined in useAppSelectors');
    return {};
  }
  const currentServicesItems = getCurrentServicesItems(state);
  const currentServicesItemById = getCurrentServicesItemById(state);
  const currentServicesItemsList = getCurrentServicesItemsList(state);
  const currentServicesTotalCost = getCurrentServicesTotalCost(state) || 0;
  
  return {
    currentServicesItems,
    currentServicesItemById,
    currentServicesItemsList,
    currentServicesTotalCost,
  };
};

export default useCurrentSelectors;

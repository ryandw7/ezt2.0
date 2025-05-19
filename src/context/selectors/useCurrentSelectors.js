import useAppContext from '../context.js';
import createSelector from './createSelector.js';

export const getCurrentServices = (state) => state.currentServices?.itemsById || {};

export const getCurrentServicesItemById = createSelector(
  [getCurrentServices],
  (currentServicesItems) => {
    return (id) => {
      return currentServicesItems[id]
    }
  }
)

export const getCurrentServicesItems = createSelector(
  [getCurrentServices],
  (currentServices) => {
    return Object.values(currentServices)
  }
)

export const getCurrentServicesItemIds = createSelector(
  [getCurrentServices],
  (currentServicesItems)=>{
    return Object.keys(currentServicesItems)
  }
)

export const getCurrentServicesTotalCost = createSelector(
  [getCurrentServices],
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

  const currentServicesTotalCost = getCurrentServicesTotalCost(state) || 0;
  const currentServicesItems = getCurrentServicesItems(state);
  const currentServicesItemById = getCurrentServicesItemById(state);
  return {
    currentServicesItems,
    currentServicesTotalCost,
    currentServicesItemById
  };
};

export default useCurrentSelectors;

import useAppContext from '../context.js';
import createSelector from './createSelector.js';

export const getCurrentServicesItems = (state) => state.currentServices?.itemsById || {};

export const getCurrentServicesItemById = createSelector(
  [getCurrentServicesItems],
  (currentServicesItems) => {
    return (id) => {
      return currentServicesItems[id]
    }
  }
)

export const getCurrentServicesItemsList = createSelector(
  [getCurrentServicesItems],
  (currentServiceItems) => {
    return Object.values(currentServiceItems)
  }
)

export const getCurrentServicesItemValueById = createSelector(
  [getCurrentServicesItemById],
  (currentServicesItemsById) => {
    return (id, key) => {
      return currentServicesItemsById(id)[key]
    }
  }
)
export const getCurrentInternet = (state) =>
  state.currentServices?.internet || '';
export const getCurrentInternetCost = (state) =>
  state.currentServices?.internetCost || 0;
export const getCurrentTv = (state) => state.currentServices?.tv || '';
export const getCurrentTvCost = (state) => state.currentServices?.tvCost || 0;
export const getCurrentMobile = (state) => state.currentServices?.mobile || '';
export const getCurrentMobileCost = (state) =>
  state.currentServices?.mobileCost || 0;
export const getCurrentNotes = (state) => state.currentServices?.notes || '';
export const getCurrent = (state) => state.currentServices;
export const getCurrentServices = (state) => state.currentServices?.items || [];

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

  const currentInternet = getCurrentInternet(state);
  const currentInternetCost = getCurrentInternetCost(state) || 0;
  const currentTv = getCurrentTv(state) || '';
  const currentTvCost = getCurrentTvCost(state);
  const currentMobile = getCurrentMobile(state) || '';
  const currentMobileCost = getCurrentMobileCost(state);
  const currentNotes = getCurrentNotes(state) || '';
  const current = getCurrent(state) || '';
  const currentServicesTotalCost = getCurrentServicesTotalCost(state) || 0;
  const currentServices = getCurrentServices(state);
  const currentServicesItemsList = getCurrentServicesItemsList(state);
  return {
    currentServicesItemsList,
    currentServices,
    current,
    currentServicesTotalCost,
    currentInternet,
    currentInternetCost,
    currentTv,
    currentTvCost,
    currentMobile,
    currentMobileCost,
    currentNotes,
  };
};

export default useCurrentSelectors;

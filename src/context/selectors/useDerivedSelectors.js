import useAppContext from '../context';
import {
  getAllMobileTotals,
  getNewMobilePlanCost,
} from './useNewMobileSelectors';
import { getNewCoreServicesTotalCost } from './useNewCoreSelectors';
import { getCurrentServicesTotalCost } from './useCurrentSelectors';
import createSelector from './createSelector';

export const getNewServicesTotalCost = createSelector(
  [getNewCoreServicesTotalCost, getAllMobileTotals],
  (newCoreServicesTotalCost, allMobileTotals) => {
    const mobileTotalCost = Number(allMobileTotals.mobilePlanTotalCost);
    return newCoreServicesTotalCost + mobileTotalCost;
  }
);

export const getTotalSavings = createSelector(
  [getCurrentServicesTotalCost, getNewServicesTotalCost],
  (currentServicesTotalCost, newServicesTotalCost) => {
    return currentServicesTotalCost - newServicesTotalCost;
  }
);

const useDerivedSelectors = () => {
  const { state } = useAppContext();

  const newServicesTotalCost = getNewServicesTotalCost(state);
  const totalSavings = getTotalSavings(state);

  return { newServicesTotalCost, totalSavings };
};

export default useDerivedSelectors;

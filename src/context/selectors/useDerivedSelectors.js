import useAppContext from '../context';
import {
  getAllXfinityMobileTotals,
  getAllNowMobileTotals,
  getIsXfinityMobile
} from './useNewMobileSelectors';
import { getNewCoreServicesTotalCost } from './useNewCoreSelectors';
import { getCurrentServicesTotalCost } from './useCurrentSelectors';
import createSelector from './createSelector';

export const getNewServicesTotalCost = createSelector(
  [getNewCoreServicesTotalCost, getAllXfinityMobileTotals, getAllNowMobileTotals, getIsXfinityMobile],
  (newCoreServicesTotalCost, allXfinityMobileTotals, allNowMobileTotals, isXfinityMobile) => {
    let mobileTotalCost = 0;
    console.log(allXfinityMobileTotals.xfinityMobilePlanTotalCost)
    if (isXfinityMobile) {
      mobileTotalCost = Number(allXfinityMobileTotals.xfinityMobilePlanTotalCost);
    }else{
      mobileTotalCost = Number(allNowMobileTotals.nowMobilePlanTotalCost)
    }

    console.log(mobileTotalCost)
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

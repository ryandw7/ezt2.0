import useAppContext from "../context";
import { getNewMobilePlanCost } from "./useNewMobileSelectors";
import { getNewCoreServicesTotalCost } from "./useNewCoreSelectors";
import { getCurrentServicesTotalCost } from "./useCurrentSelectors";
import createSelector from "./createSelector";



export const getNewServicesTotalCost = createSelector([getNewCoreServicesTotalCost, getNewMobilePlanCost], (newCoreServicesTotalCost, newMobilePlanCost) => {
    const newMobilePlanTotalCost = Number(newMobilePlanCost.mobileTotal);
    return newCoreServicesTotalCost + newMobilePlanTotalCost;
})

export const getTotalSavings = createSelector([getCurrentServicesTotalCost, getNewServicesTotalCost], (currentServicesTotalCost, newServicesTotalCost) => {
    return currentServicesTotalCost - newServicesTotalCost;
})

const useDerivedSelectors = () => {

    const { state } = useAppContext();

    const newServicesTotalCost = getNewServicesTotalCost(state);
    const totalSavings = getTotalSavings(state);

    return { newServicesTotalCost, totalSavings };
}

export default useDerivedSelectors;
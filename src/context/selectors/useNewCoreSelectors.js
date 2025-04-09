import useAppContext from "../context";
import createSelector from "./createSelector";

export const getNewInternet = (state) => state.newCore?.internet || '';
export const getNewInternetCost = (state) => state.newCore?.internetCost || 0;
export const getNewTv = (state) => state.newCore?.tv || '';
export const getNewTvCost = (state) => state.newCore?.tvCost || 0;
export const getNewMobile = (state) => state.newCore?.mobile || '';
export const getNewMobileCost = (state) => state.newCore?.mobileCost || '';
export const getNewCoreNotes = (state) => state.newCore?.notes || '';
export const getNewCore = (state) => state.newCore;


export const getNewCoreServicesTotalCost = createSelector([getNewInternetCost, getNewTvCost], (internetCost, tvCost) => {
    console.log(internetCost, tvCost)
    return internetCost + tvCost || 0;
})

const useNewCoreSelectors = () => {
    const { state } = useAppContext();
    if (!state) {
        console.error("State is undefined in useAppSelectors");
        return {};
    }
    const newInternet = getNewInternet(state);
    const newInternetCost = getNewInternetCost(state) || '';
    const newTv = getNewTv(state) || '';
    const newTvCost = getNewTvCost(state) || '';
    const newCoreNotes = getNewCoreNotes(state) || '';
    const newCore = getNewCore(state) || {};
    const newCoreServicesTotalCost = getNewCoreServicesTotalCost(state);

    return { newCore, newInternet, newInternetCost, newTv, newTvCost, newCoreNotes, newCoreServicesTotalCost }
}

export default useNewCoreSelectors;
import useAppContext from "../context"

export const getNewInternet = (state) => state.newCore?.internet || '';
export const getNewInternetCost = (state) => state.newCore?.internetCost || '';
export const getNewTv = (state) => state.newCore?.tv || '';
export const getNewTvCost = (state) => state.newCore?.tvCost || '';
export const getNewMobile = (state) => state.newCore?.mobile || '';
export const getNewMobileCost = (state) => state.newCore?.mobileCost || '';
export const getNewCoreNotes = (state) => state.newCore?.notes || '';

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

    return { newInternet, newInternetCost, newTv, newTvCost, newCoreNotes }
}

export default useNewCoreSelectors;
import useAppContext from "../context"

export const getCurrentInternet = (state) => state.currentServices?.internet || '';
export const getCurrentInternetCost = (state) => state.currentServices?.internetCost || '';
export const getCurrentTv = (state) => state.currentServices?.tv || '';
export const getCurrentTvCost = (state) => state.currentServices?.tvCost || '';
export const getCurrentMobile = (state) => state.currentServices?.mobile || '';
export const getCurrentMobileCost = (state) => state.currentServices?.mobileCost || '';
export const getCurrentNotes = (state) => state.currentServices?.notes || '';

const useCurrentSelectors = () => {
    const { state } = useAppContext();
    if (!state) {
        console.error("State is undefined in useAppSelectors");
        return {};
    }
    const currentInternet = getCurrentInternet(state);
    const currentInternetCost = getCurrentInternetCost(state) || '';
    const currentTv = getCurrentTv(state) || '';
    const currentTvCost = getCurrentTvCost(state) || '';
    const currentMobile = getCurrentMobile(state) || '';
    const currentMobileCost = getCurrentMobileCost(state) || '';
    const currentNotes = getCurrentNotes(state) || '';

    return { currentInternet, currentInternetCost, currentTv, currentTvCost, currentMobile, currentMobileCost, currentNotes }
}

export default useCurrentSelectors;
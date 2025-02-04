import useAppContext from "../context"

export const getCurrentInternet = (state) => state.currentServices?.internet || '';
export const getCurrentInternetCost = (state) => state.currentServices?.internetCost || '';
const getCurrentTv = (state) => state.currentServices?.tv || '';
const getCurrentTvCost = (state) => state.currentServices?.tvCost || '';

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

    return { currentInternet, currentInternetCost, currentTv, currentTvCost }
}

export default useCurrentSelectors;
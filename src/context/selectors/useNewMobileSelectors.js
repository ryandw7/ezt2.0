import useAppContext from "../context";

const getNewMobileLines = (state) => state.newMobile?.lines || [];

const useNewMobileSelectors = () => {
    const { state } = useAppContext();
    console.log(state)
    const newMobileLines = getNewMobileLines(state);

    return { newMobileLines }
}

export default useNewMobileSelectors;
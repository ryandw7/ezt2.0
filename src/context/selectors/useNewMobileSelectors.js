import useAppContext from "../context";

const getNewMobileLines = (state) => state.newMobile?.lines || [];

const getNewMobileLineCostById = (state) => (id) => {
    const line = state.newMobile?.lines.find(item => item.id === id);
    const { hasUnlimited, hasBTG } = state.newMobile || {};
    let cost;

    switch (line.dataPlan) {
        case 'Unlimited': {
            
            if(hasUnlimited && state.newMobile?.lines.length > 1){
                cost = 20;
            }else{
                cost = 40;
            }
            return cost;
        }
        case 'Unlimited Plus': {
            if(hasUnlimited && state.newMobile?.lines.length > 0){
                cost = 30;
            }else{
                cost = 50;
            }
            return cost;
        }
        case 'By the Gig': {
            if (hasBTG === false) {
                cost = 20;
                
            } else {
                cost = 0;
            }
            return cost;
        }
    }
}
const useNewMobileSelectors = () => {
    const { state } = useAppContext();
    const getNewMobileLineCost = getNewMobileLineCostById(state)
    const newMobileLines = getNewMobileLines(state);

    return { newMobileLines, getNewMobileLineCost }
}

export default useNewMobileSelectors;
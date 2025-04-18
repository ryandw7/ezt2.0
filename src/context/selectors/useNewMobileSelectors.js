import useAppContext from "../context";

const getNewMobileLines = (state) => state.newMobile?.lines || [];

const getNewMobileLineCostById = (state) => (id) => {
    const line = state.newMobile?.lines.find(item => item.id === id);
    //const { hasUnlimited, hasBTG } = state.newMobile || {};
    let cost;

    switch (line.dataPlan) {
        case 'Unlimited': {
            if (line.id !== 0) {
                cost = 20
            } else {
                cost = 40
            }
            return cost;
        }
        case 'Unlimited Plus': {
            if (line.id !== 0) {
                cost = 30;
            } else {
                cost = 50;
            }
            return cost;
        }
        case 'Tablet': {
            cost = 20;
            return cost;
        }
        case 'Watch': {
            cost = 10;
            return cost;
        }
    }
}

export const getNewMobilePlanCost = (state) => {

    const mobileLines = state.newMobile?.lines;

    const len = mobileLines.length;

    let taxes = 1.8 * len;
    let unlimitedQuantity = 0;
    let unlimitedPlusQuantity = 0;
    let watchesQuantity = 0;
    let tabletsQuantity = 0;
    let lineQuantity = unlimitedQuantity + unlimitedPlusQuantity;
    let deviceTotalCosts = 0;
    let deviceDiscounts = 0;
    let lineDiscounts = [];
    let xmcTotal = 0;
    for (let i = 0; i < len; i++) {
        deviceTotalCosts += mobileLines[i].deviceTotalCost;
        deviceDiscounts += mobileLines[i].deviceDiscount;
        xmcTotal += mobileLines[i].xmc;

        console.log(mobileLines[i])
        switch (mobileLines[i].dataPlan) {
            case 'Unlimited':
                unlimitedQuantity++;
                break;
            case 'Unlimited Plus':
                unlimitedPlusQuantity++;
                break;
            case 'Watch':
                watchesQuantity++;
                break;
            case 'Tablet':
                tabletsQuantity++;
                break;
        }

        mobileLines[i].lineDiscount !== 0 && lineDiscounts.push(mobileLines[i].lineDiscount);
    };

    let unlimitedCost = unlimitedQuantity !== 0 ? (unlimitedQuantity * 20) + 20 : 0;
    let unlimitedPlusCost = unlimitedQuantity !== 0 ? unlimitedPlusQuantity * 30 : (unlimitedPlusQuantity * 30) + 20;
    unlimitedPlusCost = unlimitedPlusQuantity !== 0 ? unlimitedPlusCost : 0;
    let tabletsCost = tabletsQuantity * 20;
    let watchesCost = watchesQuantity * 10;
    let deviceMonthly = (deviceTotalCosts - deviceDiscounts) / 24;
    let mobileTotal = unlimitedCost + unlimitedPlusCost + tabletsCost + watchesCost + deviceMonthly + xmcTotal + taxes;
    lineDiscounts.forEach(i => mobileTotal -= i);

    return {

        taxes: taxes,
        unlimitedLines: { cost: unlimitedCost, quantity: unlimitedQuantity },
        unlimitedPlus: { cost: unlimitedPlusCost, quantity: unlimitedPlusQuantity },
        watches: { cost: watchesCost, quantity: watchesQuantity },
        tablets: { cost: tabletsCost, quantity: tabletsQuantity },
        deviceMonthly: deviceMonthly.toFixed(2),
        lineQuantity: lineQuantity,
        mobileTotal: mobileTotal.toFixed(2),
        xmcTotal: xmcTotal,
        lineDiscounts: lineDiscounts

    }
}


const useNewMobileSelectors = () => {

    const { state } = useAppContext();

    const getNewMobileLineCost = getNewMobileLineCostById(state);
    // const getNewMobileLineDiscount = getNewMobileLineDiscountById(state);
    const newMobilePlanCost = getNewMobilePlanCost(state);
    const newMobilePlanTotalCost = getNewMobilePlanCost(state).mobileTotal;
    const newMobileLines = getNewMobileLines(state);

    return { newMobilePlanTotalCost, newMobileLines, getNewMobileLineCost, newMobilePlanCost }
}

export default useNewMobileSelectors;

const curriedMemoizer = (cache = {}) => (n) => {

    if (cache[n]) {
        return cache[n] //checks if result is already there to prevent recalculation
    }

    const result = n * 2; //lets say this is a hefty calculation

    cache[n] = result;

    return result;

}
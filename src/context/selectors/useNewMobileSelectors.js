import useAppContext from '../context';
import createSelector from './createSelector';

export const getNewMobileLines = (state) => state.newMobile?.linesById || {};
export const getIsXfinityMobile = (state) =>
  state.newMobile?.isXfinityMobile || false;

export const getNowLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }

    const lines = Object.values(newMobileLines)?.filter(
      (line) => line.dataPlan === 'NOW Mobile'
    );
    return lines;
  }
);

export const getSelectLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }

    const lines = Object.values(newMobileLines)?.filter(
      (line) => line.dataPlan === 'Mobile Select'
    );
    return lines;
  }
);

export const getPlusLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }
    return Object.values(newMobileLines).filter(
      (line) => line.dataPlan === 'Mobile Plus'
    );
  }
);

export const getWatchLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }
    return Object.values(newMobileLines).filter(
      (line) => line.dataPlan === 'Watch'
    );
  }
);

export const getTabletLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }
    return Object.values(newMobileLines).filter(
      (line) => line.dataPlan === 'Tablet'
    );
  }
);

export const getEditingLineId = (state) => state.newMobile.isEditId ?? '';

export const getEditingLine = createSelector(
  [getNewMobileLines, getEditingLineId],
  (newMobileLines, editingLineId) => {
    if (!editingLineId) {
      return {};
    }
    const editingLine = Object.values(newMobileLines)?.find(
      (item) => item.id === editingLineId
    );
    console.log(editingLine);
    return editingLine;
  }
);

export const getPhoneLineCostById = createSelector(
  [getSelectLines, getPlusLines, getNowLines],
  (selectLines, plusLines, nowLines) => {
    if (!selectLines && !plusLines) {
      return 0;
    }
    const hasSelect = selectLines.length > 0;
    return (id) => {
      // Check if the line is in unlimited
      const isSelect = selectLines.find((line) => line.id === id);
      if (isSelect) {
        return 30;
      }

      // Check if it's in unlimited premium
      const isPlus = plusLines.find((line) => line.id === id);
      if (isPlus) {
       return 45;
      }
      const isNow = nowLines.find((line) => line.id === id);
      if (isNow) {
        return 25;
      }
      return 0;
    };
  }
);

export const getMobileLineCostById = createSelector(
  [getPhoneLineCostById, getNewMobileLines],
  (phoneLineCostById, newMobileLines) => {
    return (id) => {
      if (
        newMobileLines[id].dataPlan === 'Mobile Select' ||
        newMobileLines[id].dataPlan === 'Mobile Plus'
      ) {
        return phoneLineCostById(id);
      } else if (newMobileLines[id].dataPlan === 'Tablet') {
        return 20;
      } else if (newMobileLines[id].dataPlan === 'Watch') {
        return 10;
      }
      return 0;
    };
  }
);

export const getSelectLinesTotalCost = createSelector(
  [getSelectLines, getPhoneLineCostById],
  (selectLines, phoneLineCostById) => {
    return selectLines.reduce(
      (accumulator, line) => phoneLineCostById(line.id) + accumulator,
      0
    );
  }
);

export const getPlusLinesTotalCost = createSelector(
  [getPlusLines, getPhoneLineCostById],
  (plusLines, phoneLineCostById) => {
    return plusLines.reduce(
      (accumulator, line) => accumulator + phoneLineCostById(line.id),
      0
    );
  }
);

export const getTabletLinesTotalCost = createSelector(
  [getTabletLines],
  (tabletLines) => {
    return tabletLines.length * 20;
  }
);

export const getWatchLinesTotalCost = createSelector(
  [getWatchLines],
  (watchLines) => {
    return watchLines.length * 10;
  }
);

export const getDevicePaymentsTotalCost = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    return Object.values(newMobileLines).reduce((accumulator, line) => {
      return (line.deviceTotalCost - line.deviceDiscount) / 24 + accumulator;
    }, 0);
  }
);

export const getLineDiscountsTotalOff = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    return Object.values(newMobileLines).reduce((accumulator, line) => {
      return accumulator + line.lineDiscount;
    }, 0);
  }
);

export const getXMCTotalCost = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    return Object.values(newMobileLines).reduce((accumulator, line) => {
      return accumulator + line.xmc;
    }, 0);
  }
);
export const getAllNowMobileTotals = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    let nowLinesCount = 0;
    let travelPassCount = 0;
    let hotSpotCount = 0;
    const lines = Object.values(newMobileLines)
      ? Object.values(newMobileLines).filter(
          (item) => item.dataPlan === 'NOW Mobile'
        )
      : [];

    if (!lines) {
      return {};
    }

    for (const line of lines) {
      nowLinesCount += 1;
      if (line.hasTravelPass === true) {
        travelPassCount += 1;
      }
      if (line.hasHotSpot === true) {
        hotSpotCount += 1;
      }
    }

    let nowLinesTotalCost = nowLinesCount * 25;
    let travelPassTotalCost = travelPassCount * 5;
    let hotSpotTotalCost = hotSpotCount * 5;
    let nowMobileTaxesTotalCost = nowLinesCount * 1.81;

    const nowMobilePlanTotalCost =
      nowLinesTotalCost +
      travelPassTotalCost +
      hotSpotTotalCost +
      nowMobileTaxesTotalCost;
    return {
      nowLinesCount,
      nowLinesTotalCost,
      travelPassCount,
      travelPassTotalCost,
      hotSpotCount,
      hotSpotTotalCost,
      nowMobilePlanTotalCost,
      nowMobileTaxesTotalCost,
    };
  }
);
export const getAllXfinityMobileTotals = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    let selectTotalCost = 0;
    let plusTotalCost = 0;
    let tabletTotalCost = 0;
    let watchTotalCost = 0;
    let devicePaymentsTotalCost24 = 0;
    let devicePaymentsTotalCost36 = 0;
    let xmcTotalCost = 0;
    let lineDiscountsTotalOff = 0;
    let lineDiscountList = [];
    let deviceDiscountsTotalOff24 = 0;
    let deviceDiscountsTotalOff36 = 0;
    let nowLinesCount = 0;
    
    const lines = Object.values(newMobileLines)
      ? Object.values(newMobileLines)
      : [];

    if (!lines) {
      return {};
    }
    const hasSelect = lines.some((line) => line.dataPlan === 'Mobile Select');

    let selectCount = 0;
    let plusCount = 0;
    let tabletCount = 0;
    let watchCount = 0;

    for (const line of lines) {
      const {
        dataPlan,
        deviceTotalCost,
        devicePaymentDuration,
        deviceDiscount,
        lineDiscountDesc,
        lineDiscountDuration,
        lineDiscount,
        xmc,
        id,
      } = line;

      if (dataPlan === 'Mobile Select') {
        selectTotalCost += 30;
        selectCount++;
      } else if (dataPlan === 'Mobile Plus') {
        plusTotalCost += 45
        plusCount ++;

      } else if (dataPlan === 'Tablet') {
        tabletCount++;
        tabletTotalCost += 20;
      } else if (dataPlan === 'Watch') {
        watchCount++;
        watchTotalCost += 10;
      } else if (dataPlan === 'NOW Mobile') {
        nowLinesCount++;
      }
      if(devicePaymentDuration === 24){
        deviceDiscountsTotalOff24 += deviceDiscount / 24;
        devicePaymentsTotalCost24 += deviceTotalCost / 24;
      } else if(devicePaymentDuration === 36){
        deviceDiscountsTotalOff36 += deviceDiscount / 36;
        devicePaymentsTotalCost36 += deviceTotalCost / 36;
      }

      lineDiscount &&
        lineDiscountList.push({
          lineDiscountDesc,
          lineDiscountDuration,
          lineDiscount,
        });
      lineDiscountsTotalOff += lineDiscount;
      xmcTotalCost += xmc;
    }
    const xfinityMobileTaxesTotalCost = (lines.length - nowLinesCount) * 1.81;

    const xfinityMobilePlanTotalCost =

    //ADDITIONS
      selectTotalCost +
      plusTotalCost +
      tabletTotalCost +
      watchTotalCost +
      devicePaymentsTotalCost24 +
      devicePaymentsTotalCost36 +
      xfinityMobileTaxesTotalCost 
      -
    //SUBTRACTIONS
      deviceDiscountsTotalOff36 -
      deviceDiscountsTotalOff24 -
      xmcTotalCost -
      lineDiscountsTotalOff;

    console.log("discounts" + lineDiscountsTotalOff);
    console.log("total" + xfinityMobilePlanTotalCost);

    return {
      selectCount: selectCount,
      selectTotalCost: selectTotalCost,
      plusCount: plusCount,
      plusTotalCost: plusTotalCost,
      tabletCount,
      tabletTotalCost,
      watchCount,
      watchTotalCost,
      devicePaymentsTotalCost24,
      deviceDiscountsTotalOff24,
      devicePaymentsTotalCost36,
      deviceDiscountsTotalOff36,
      lineDiscountsTotalOff,
      lineDiscountList,
      xmcTotalCost,
      xfinityMobileTaxesTotalCost,
      xfinityMobilePlanTotalCost,
    };
  }
);

const useNewMobileSelectors = () => {
  const { state } = useAppContext();
  const isXfinityMobile = getIsXfinityMobile(state);
  const editingLineId = getEditingLineId(state);
  const editingLine = getEditingLine(state);
  const getNewMobileLineCost = getMobileLineCostById(state);
  const newMobileLines = getNewMobileLines(state);
  const selectLines = getSelectLines(state);
  const plusLines = getPlusLines(state);
  const phoneLineCostById = getPhoneLineCostById(state);
  const tabletLines = getTabletLines(state);
  const watchLines = getWatchLines(state);
  const allXfinityMobileTotals = getAllXfinityMobileTotals(state);
  const allNowMobileTotals = getAllNowMobileTotals(state);
  const nowMobileLines = getNowLines(state);
  return {
    allNowMobileTotals,
    nowMobileLines,
    editingLine,
    editingLineId,
    allXfinityMobileTotals,
    selectLines,
    phoneLineCostById,
    plusLines,
    tabletLines,
    watchLines,
    newMobileLines,
    getNewMobileLineCost,
    isXfinityMobile,
  };
};

export default useNewMobileSelectors;

const curriedMemoizer =
  (cache = {}) =>
  (n) => {
    if (cache[n]) {
      return cache[n]; //checks if result is already there to prevent recalculation
    }

    const result = n * 2; //lets say this is a hefty calculation

    cache[n] = result;

    return result;
  };

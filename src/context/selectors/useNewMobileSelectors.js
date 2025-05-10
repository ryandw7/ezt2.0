import useAppContext from '../context';
import createSelector from './createSelector';

export const getNewMobileLines = (state) => state.newMobile?.linesById || {};

export const getUnlimitedLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }

    const lines = Object.values(newMobileLines)?.filter(
      (line) => line.dataPlan === 'Unlimited'
    );
    return lines;
  }
);

export const getUnlimitedPremiumLines = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    if (!newMobileLines) {
      return [];
    }
    return Object.values(newMobileLines).filter(
      (line) => line.dataPlan === 'Unlimited Premium'
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
  [getUnlimitedLines, getUnlimitedPremiumLines],
  (unlimitedLines, unlimitedPremiumLines) => {
    if (!unlimitedLines && !unlimitedPremiumLines) {
      return 0;
    }
    const hasUnlimited = unlimitedLines.length > 0;
    return (id) => {
      // Check if the line is in unlimited
      const isInUnlimited = unlimitedLines.find((line) => line.id === id);
      if (isInUnlimited) {
        return unlimitedLines[0]?.id === id ? 40 : 20;
      }

      // Check if it's in unlimited premium
      const isInPremium = unlimitedPremiumLines.find((line) => line.id === id);
      if (isInPremium) {
        if (hasUnlimited) {
          return 30;
        }
        return unlimitedPremiumLines[0]?.id === id ? 50 : 30;
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
        newMobileLines[id].dataPlan === 'Unlimited' ||
        newMobileLines[id].dataPlan === 'Unlimited Premium'
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

export const getUnlimitedLinesTotalCost = createSelector(
  [getUnlimitedLines, getPhoneLineCostById],
  (unlimitedLines, phoneLineCostById) => {
    return unlimitedLines.reduce(
      (accumulator, line) => phoneLineCostById(line.id) + accumulator,
      0
    );
  }
);

export const getUnlimitedPremiumLinesTotalCost = createSelector(
  [getUnlimitedPremiumLines, getPhoneLineCostById],
  (unlimitedPremiumLines, phoneLineCostById) => {
    return unlimitedPremiumLines.reduce(
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

export const getAllMobileTotals = createSelector(
  [getNewMobileLines],
  (newMobileLines) => {
    let unlimitedTotalCost = 0;
    let premiumTotalCost = 0;
    let tabletTotalCost = 0;
    let watchTotalCost = 0;
    let devicePaymentsTotalCost = 0;
    let xmcTotalCost = 0;
    let lineDiscountsTotalOff = 0;
    let lineDiscountList = [];
    let deviceDiscountsTotalOff = 0;
  
    const lines = Object.values(newMobileLines)
      ? Object.values(newMobileLines)
      : [];

    if (!lines) {
      return {};
    }
    const hasUnlimited = lines.some((line) => line.dataPlan === 'Unlimited');
    const taxesTotalCost = lines.length * 1.81;

    let unlimitedCount = 0;
    let premiumCount = 0;
    let tabletCount = 0;
    let watchCount = 0;

    for (const line of lines) {
      const {
        dataPlan,
        deviceTotalCost,
        deviceDiscount,
        lineDiscount,
        xmc,
        id,
      } = line;

      if (dataPlan === 'Unlimited') {
        unlimitedTotalCost += unlimitedCount === 0 ? 40 : 20;
        unlimitedCount++;
      } else if (dataPlan === 'Unlimited Premium') {
        if (hasUnlimited) {
          premiumTotalCost += 30;
        } else {
          premiumTotalCost += premiumCount === 0 ? 50 : 30;
        }
        premiumCount++;
      } else if (dataPlan === 'Tablet') {
        tabletCount++;
        tabletTotalCost += 20;
      } else if (dataPlan === 'Watch') {
        watchCount++;
        watchTotalCost += 10;
      }

      deviceDiscountsTotalOff += deviceDiscount;
      devicePaymentsTotalCost += (deviceTotalCost - deviceDiscount) / 24;
      lineDiscount && lineDiscountList.push(lineDiscount);
      lineDiscountsTotalOff += lineDiscount;
      xmcTotalCost += xmc;
    }
    const mobilePlanTotalCost =
      unlimitedTotalCost +
      premiumTotalCost +
      tabletTotalCost +
      watchTotalCost +
      devicePaymentsTotalCost +
      taxesTotalCost +
      xmcTotalCost -
      lineDiscountsTotalOff;

    return {
      unlimitedCount,
      unlimitedTotalCost,
      premiumCount,
      premiumTotalCost,
      tabletCount,
      tabletTotalCost,
      watchCount,
      watchTotalCost,
      devicePaymentsTotalCost,
      lineDiscountsTotalOff,
      xmcTotalCost,
      taxesTotalCost,
      mobilePlanTotalCost,
    };
  }
);

const useNewMobileSelectors = () => {
  const { state } = useAppContext();
  const editingLineId = getEditingLineId(state);
  const editingLine = getEditingLine(state);
  const getNewMobileLineCost = getMobileLineCostById(state);
  const newMobileLines = getNewMobileLines(state);
  const unlimitedLines = getUnlimitedLines(state);
  const unlimitedPremiumLines = getUnlimitedPremiumLines(state);
  const phoneLineCostById = getPhoneLineCostById(state);
  const tabletLines = getTabletLines(state);
  const watchLines = getWatchLines(state);
  const allMobileTotals = getAllMobileTotals(state);

  return {
    editingLine,
    editingLineId,
    allMobileTotals,
    unlimitedLines,
    phoneLineCostById,
    unlimitedPremiumLines,
    tabletLines,
    watchLines,
    newMobileLines,
    getNewMobileLineCost,
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

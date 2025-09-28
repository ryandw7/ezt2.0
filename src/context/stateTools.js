import { v4 as uuidv4 } from 'uuid';

const PLAN = {
  UNLIMITED: 'Unlimited',
  PREMIUM: 'Premium Unlimited',
  NOW: 'NOW Mobile',
  TABLET: 'Tablet',
  WATCH: 'Watch',
};

// only fields shared by every line type
const lineDefaults = {
  isEdit: true,
  name: '',
  isBYOD: true,
  number: 0,
  port: true,
  deviceModel: null,
  deviceTotalCost: 0,
  deviceDiscountDesc: '',
  deviceDiscount: 0,
  cost: 0,
  lineDiscount: 0,
  lineDiscountDesc: '',
  lineDiscountDuration: null,
  xmc: 0,
};

export const makeNowMobileLine = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.NOW,
  hasTravelPass: false,
  hasHotSpot: false,
});

export const makeXfinityMobileLine = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.UNLIMITED,
  payInFull: false,
});

export const makeWatchLine = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.WATCH,
  payInFull: false,
});

export const makeTabletLine = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.TABLET,
  payInFull: false,
});

export const makeServiceItem = () => ({
  id: uuidv4(),
  description: '',
  cost: 0,
  additionalNotes: '',
});

// single definition point for initial state (fresh each call)
export const buildInitialState = () => {
  const startPhone = makeXfinityMobileLine();
  const startNow = makeNowMobileLine();
  const startCurrentItem = makeServiceItem();
  const startNewItem = makeServiceItem();

  return {
    currentServices: {
      itemsById: {
        [startCurrentItem.id]: startCurrentItem,
      },
    },
    newCoreServices: {
      itemsById: {
        [startNewItem.id]: startNewItem,
      },
    },
    newMobile: {
      linesById: {
        [startPhone.id]: startPhone,
        [startNow.id]: startNow,
      },
      isEditId: '',
      info: '',
      total: 0,
      isXfinityMobile: true,
    },
    additional: {
      rep: '',
      contact: '',
      additionalNotes: '',
    },
  };
};

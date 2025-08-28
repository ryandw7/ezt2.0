import { v4 as uuidv4 } from 'uuid';

const PLAN = {
  UNLIMITED: "Unlimited",
  PREMIUM: "Premium Unlimited",
  NOW: "Now Mobile",
  TABLET: "Tablet",
  WATCH: "Watch"
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
  xmc: 0,
};


export const nowLineObj = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.NOW,
  hasTravelPass: false,
  hasHotSpot: false,
});

export const phoneLineObj = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.UNLIMITED,
  payInFull: false,
});

export const watchLineObj = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.WATCH,
  payInFull: false,
});

export const tabletLineObj = () => ({
  id: uuidv4(),
  ...lineDefaults,
  dataPlan: PLAN.TABLET,
  payInFull: false,
});

export const serviceItemObj = () => ({
  id: uuidv4(),
  description: '',
  cost: 0,
  additionalNotes: '',
});

// single definition point for initial state (fresh each call)
export const createInitialState = () => {
  const startPhone = phoneLineObj();
  const startNow = nowLineObj();
  const startCurrentItem = serviceItemObj();
  const startNewItem = serviceItemObj();

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

import { v4 as uuidv4 } from 'uuid';

export const lineObj = () => ({
  isEdit: true,
  name: '',
  isBYOD: true,
  number: 0,
  port: true,
  dataPlan: 'Unlimited',
  deviceModel: null,
  deviceTotalCost: 0,
  deviceDiscountDesc: '',
  deviceDiscount: 0,
  payInFull: false,
  cost: 0,
  lineDiscount: 0,
  xmc: 0,
});

export const phoneLineObj = () => ({
  isEdit: true,
  name: '',
  isBYOD: true,
  number: 0,
  port: true,
  dataPlan: 'Unlimited',
  deviceModel: null,
  deviceTotalCost: 0,
  deviceDiscountDesc: '',
  deviceDiscount: 0,
  payInFull: false,
  cost: 0,
  lineDiscount: 0,
  xmc: 0,
});

export const watchLineObj = () => ({
  isEdit: true,
  name: '',
  isBYOD: true,
  number: 0,
  port: true,
  dataPlan: 'Watch',
  deviceModel: null,
  deviceTotalCost: 0,
  deviceDiscountDesc: '',
  deviceDiscount: 0,
  payInFull: false,
  cost: 0,
  lineDiscount: 0,
  xmc: 0,
});

export const tabletLineObj = () => ({
  isEdit: true,
  name: '',
  isBYOD: true,
  number: 0,
  port: true,
  dataPlan: 'Tablet',
  deviceModel: null,
  deviceTotalCost: 0,
  deviceDiscountDesc: '',
  deviceDiscount: 0,
  payInFull: false,
  cost: 0,
  lineDiscount: 0,
  xmc: 0,
});
export const serviceItemObj = () => ({
  id: uuidv4(),
  description: '',
  cost: 0,
  additionalNotes: '',
});

const start_line_id = uuidv4();
const start_line_obj = phoneLineObj();
start_line_obj.id = start_line_id;

export const createInitialState = () => ({
  currentServices: {
    internet: '',
    internetCost: 0,
    tv: '',
    tvCost: 0,
    mobile: '',
    mobileCost: 0,
    notes: '',
    items: [serviceItemObj()],
  },
  newCore: {
    internet: '',
    internetCost: 0,
    tv: '',
    tvCost: 0,
    items: [serviceItemObj()],
    notes: '',
  },
  newMobile: {
    linesById: {
      [start_line_id]: start_line_obj,
    },
    isEditId: '',
    info: '',
    total: 0,
  },
  additional: {
    rep: '',
    contact: '',
    additionalNotes: '',
  },
});

export const updateDataFlags = (lines) => {
  const hasUnlimited = lines.some((line) => line.dataPlan === 'Unlimited');
  const hasBTG = lines.some((line) => line.dataPlan === 'BTG');

  return { hasUnlimited, hasBTG };
};

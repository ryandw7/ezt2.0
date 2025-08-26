import { v4 as uuidv4 } from 'uuid';


//Possible Data Plans: Unlimited, Unlimited Premium, NOW Mobile, Watch, Tablet
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

export const nowLineObj = () => ({
  isEdit: true,
  name: '',
  isBYOD: true,
  number: 0,
  port: true,
  dataPlan: 'Now Mobile',
  deviceModel: null,
  deviceTotalCost: 0,
  deviceDiscountDesc: '',
  deviceDiscount: 0,
  cost: 0,
  lineDiscount: 0,
  xmc: 0,
  hasTravelPass: false,
  hasHotSpot: false,
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


// set ID's for initial state values (all item containers start with one item)
const start_line_id = uuidv4();
const start_line_obj = phoneLineObj();
start_line_obj.id = start_line_id;

const start_now_line_id = uuidv4();
const start_now_line_obj = nowLineObj();
start_now_line_obj.id = start_now_line_id;

const start_current_services_item_id = uuidv4();
const start_current_services_item_obj = serviceItemObj();
start_current_services_item_obj.id = start_current_services_item_id;

const start_new_services_item_id = uuidv4();
const start_new_services_item_obj = serviceItemObj();
start_new_services_item_obj.id = start_new_services_item_id;


// state hivemind
// be cautious changing names of object keys, as they are referenced in the root reducer by name
export const createInitialState = () => ({
  currentServices: {
    itemsById: {
      [start_current_services_item_id]: start_current_services_item_obj,
    },
  },
  newCoreServices: {
    itemsById: {
      [start_new_services_item_id]: start_new_services_item_obj,
    },
  },
  newMobile: {
    linesById: {
      [start_line_id]: start_line_obj,
      [start_now_line_id]: start_now_line_obj,
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
});

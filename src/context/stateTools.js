
export const lineObj = () => ({
    isEdit: true,
    id: 0,
    name: '',
    isBYOD: true,
    number: 0,
    port: true,
    dataPlan: 'Unlimited',
    deviceModel: null,
    deviceTotalCost: 0,
    deviceDiscountDesc: '',
    deviceDiscount: 0,
    //deviceMonthly: (deviceTotalCost - deviceDiscount /24).toFixed(2) || 0,
    payInFull: false,
    cost: 0,
    lineDiscount: 0
});

export const createInitialState = () => ({

    currentServices: {
        internet: '',
        internetCost: 0,
        tv: '',
        tvCost: 0,
        mobile: '',
        mobileCost: 0,
        notes: ''

    },
    newCore: {
        internet: '',
        internetCost: 0,
        tv: '',
        tvCost: 0,
        notes: ''
    },
    newMobile: {
        lines: [lineObj()],
        hasUnlimited: true,
        hasBTG: false,
        info: '',
        total: 0

    },
    rep: {
        name: '',
        contact: ''
    }
})

export const updateDataFlags = (lines) => {
    const hasUnlimited = lines.some(line => line.plan === "Unlimited");
    const hasBTG = lines.some(line => line.plan === "BTG");

    return { hasUnlimited, hasBTG };
}
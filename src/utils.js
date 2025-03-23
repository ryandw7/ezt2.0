export const test_lines = [
    {
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
        payInFull: false,
        cost: 0,
        lineDiscount: 0
    }, {
        isEdit: true,
        id: 0,
        name: '',
        isBYOD: true,
        number: 0,
        port: true,
        dataPlan: 'Unlimited Plus',
        deviceModel: null,
        deviceTotalCost: 0,
        deviceDiscountDesc: '',
        deviceDiscount: 0,
        payInFull: false,
        cost: 0,
        lineDiscount: 20
    }, {
        isEdit: true,
        id: 0,
        name: '',
        isBYOD: true,
        number: 0,
        port: true,
        dataPlan: 'Unlimited',
        deviceModel: 'iPhone 16',
        deviceTotalCost: 829.99,
        deviceDiscountDesc: 'Trade In',
        deviceDiscount: 500,
        payInFull: false,
        cost: 0,
        lineDiscount: 0
    }, {
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
        payInFull: false,
        cost: 0,
        lineDiscount: 0
    }
]

export const parse_mobile_cost = (mobileLines) => {

    const len = mobileLines.length;

    let taxes = 1.8 * len
    let unlimitedQuantity = 0;
    let unlimitedPlusQuantity = 0;
    let watchesQuantity = 0;
    let tabletsQuantity = 0;
    let lineQuantity = unlimitedQuantity + unlimitedPlusQuantity;
    let deviceTotalCosts = 0;
    let deviceDiscounts = 0;
    let lineDiscounts = [];

    for (let i = 0; i < len; i++) {
        deviceTotalCosts += mobileLines[i].deviceTotalCost;
        deviceDiscounts += mobileLines[i].deviceDiscount;
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

    
    let deviceMonthly = (deviceTotalCosts - deviceDiscounts) / 24;
    let mobileTotal = (unlimitedQuantity * 20) + (unlimitedPlusQuantity * 10) + deviceMonthly + taxes + 20
    lineDiscounts.forEach(i => mobileTotal -= i);

    return {
        taxes: taxes,
        unlimitedLines: { cost: (unlimitedQuantity * 20) + 20, quantity: unlimitedQuantity },
        unlimitedPlus: { cost: unlimitedPlusQuantity * 10, quantity: unlimitedPlusQuantity },
        watches: { cost: 0, quantity: watchesQuantity },
        tablets: { cost: 0, quantity: tabletsQuantity },
        deviceMonthly: deviceMonthly.toFixed(2),
        lineQuantity: lineQuantity,
        mobileTotal: mobileTotal.toFixed(2),
        lineDiscounts: lineDiscounts

    }
}


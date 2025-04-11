import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import PrintBox from '../boxes/PrintBox';
import RowBox from '../boxes/RowBox';
import { data } from 'react-router-dom';

const NewView = ({ className, data}) => {
    const {newCore, newMobilePlanCost, newServicesTotalCost} = data;
    const { internet, internetCost, tv, tvCost } = newCore;
    const { taxes, xmcTotal, unlimitedLines, unlimitedPlus, watches, tablets, deviceMonthly, lineQuantity, mobileTotal, lineDiscounts } = newMobilePlanCost;

    return (
        <PrintBox header={"New Services"} className={className}>

            {(internet && internetCost != 0) ? <>

                <RowBox>
                    <Typography variant="h3">Internet</Typography>
                </RowBox>
                <RowBox>
                    <Typography>{internet}</Typography>
                    <Typography>${internetCost.toFixed(2)} est.</Typography>
                </RowBox>

            </> : null}

            {(tv && tvCost != 0) ? <>

                <RowBox>
                    <Typography variant="h3">TV and Extras</Typography>
                </RowBox>
                <RowBox>
                    <Typography>{tv}</Typography>
                    <Typography>${tvCost.toFixed(2)} est.</Typography>
                </RowBox>

            </> : null}

            {mobileTotal != 0 ? <>


                <RowBox>
                    <Typography variant="h3">Mobile</Typography>
                </RowBox>

                {unlimitedLines.quantity !== 0 &&
                    <RowBox>
                        <Typography>{unlimitedLines.quantity} Unlimited Line{unlimitedLines.quantity > 1 && 's'}</Typography>
                        <Typography>${unlimitedLines.cost.toFixed(2)} est.</Typography>
                    </RowBox>}

                {tablets.quantity !== 0 && <RowBox>
                    <Typography>{tablets.quantity} Tablet{tablets.quantity > 1 && 's'}</Typography>
                    <Typography>${tablets.cost.toFixed(2)} est.</Typography>
                </RowBox>}

                {watches.quantity !== 0 && <RowBox>
                    <Typography>{watches.quantity} Watch{watches.quantity > 1 && 'es'}</Typography>
                    <Typography>${watches.cost.toFixed(2)} est.</Typography>
                </RowBox>}

                {xmcTotal !== 0 && <RowBox>
                    <Typography>Xfinity Mobile Care</Typography>
                    <Typography>${xmcTotal.toFixed(2)} est.</Typography>
                </RowBox>}

                {unlimitedPlus.quantity !== 0 && <RowBox>
                    <Typography>{unlimitedPlus.quantity} Unlimited Plus Line{unlimitedPlus.quantity > 1 && 's'}</Typography>
                    <Typography>${unlimitedPlus.cost.toFixed(2)} est.</Typography>
                </RowBox>}

                {deviceMonthly != 0 && <RowBox>
                    <Typography>New Devices</Typography>
                    <Typography>${deviceMonthly} est.</Typography>
                </RowBox>}

                <RowBox>
                    <Typography>Taxes</Typography>
                    <Typography>${taxes.toFixed(2)} est.</Typography>
                </RowBox>

                {lineDiscounts.map(item => <RowBox><Typography>Line Discount</Typography><Typography>-${item.toFixed(2)} est.</Typography></RowBox>)}

                <RowBox>
                    <Typography fontWeight={"bold"}>Total</Typography>
                    <Typography fontWeight={"bold"}>${mobileTotal} est.</Typography>
                </RowBox>
                <RowBox sx={{ marginTop: "auto", justifySelf: "flex-end" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ p: 0, m: 0, height: "fit-content" }}>New Total</Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ p: 0, m: 0, height: "fit-content" }}>${newServicesTotalCost.toFixed(2)} est.</Typography>
                </RowBox>

            </> : null}
        </PrintBox>
    )
};

export default NewView;


import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
const NewView = ({ newCore, mobileCost, newTotal }) => {
    const { internet, internetCost, tv, tvCost, notes } = newCore;
    console.log(newCore)
    const { taxes, xmcTotal, unlimitedLines, unlimitedPlus, watches, tablets, deviceMonthly, lineQuantity, mobileTotal, lineDiscounts } = mobileCost;

    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5" }} className="new-view">
            <Typography variant='h2' sx={{ height: "60px", width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px" }}>New Services</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "flex-start", position: "relative", width: "100%", height: "calc(100% - 60px)" }}>

                {(internet && internetCost != 0) ? <>
                    <Box>
                        <RowBox>
                            <Typography variant="h3">Internet</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography>{internet}</Typography>
                            <Typography>${internetCost.toFixed(2)} est.</Typography>
                        </RowBox>
                    </Box>
                </>
                    : null}
                {(tv && tvCost != 0) ? <>
                    <Box>
                        <RowBox>
                            <Typography variant="h3">TV and Extras</Typography>

                        </RowBox>
                        <RowBox>
                            <Typography>{tv}</Typography>
                            <Typography>${tvCost.toFixed(2)} est.</Typography>
                        </RowBox>
                    </Box>
                </> : null}
                {/* {newCoreTotal !== 0 ? <>
                        <RowBox>
                            <Typography fontWeight="bold">Total:</Typography>
                            <Typography fontWeight="bold">${newCoreTotal.toFixed(2)}</Typography>
                        </RowBox>
                    </> : null} */}


                {mobileTotal != 0 ? <>
                    <Box>
                        <RowBox>
                            <Typography variant="h3">Mobile</Typography>
                        </RowBox>
                        {unlimitedLines.quantity !== 0 && <RowBox>
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
                        <RowBox><Typography fontWeight={"bold"}>Total</Typography><Typography fontWeight={"bold"}>${mobileTotal} est.</Typography></RowBox>
                        <RowBox sx={{ position: "absolute", bottom: "5px", padding: "3px" }}>
                            <Typography variant="h4" fontWeight="bold" sx={{ p: 0, m: 0, height: "fit-content" }}>New Total</Typography>
                            <Typography variant="h4" fontWeight="bold" sx={{ p: 0, m: 0, height: "fit-content" }}>${newTotal.toFixed(2)} est.</Typography>
                        </RowBox>
                    </Box>
                </> : null}
            </Box>
        </Paper>
    )
};

const RowBox = ({ children, sx = {} }) => <Box sx={{ display: "flex", flexDirection: "row", textWrap: "no-wrap", justifyContent: "space-between", width: "100%", p: "5px 20px 5px 20px", ...sx }}>{children}</Box>
export default NewView;


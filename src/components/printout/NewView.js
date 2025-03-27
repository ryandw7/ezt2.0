import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
const NewView = ({ newCore, mobileCost, newCoreTotal, newTotal }) => {
    const { internet, internetCost, tv, tvCost, notes } = newCore;
    console.log(newCore)
    const { taxes, unlimitedLines, unlimitedPlus, watches, tablets, deviceMonthly, lineQuantity, mobileTotal, lineDiscounts } = mobileCost;

    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5" }} className="new-view">
            <Typography variant='h2' sx={{ height: "60px", width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px" }}>New Services</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "space-around", position: "relative", width: "100%", height: "calc(100% - 60px)" }}>

                {(internet && internetCost != 0) ? <>
                    <Box>
                        <RowBox>
                            <Typography variant="h3">Internet</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography>{internet}</Typography>
                            <Typography>${internetCost.toFixed(2)}</Typography>
                        </RowBox>
                    </Box>
                </>
                    : null}
                {(tv && tvCost != 0) ? <>
                    <Box>
                        <RowBox>
                            <Typography variant="h3">TV and Extras</Typography>
                            <Typography>${tvCost.toFixed(2)}</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography>{tv}</Typography>
                        </RowBox>
                    </Box>
                </> : null}
                {/* {newCoreTotal !== 0 ? <>
                        <RowBox>
                            <Typography fontWeight="bold">Total:</Typography>
                            <Typography fontWeight="bold">${newCoreTotal.toFixed(2)}</Typography>
                        </RowBox>
                    </> : null} */}


                <Box>
                    <RowBox>
                        <Typography variant="h3">Mobile</Typography>
                    </RowBox>
                    {unlimitedLines.quantity !== 0 && <RowBox>
                        <Typography>{unlimitedLines.quantity} Unlimited Line{unlimitedLines.quantity > 1 && 's'}</Typography>
                        <Typography>${unlimitedLines.cost.toFixed(2)} est.</Typography>
                    </RowBox>}

                    {unlimitedLines.quantity !== 0 && <RowBox>
                        <Typography>{unlimitedLines.quantity} Unlimited Line{unlimitedLines.quantity > 1 && 's'}</Typography>
                        <Typography>${unlimitedLines.cost.toFixed(2)} est.</Typography>
                    </RowBox>}
                    {unlimitedLines.quantity !== 0 && <RowBox>
                        <Typography>{unlimitedLines.quantity} Unlimited Line{unlimitedLines.quantity > 1 && 's'}</Typography>
                        <Typography>${unlimitedLines.cost.toFixed(2)} est.</Typography>
                    </RowBox>}
                    {unlimitedLines.quantity !== 0 && <RowBox>
                        <Typography>{unlimitedLines.quantity} Unlimited Line{unlimitedLines.quantity > 1 && 's'}</Typography>
                        <Typography>${unlimitedLines.cost.toFixed(2)} est.</Typography>
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
                    <RowBox>
                        <Typography variant="h3" fontWeight="bold" sx={{ position: "absolute", bottom: '5px', left: "5%", p: 0, m: 0, height: "fit-content", width: "fit-content" }}>Net Total</Typography>
                        <Typography variant="h3" fontWeight="bold" sx={{ position: "absolute", bottom: '5px', left: "70%", p: 0, m: 0, height: "fit-content", width: "fit-content" }}>${newTotal.toFixed(2)}</Typography>
                    </RowBox>
                </Box>
            </Box>
        </Paper>
    )
};

const RowBox = ({ children }, addSx) => <Box sx={{ display: "flex", flexDirection: "row", textWrap: "no-wrap", justifyContent: "space-between", width: "100%", p: "5px 20px 5px 20px" }}>{children}</Box>
export default NewView;


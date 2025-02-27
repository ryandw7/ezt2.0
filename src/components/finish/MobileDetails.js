import React from 'react';
import { Box, Typography, ListItem, List, Paper } from '@mui/material'
export default function MobileDetails({ lines }) {

    /*LINE OBJ = {
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
            DeviceDiscount: 0,
            deviceMonthly: 0,
            payInFull: false,
            cost: 0,
            lineDiscount: 0
        } */
    let totalMobileCost = 0;
    return (
        <Box sx={{ width: "100%" }}>
            <List sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center" }}>
                {
                    lines.map((line) => {
                        let totalLineCost = line.cost - line.lineDiscount;
                        let deviceMonthly = (line.deviceTotalCost - line.deviceDiscount) / 24;
                        totalLineCost += deviceMonthly;
                        totalMobileCost += totalLineCost;
                        return (
                            <ListItem sx={{ width: "100%" }}>
                                <Paper sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center", width: "90%" }}>
                                    <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                        <Typography>Name: {line.name || '________'}</Typography>
                                        <Typography>{line.isBYOD ? 'BYOD' : 'New Device'}</Typography>
                                    </Box>
                                    {line.isBYOD &&
                                        <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                            <Typography>IMEI: {line.imei ? line.imei : '_______________'}</Typography>
                                            {!line.newNumber && <Typography>Phone Number: {line.phoneNumber ? line.phoneNumber : '_____________'}</Typography>}
                                        </Box>}
                                    {!line.isBYOD && <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                       <Typography>{line.deviceModel}</Typography>
                                       <Typography>{line.deviceTotalCost.toFixed(2)}</Typography>
                                       <Typography>${(line.deviceTotalCost / 24).toFixed(2)}</Typography> 
                                    </Box>}
                                    {line.deviceDiscount && <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>

                                        <Typography>{line.deviceDiscountDesc}</Typography>
                                        <Typography>-${line.deviceDiscount.toFixed(2)}</Typography>
                                        <Typography>-${(line.deviceDiscount / 24).toFixed(2)}</Typography>
                                        </Box>}
                                    <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                        <Typography>{line.dataPlan}</Typography>
                                        <Typography>${line.cost.toFixed(2)}</Typography>
                                    </Box>
                                    <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                        {line.lineDiscount !== 0 && <><Typography>{line.lineDiscountDesc || 'discount'}</Typography><Typography>-${lineDiscount}</Typography></>}
                                    </Box>
                                    <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                        <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
                                        <Typography sx={{ fontWeight: "bold" }}>${totalLineCost.toFixed(2)}</Typography>
                                    </Box>
                                </Paper>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Paper>
                <Typography variant='h4'>${totalMobileCost.toFixed(2)}</Typography>
            </Paper>
        </Box>
    )
}
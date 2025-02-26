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

    return (
        <Box>
            <List sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center" }}>
                {lines.map((line) => {
                    let lineDiscount = Number(line.lineDiscount);
                    if (lineDiscount !== 0) {
                        lineDiscount = lineDiscount.toFixed(2)
                    }
                    let deviceDiscount = Number(line.deviceDiscount);
                    if (deviceDiscount !== 0) {
                        deviceDiscount = deviceDiscount.toFixed(2)
                    }
                    return (
                        <ListItem sx={{ width: "100%" }}>
                            <Paper sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center", width: "90%" }}>
                                <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                    <Typography>Name: {line.name || '________'}</Typography>
                                    <Typography>{line.isBYOD ? 'BYOD' : 'New Device'}</Typography>
                                </Box>
                                <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                    <Typography>{line.dataPlan}</Typography>
                                    <Typography>${line.cost.toFixed(2)}</Typography>
                                </Box>
                                <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                    {line.lineDiscount !== 0 && <><Typography>{line.lineDiscountDesc || 'discount'}</Typography><Typography>-${lineDiscount}</Typography></>}
                                </Box>
                                <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
                                    <Typography sx={{fontWeight:"bold"}}>Total</Typography> 
                                    <Typography sx={{fontWeight:"bold"}}>${(line.cost - line.lineDiscount).toFixed(2)}</Typography>
                                </Box>
                            </Paper>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}
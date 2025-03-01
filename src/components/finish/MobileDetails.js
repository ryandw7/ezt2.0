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
    const parsePhoneNumber = (number) => {
        return '(' + number.slice(0,3) + ') ' + number.slice(3,6) + '-' + number.slice(6,10)
    }
    const RowGroup = ({ children, sx = {}}) => {
       return ( <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", margin: "5px auto", ...sx }}>
            {children}
        </Box>)
    }
    let totalMobileCost = 0;
    return (
        <Box sx={{ width: "100%" }}>
            <List sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center" }}>
                {
                    lines.map((line) => {
                        let tax = 1.80
                        let totalLineCost = line.cost - line.lineDiscount;
                        let deviceMonthly = (line.deviceTotalCost - line.deviceDiscount) / 24;
                        totalLineCost += deviceMonthly;
                        totalLineCost += tax;
                        totalMobileCost += totalLineCost
                        return (
                            <ListItem sx={{ width: "100%" }}>
                                <Paper sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center", width: "90%" }}>
                                    <RowGroup>{/*NAME | PHONE NUMBER | BYOD/NEW */}
                                        <Typography variant="h5">Name: {line.name || '______________________'}</Typography>
                                        {!line.newNumber && <Typography variant="h5">{line.phoneNumber ? parsePhoneNumber(line.phoneNumber) : 'Phone Number: __________________'}</Typography>}
                                        <Typography variant="h5">{line.isBYOD ? 'BYOD' : 'New Device'}</Typography>
                                    </RowGroup>{/*IMEI*/}
                                    {line.isBYOD && <RowGroup>
                                        <Typography>IMEI: {line.imei ? line.imei : '________________________________'}</Typography>
                                    </RowGroup>}

                                    {!line.isBYOD && <RowGroup>
                                        <Typography>{line.deviceModel}</Typography>
                                        <Typography>{line.deviceTotalCost.toFixed(2)}</Typography>
                                        <Typography>${(line.deviceTotalCost / 24).toFixed(2)}</Typography>
                                    </RowGroup>}
                                    {line.deviceDiscount !== 0 && <RowGroup>
                                        <Typography>{line.deviceDiscountDesc}</Typography>
                                        <Typography>-${line.deviceDiscount.toFixed(2)}</Typography>
                                        <Typography>-${(line.deviceDiscount / 24).toFixed(2)}</Typography>
                                    </RowGroup>}
                                    <RowGroup>
                                        <Typography>{line.dataPlan}</Typography>
                                        <Typography>${line.cost.toFixed(2)}</Typography>
                                    </RowGroup>
                                    {line.lineDiscount !== 0 &&<RowGroup>
                                         <Typography>{line.lineDiscountDesc || 'discount'}</Typography><Typography>-${line.lineDiscount}</Typography>
                                    </RowGroup>}
                                    <RowGroup sx={{borderBottom: '3px solid white'}}>
                                        <Typography>Tax</Typography>
                                        <Typography>${tax.toFixed(2)}</Typography>
                                    </RowGroup>
                                    <RowGroup>
                                        <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
                                        <Typography sx={{ fontWeight: "bold" }}>${totalLineCost.toFixed(2)}</Typography>
                                    </RowGroup>
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
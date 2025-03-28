import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
export default function MobileLineView({ line, lineCost, config, handleStartEdit, handleDelete }) {

    const { isFull, isForm, isEdit } = config;

    const { dataPlan } = line;

    const parsePhoneNumber = (number) => {

        return '(' + number.slice(0, 3) + ') ' + number.slice(3, 6) + '-' + number.slice(6, 10)

    }
    const RowGroup = ({ children, sx = {} }) => {
        return (
            <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", margin: "5px auto", ...sx }}>
                {children}
            </Box>
        )
    }

    const handleEditBorder = () => isEdit ? '3px solid purple' : 'none';

    let totalLineCost = lineCost - line.lineDiscount;
    let tax = 1.8;
    let deviceMonthly = (line.deviceTotalCost - line.deviceDiscount) / 24;
    totalLineCost += deviceMonthly;
    totalLineCost += tax;

    return (
        <Paper elevation={4} sx={{ display: "flex", flexDirection: "column", position: "relative", justifyContent: "space-around", alignContent: "center", minWidth: "300px", m: "5px", p: 5, border: handleEditBorder() }}>
            {isForm ? <>
                <Button onClick={handleDelete} sx={{ position: "absolute", top: '5px', left: "45px" , p: 0, m: 0, height: "fit-content", width: "50px"}}><DeleteIcon/></Button>
                <Button onClick={handleStartEdit} sx={{ position: "absolute", top: '5px', right: "45px", p: 0, m: 0, height: "fit-content", width: "50px" }}><EditOutlinedIcon sx={{margin: "auto"}}/></Button>

            </> : null}
            {isFull && <><RowGroup>
                <Typography variant="h5">Name: {line.name || '______________________'}</Typography>
                {!line.newNumber && <Typography variant="h5">{line.phoneNumber ? parsePhoneNumber(line.phoneNumber) : 'Phone Number: __________________'}</Typography>}
                <Typography variant="h5">{line.isBYOD ? 'BYOD' : 'New Device'}</Typography>
            </RowGroup>

                {line.isBYOD && <RowGroup>
                    <Typography>IMEI: {line.imei ? line.imei : '________________________________'}</Typography>
                </RowGroup>}</>}

            {!line.isBYOD && <RowGroup>
                <Typography sx={{ width: '100px' }}>{line.deviceModel}</Typography>
                <Typography sx={{ width: '100px', textAlign: 'right' }}>${line.deviceTotalCost.toFixed(2)}</Typography>
                <Typography sx={{ width: '100px', textAlign: 'right' }}>${(line.deviceTotalCost / 24).toFixed(2)}</Typography>
            </RowGroup>}
            {line.deviceDiscount !== 0 && <RowGroup>
                <Typography sx={{ width: '100px' }}>{line.deviceDiscountDesc}</Typography>
                <Typography sx={{ width: '100px', textAlign: 'right' }}>-${line.deviceDiscount.toFixed(2)}</Typography>
                <Typography sx={{ width: '100px', textAlign: 'right' }}>-${(line.deviceDiscount / 24).toFixed(2)}</Typography>
            </RowGroup>}
            <RowGroup>
                <Typography>{line.dataPlan}</Typography>
                <Typography>${lineCost.toFixed(2)}</Typography>
            </RowGroup>
            {line.lineDiscount !== 0 && <RowGroup>
                <Typography>{line.lineDiscountDesc || 'discount'}</Typography><Typography>-${line.lineDiscount.toFixed(2)}</Typography>
            </RowGroup>}
            <RowGroup>
                <Typography>Tax</Typography>
                <Typography>${tax.toFixed(2)}</Typography>
            </RowGroup>
            <RowGroup>
                <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
                <Typography sx={{ fontWeight: "bold" }}>${totalLineCost.toFixed(2)}</Typography>
            </RowGroup>
        </Paper>

    )
}


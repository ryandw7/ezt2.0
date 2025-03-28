import React from 'react';

import { Box, Typography, TextField, Button, Paper, Switch, FormControlLabel, Select, MenuItem, InputLabel } from '@mui/material';

export default function NewMobileLine({ line, handleUpdate, lineCost }) {

    const { name, isEdit, id, xmc, phoneNumber, isBYOD, port, deviceModel, payInFull, deviceTotalCost, deviceDiscount, deviceDiscountDesc, lineDiscount, lineDiscountDesc, dataPlan } = line;
    console.log(handleUpdate)
    const handleChange = (e) => {
        console.log('handling change')
        const key = e.target.id || e.target.name;
        let value = e.target.value;
        if (key === 'isBYOD') {
            handleUpdate?.('isBYOD', !isBYOD);
        } else {
            //  if (key === 'deviceTotalCost' || key === 'deviceDiscount' || key === 'lineDiscount') {
            if ((['deviceTotalCost', 'deviceDiscount', 'lineDiscount']).includes(key)) {
                if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
                    if (value === "") {
                        value = 0
                    }
                    handleUpdate(key, Number(value));
                }
            } else {
                handleUpdate(key, value);
            }
        }
    };

    const handleStopEdit = () => {
        handleUpdate('isEdit', false);
    };

    const handleStartEdit = () => {
        handleUpdate('isEdit', true)
    }
    const handleToggle = (e) => {
        const key = e.target.id;
        handleUpdate(key, !line[key]);
    };

    return (


        <Paper elevation={3} gap={2} sx={{ justifyContent: "center", display: "flex", flexDirection: "column", minWidth: "600px", maxHeight: "70vh", overflowY: "auto", p: 3, }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", m: "5px" }}>
                {/*NAME | BYOD*/}
                <TextField id="name" label="Name" variant='outlined' value={name} onChange={handleChange} sx={{ width: "50%" }} />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                    <InputLabel sx={{ textAlign: "center" }}>BYOD</InputLabel>
                    <FormControlLabel labelPlacement="top" control={<Switch checked={isBYOD} id="isBYOD" onChange={handleToggle} />} sx={{ m: 0, p: 0 }} />
                </Box>
                <Box>
                        <InputLabel sx={{ textAlign: "center", margin: "0 auto" }}>XMC</InputLabel>
                        <FormControlLabel sx={{width:"fit-content", margin:"5px auto"}}control={<Select name="xmc" labelId="xmc" id="xmc" value={xmc} onChange={handleChange} sx={{ height: '25px', margin:"0 auto", padding: 0}}>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={17}>17</MenuItem>
                            <MenuItem value={19}>19</MenuItem>
                        </Select>} />
                    </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                    <InputLabel sx={{ textAlign: "center" }}>Port</InputLabel>
                    <FormControlLabel labelPlacement="top" control={<Switch checked={port} id="port" onChange={handleToggle} />} sx={{ m: 0, p: 0 }} />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", m: "5px" }}>
                {/*PHONE NUMBER | */}
                <TextField id="phoneNumber" label="Phone Number" variant='outlined' value={phoneNumber !== 0 ? phoneNumber : ''} onChange={handleChange} sx={{ width: "70%" }} />
                {dataPlan !== "Tablet" ? <>
                    <Box>
                        <InputLabel sx={{ textAlign: "center" }}>Data Plan</InputLabel>
                        <FormControlLabel control={<Select name="dataPlan" labelId="dataPlan" id="dataPlan" value={dataPlan} onChange={handleChange} sx={{ height: '25px' }}>
                            <MenuItem value="Unlimited">Unlimited</MenuItem>
                            <MenuItem value="Unlimited Plus">Unlimited Plus</MenuItem>
                            <MenuItem value="By the Gig">By the Gig</MenuItem>
                        </Select>} />
                    </Box>
                </> : null}
            </Box>
            {!isBYOD && (
                <>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", m: "5px" }}>
                        <TextField id="deviceModel" label="Device Model" variant='outlined' value={deviceModel} onChange={handleChange} sx={{}} />
                        <FormControlLabel labelPlacement="top" control={<Switch checked={payInFull} id="payInFull" onChange={handleToggle} />} label="Pay in Full" />
                        <TextField id="deviceTotalCost" label="Total Cost" variant='outlined' value={deviceTotalCost !== 0 ? deviceTotalCost : ''} onChange={handleChange} sx={{ width: "100px" }} />


                    </Box>
                    {!payInFull && (
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", m: "5px" }}>
                            <TextField id="deviceDiscountDesc" label="Device Discount Description" variant='outlined' value={deviceDiscountDesc} onChange={handleChange} sx={{ width: '70%' }} />
                            <TextField id="deviceDiscount" label="Discount Amount" variant='outlined' value={deviceDiscount !== 0 ? deviceDiscount : ''} onChange={handleChange} sx={{ width: "25%" }} />
                        </Box>
                    )}
                </>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", m: "5px" }}>
                <TextField id="lineDiscountDesc" label="Line Discount" variant='outlined' value={lineDiscountDesc} onChange={handleChange} sx={{ width: '70%' }} />
                <TextField id="lineDiscount" label="Discount Amount" variant='outlined' value={lineDiscount !== 0 ? lineDiscount : ''} onChange={handleChange} sx={{ width: '25%' }} />
            </Box>
            <Button variant="contained" onClick={handleStopEdit} sx={{ mt: 2 }}>Done</Button>
        </Paper>


    );
}

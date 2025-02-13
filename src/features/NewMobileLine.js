import React from 'react';
import { Box, Typography, TextField, Button, Paper, Switch, FormControlLabel, Select, MenuItem, InputLabel } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';

export default function NewMobileLine({ line }) {

    const { updateNewMobileLine, setIsEdit, dataPlan } = useNewMobileActions();

    const { name, isEdit, id, number, isBYOD, port, deviceModel, payInFull, deviceTotalCost, deviceDiscount, deviceDiscountDesc, lineDiscount } = line;

    const handleChange = (e) => {

        const key = e.target.id || e.target.name
        let value = e.target.value
        console.log(e.target)
        switch (key) {
            case 'isBYOD': {
                if (isBYOD) {
                    updateNewMobileLine(id, 'isBYOD', false)
                } else {
                    updateNewMobileLine(id, 'isBYOD', true)
                }
            }
            default: {
                updateNewMobileLine(id, key, value)
            }
        }


    }

    const toggleEdit = () => {
        if (isEdit) {
            updateNewMobileLine(id, 'isEdit', false)
        } else {
            setIsEdit(id)
        }
    }

    const handleToggle = (e) => {
        const key = e.target.id;
        if (line[key]) {
            updateNewMobileLine(id, key, false)
        } else {
            updateNewMobileLine(id, key, true)
        }

    }
    return (
        <>
            {isEdit ?
                <Box sx={{height: "70vh"}}>
                    <Paper elevation={3} sx={{ width: "30%", height: "100%", overflowY: "auto", p: 2 }}>
                        <Box>
                            <TextField id="name" label="Name" variant='outlined' value={name} onChange={handleChange} />
                            <FormControlLabel control={<Switch checked={isBYOD} id="isBYOD" onChange={handleToggle} />} label="BYOD" />
                        </Box>
                        <Box>
                            <TextField id="number" label="Phone Number" variant='outlined' value={number} onChange={handleChange} />
                            <FormControlLabel control={<Switch checked={port} id="port" onChange={handleToggle} />} label="Port Number" />
                            <InputLabel id="dataPlan">Data Plan</InputLabel>
                            <Select name="dataPlan" labelId="dataPlan" id="dataPlan" value={dataPlan} label="Data Plan" onChange={handleChange}>
                                <MenuItem id="dataPlan" value="unlimited">Unlimited</MenuItem>
                                <MenuItem id="dataPlan" value="unlimitedPlus">Unlimited Plus</MenuItem>
                                <MenuItem id="dataPlan" value="btg">By the Gig</MenuItem>
                            </Select>
                        </Box>
                        {!isBYOD &&
                            <Box>
                                <TextField id="deviceModel" label="Device Model" variant='outlined' value={deviceModel} onChange={handleChange} />
                                <TextField id="deviceTotalCost" label="Total Cost" variant='outlined' value={deviceTotalCost} onChange={handleChange} />
                                <FormControlLabel control={<Switch checked={payInFull} id="payInFull" onChange={handleToggle} />} label="Pay in Full" />
                                {!payInFull && <Box>
                                    <TextField id="deviceDiscountDesc" label="Device Discount" variant='outlined' value={deviceDiscountDesc} onChange={handleChange} />
                                    <TextField id="deviceDiscount" label="Discount Amount" variant='outlined' value={deviceDiscount} onChange={handleChange} />
                                </Box>
                                }
                            </Box>
                        }
                        <Box>
                            <TextField id="lineDiscount" label="lineDiscount" variant='outlined' value={lineDiscount} onChange={handleChange} />
                        </Box>
                        <Button onClick={toggleEdit}>done</Button>
                    </Paper>
                </Box>
                :
                <Box>
                    <Typography>Name: {name}</Typography>
                    <Button onClick={toggleEdit}>edit</Button>
                </Box>
            }
        </>
    )
}
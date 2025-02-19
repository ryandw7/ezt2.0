import React, {useEffect} from 'react';
import { Box, Typography, TextField, Button, Paper, Switch, FormControlLabel, Select, MenuItem, InputLabel } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';

export default function NewMobileLine({ line }) {
    const { updateNewMobileLine, setIsEdit, updatePricing } = useNewMobileActions();
    const { name, isEdit, id, number, isBYOD, port, deviceModel, payInFull, deviceTotalCost, deviceDiscount, deviceDiscountDesc, lineDiscount,dataPlan, cost } = line;

    const handleChange = (e) => {
        const key = e.target.id || e.target.name;
        let value = e.target.value;
        if (key === 'isBYOD') {
            updateNewMobileLine(id, 'isBYOD', !isBYOD);
        } else {
            updateNewMobileLine(id, key, value);
        }
    };

    const stopEdit = () => {
        updateNewMobileLine(id, 'isEdit', false);
        updatePricing()
    };

    const handleToggle = (e) => {
        const key = e.target.id;
        updateNewMobileLine(id, key, !line[key]);
    };

    useEffect(()=>{
        updatePricing()
    }, [])
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", p: 2 }}>
            {isEdit ? (
                <Paper elevation={3} sx={{ width: "60%", maxHeight: "70vh", overflowY: "auto", p: 3 }}>
                    <Box>
                        <TextField fullWidth id="name" label="Name" variant='outlined' value={name} onChange={handleChange} sx={{ mb: 2 }} />
                        <FormControlLabel control={<Switch checked={isBYOD} id="isBYOD" onChange={handleToggle} />} label="BYOD" />
                    </Box>
                    <Box>
                        <TextField fullWidth id="number" label="Phone Number" variant='outlined' value={number} onChange={handleChange} sx={{ mb: 2 }} />
                        <FormControlLabel control={<Switch checked={port} id="port" onChange={handleToggle} />} label="Port Number" />
                        <InputLabel id="dataPlan">Data Plan</InputLabel>
                        <Select fullWidth name="dataPlan" labelId="dataPlan" id="dataPlan" value={dataPlan} label="Data Plan" onChange={handleChange}>
                            <MenuItem value="Unlimited">Unlimited</MenuItem>
                            <MenuItem value="Unlimited Plus">Unlimited Plus</MenuItem>
                            <MenuItem value="By the Gig">By the Gig</MenuItem>
                        </Select>
                    </Box>
                    {!isBYOD && (
                        <Box>
                            <TextField fullWidth id="deviceModel" label="Device Model" variant='outlined' value={deviceModel} onChange={handleChange} sx={{ mb: 2 }} />
                            <TextField fullWidth id="deviceTotalCost" label="Total Cost" variant='outlined' value={deviceTotalCost} onChange={handleChange} sx={{ mb: 2 }} />
                            <FormControlLabel control={<Switch checked={payInFull} id="payInFull" onChange={handleToggle} />} label="Pay in Full" />
                            {!payInFull && (
                                <Box>
                                    <TextField fullWidth id="deviceDiscountDesc" label="Device Discount" variant='outlined' value={deviceDiscountDesc} onChange={handleChange} sx={{ mb: 2 }} />
                                    <TextField fullWidth id="deviceDiscount" label="Discount Amount" variant='outlined' value={deviceDiscount} onChange={handleChange} sx={{ mb: 2 }} />
                                </Box>
                            )}
                        </Box>
                    )}
                    <Box>
                        <TextField fullWidth id="lineDiscount" label="Line Discount" variant='outlined' value={lineDiscount} onChange={handleChange} sx={{ mb: 2 }} />
                    </Box>
                    <Button variant="contained" onClick={stopEdit} sx={{ mt: 2 }}>Done</Button>
                </Paper>
            ) : (
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", p: 2, borderBottom: "1px solid #ddd" }}>
                    <Typography variant="body1">{dataPlan}</Typography>
                    
                    <Typography variant="body1" sx={{ marginLeft: "auto", p:"5px" }}>${cost.toFixed(2)}</Typography>
                  
                    
                    <Button variant="outlined" onClick={()=>setIsEdit(id)}>Edit</Button>
                </Box>
            )}
        </Box>
    );
}

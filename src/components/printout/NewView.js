import React from 'react';
import {Paper, Typography, Box} from '@mui/material';
const NewView = ({ newCore, mobileCost }) => {

    const { taxes, unlimitedLines, unlimitedPlus, watches, tablets, deviceMonthly, lineQuantity, mobileTotal, lineDiscounts} = mobileCost;

    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5" }} className="new-view">
            <Typography variant='h2' sx={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px" }}>New Services</Typography>
            <Box>
                <Typography>{lineQuantity} Unlimited Lines: {unlimitedLines.cost}</Typography>
            </Box>
        </Paper>
    )
};

export default NewView;


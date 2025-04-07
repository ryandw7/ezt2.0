import React from 'react';
import { Box, Typography } from '@mui/material';

const SavingsView = ({className, data}) => {
    
    const { savings } = data;

    return (
        <Box className="savings" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h3">Save ${savings.toFixed(2)} a month!</Typography>
        </Box>
    )
};

export default SavingsView;
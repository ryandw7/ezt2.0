import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function MobileLineView({ line, handleStartEdit, lineCost }) {
 const { dataPlan } = line;
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", p: 2, borderBottom: "1px solid #ddd" }}>
            <Typography variant="body1">{dataPlan}</Typography>
            <Typography variant="body1" sx={{ marginLeft: "auto", p: "5px" }}>${lineCost.toFixed(2)}</Typography>
            <Button variant="outlined" onClick={handleStartEdit}>Edit</Button>
        </Box>
    )
}


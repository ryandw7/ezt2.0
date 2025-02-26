import { Box, Typography } from '@mui/material';
import React from 'react';
import useCurrentSelectors from '../../context/selectors/useCurrentSelectors';

export default function CurrentDetails({ width, height }) {
    const { currentInternet, currentInternetCost, currentTv, currentTvCost, currentMobile, currentMobileCost, currentNotes } = useCurrentSelectors();
    console.log(currentInternetCost)
    const total = currentInternetCost + currentTvCost + currentMobileCost

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "space-around" }}>
            <Typography variant='h3'>Current Services</Typography>
            {currentInternetCost !== 0 && <Box sx={{ width: "80%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                <Typography variant='body1'>{currentInternet}</Typography>
                <Typography variant='body1'>${currentInternetCost.toFixed(2)}</Typography>
            </Box>}
            {currentTvCost !== 0 && <Box sx={{ width: "80%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                <Typography variant='body1'>{currentTv}</Typography>
                <Typography variant='body1'>${Number(currentTvCost).toFixed(2)}</Typography>
            </Box>}
            {currentMobileCost !== 0 &&
                <Box sx={{ width: "80%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant='body1'>{currentMobile}</Typography>
                    <Typography variant='body1'>${Number(currentMobileCost).toFixed(2)}</Typography>
                </Box>}
            <Box>
                <Typography>Total: ${total}</Typography>
            </Box>
        </Box>
    )
}
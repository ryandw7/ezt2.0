import React from 'react';
import { Box, Typography } from '@mui/material';
import CurrentForm from '../features/CurrentForm';
import useAppContext from '../context/context';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors';

export default function Previous() {
    const { currentInternet } = useCurrentSelectors();

    const { state } = useAppContext();
    console.log(state)
    console.log(currentInternet)
    return (
        <Box>
            <Typography variant='h2'>Current Services</Typography>
            <CurrentForm/>
        </Box>
    )
}
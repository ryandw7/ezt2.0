import React from 'react';
import {Box, Typography} from '@mui/material';
import NewMobileLines from '../features/NewMobileLines';
export default function NewMobile() {

    return (
        <Box>
            <Typography variant='h2'>New Mobile</Typography>
            <NewMobileLines/>
        </Box>
    )
}
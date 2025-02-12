import React from 'react';
import { Box, Typography } from '@mui/material';
import useAppContext from '../context/context';
import NewCoreForm from '../features/NewCoreForm';
export default function NewCore() {
    const { state } = useAppContext();
    console.log(state)
    return (
        <Box>
            <Typography variant='h2'>New Core</Typography>
            <NewCoreForm />
        </Box>
    )
}
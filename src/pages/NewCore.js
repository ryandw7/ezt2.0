import React from 'react';
import { Box, Typography } from '@mui/material';
import useAppContext from '../context/context';
import NewCoreForm from '../features/NewCoreForm';
export default function NewCore() {
    const { state } = useAppContext();
    console.log(state)
    return (
        <Box>
            <NewCoreForm />
        </Box>
    )
}
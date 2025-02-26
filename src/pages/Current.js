import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CurrentForm from '../features/CurrentForm';
import useAppContext from '../context/context';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors';
import { useNavigate } from 'react-router-dom';
export default function Current({next}) {
    const navigate = useNavigate()
    const { currentInternet } = useCurrentSelectors();

    const { state } = useAppContext();
    console.log(state)
    console.log(currentInternet)

    const handleNext = () => {
        navigate(next)
    }
    return (
        <Box>
            <Typography variant='h2'>Current Services</Typography>
            <CurrentForm/>
        </Box>
    )
}
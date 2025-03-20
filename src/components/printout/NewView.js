import React from 'react';
import {Paper, Typography} from '@mui/material';
const NewView = ({ newCore, newMobileLines }) => {


    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5" }} className="new-view">
            <Typography variant='h2' sx={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px" }}>New Services</Typography>
        </Paper>
    )
};

export default NewView;


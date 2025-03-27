import React from 'react';
import { Paper, Box, Typography} from "@mui/material"
const AdditionalView = ({additional}) => {

    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor:"#F5F5F5", position:"relative"}} className="additional-view">
            <Typography variant='h2' sx={{width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p:"10px", boxSizing:"border-box", height: "60px"}}>Additional</Typography>
            <Box sx={{display: "flex", flexDirection:"column", justifyContent:"space-between"}}>
            <Box></Box>
            <Typography className='disclaimer'>DISCLAIMER: This is not a legal confirmation, and all offers are finalized at point of sale.</Typography>
            </Box>
        </Paper>
    )
};

export default AdditionalView;
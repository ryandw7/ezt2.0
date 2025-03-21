import React from 'react'
import { Box, Typography, Paper } from "@mui/material"
const CurrentView = ({ currentServices }) => {
    const { internet, internetCost, tv, tvCost, mobile, mobileCost, notes } = currentServices;
    return (
        <Paper elevation={3} sx={{ p: "0px", width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5", border: "3px solid black" }} className="current-view">
            <Typography variant='h2' sx={{ height:"60px",width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px"}}>Current Services</Typography>
            <Box sx={{display: "flex", flexDirection:"column", alignItems: "space-around", justifyContent:"space-around",width:"100%", height:"calc(100% - 60px)"}}>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h3">Internet: ${internetCost.toFixed(2)}</Typography>
                    <Typography>{internet}</Typography>
                </Box>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h3">TV & Extras: ${tvCost.toFixed(2)}</Typography>
                    <Typography>{internet}</Typography>
                </Box>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h3">Mobile Service: ${mobileCost.toFixed(2)}</Typography>
                    <Typography>{internet}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default CurrentView;
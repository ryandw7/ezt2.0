import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const PrintBox = ({ children, header = {}, boxSx = {}, className={}, isPrintView }) => {
   
    return (
        <Box sx={{ width: "100%", height: "100%", backgroundColor:"#F5F5F5", borderRadius:"22px" }} className={className}>
            <Typography variant="h2" sx={{ color: "white", borderTopLeftRadius: "22px", borderTopRightRadius: "22px", margin: 0, width: "100%", height: "60px" }}>{header}</Typography>
            <Box sx={{ width: "100%", height: `calc(100% - 60px)`, padding: "5px", display: "flex", flexDirection: "column", justifyContent: "flex-start", ...boxSx }}>
                {children}
            </Box>
        </Box>
    )
};

export default PrintBox;


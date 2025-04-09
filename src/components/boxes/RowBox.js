import React from 'react';
import { Box } from "@mui/material"
const RowBox = ({ children, sx = {} }) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            textWrap: "no-wrap",
            justifyContent: "space-between",
            width: "100%",
            p: "1% 2% 1% 2%",
            ...sx
        }}>
            {children}
        </Box>
    )
};

export default RowBox;
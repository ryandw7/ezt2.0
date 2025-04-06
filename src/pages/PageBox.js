import React from 'react';
import { Box } from '@mui/material';

const PageBox = ({ children }) => {

    return (
        <Box sx={{ position: "fixed", margin: "0 auto", width: `100vw`, height: `calc(100vh - 100px)`, overflow: "-moz-hidden-unscrollable", boxSizing: "border-box", display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>
            {children}
        </Box>
    )

};

export default PageBox;
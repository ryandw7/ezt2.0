import React from 'react';
import { Box, Typography } from '@mui/material';

const PageBox = ({ children, header={} }) => {

    return (
        <Box sx={{height: `calc(100vh - 100px)`, maxHeight:`calc(100vh - 100px)`, width:"100vw", overflow:"hidden"}}>
            <Box sx={{height:"50px", width:"100%", p:"0", backgroundColor:"#673AB7"}}>
            <Typography sx={{color:"white", fontSize:"2em", marginLeft:"5%"}}>{header}</Typography>
            </Box>
            <Box sx={{margin: 0, padding: 0, height: `calc(100vh - 150px)`, maxHeight:`calc(100vh - 150px)`, minHeight:`calc(100vh - 150px)`, display:"flex", flexDirection:"column", width:"100vw", justifyContent:"center", alignItems:"center"}}>{children}</Box>
        </Box>
    )

};

export default PageBox;
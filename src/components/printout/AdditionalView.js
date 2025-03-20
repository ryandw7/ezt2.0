import React from 'react';
import { Paper, Typography} from "@mui/material"
const AdditionalView = ({additional}) => {

    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor:"#F5F5F5"}} className="additional-view">
            <Typography variant='h2' sx={{width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p:"10px"}}>Additional</Typography>
        </Paper>
    )
};

export default AdditionalView;
import React from 'react';
import { Paper, Box, Typography } from "@mui/material"
const AdditionalView = ({ additional }) => {

    const { rep, contact, additionalNotes } = additional;
    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5", position: "relative" }} className="additional-view">
            <Typography variant='h2' sx={{ width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px", boxSizing: "border-box", height: "60px" }}>Additional</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height:`calc(100% - 60px)`  }}>
                {(rep || contact) ? <><Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", height: "50px", margin: "20px" }}>
                    {rep ? <>
                        <Typography>Representative: {rep}</Typography>
                    </> : null}
                    {contact ? <>
                        <Typography>{contact}</Typography>
                    </> : null}
                </Box>
                </> : null}
                <Box>
                    <Typography sx={{ width: "100%", textAlign: "center", height: "fit-content" }}>{additionalNotes}</Typography>
                </Box>
            </Box>

        </Paper>
    )
};

export default AdditionalView;
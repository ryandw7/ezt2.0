import React from 'react';
import { Paper, Box, Typography } from "@mui/material"
const AdditionalView = ({ additional }) => {

    const { rep, contact, additionalNotes } = additional;
    
    return (
        <Paper elevation={3} sx={{ p: "0px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5"}} className="additional-view">
            <Typography variant='h2' sx={{ width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px", boxSizing: "border-box", height: "60px" }}>Additional</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", minHeight: "66mm", m: 0, p: 0, position: "relative", top: "0px" }}>
                {(rep || contact) ? <>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "20px" }}>
                        {rep ? <>
                        <Box sx={{ m: "20px", justifySelf:"flex-start" }}>
                            <Typography variant="h3" >{rep}</Typography>
                            </Box>
                        </> : null}
                        {contact ? <>
                        <Box>
                            <Typography variant="h3" sx={{ m: "20px" }}>{contact}</Typography>
                            </Box>
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
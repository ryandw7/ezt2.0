import React from 'react';
import { Box, TextField, Paper } from '@mui/material';

const AdditionalForm = ({ handleChange, formData }) => {

    const { rep, contact, additionalNotes } = formData;
    console.log(contact)
    return (
        <Paper sx={{ height: '80vh', margin: "30px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems:"center", minWidth:"500px" }}>
            <Box>
                <TextField id="rep" value={rep} onChange={handleChange} label="Representative Name" fullWidth sx={{margin:"20px auto"}}/>
            </Box>
            <Box>
                <TextField id="contact" value={contact} onChange={handleChange} label="Contact Info" fullWidth sx={{margin:"20px auto"}}/>
            </Box>
            <Box sx={{ width: "100%" }}>
                <TextField
                    multiline
                    rows={6}
                    fullWidth
                    sx={{ margin: "0 auto" }}
                    id="additionalNotes"
                    value={additionalNotes}
                    onChange={handleChange}
                    label="Additional Notes" />
            </Box>
        </Paper>
    )
}

export default AdditionalForm;
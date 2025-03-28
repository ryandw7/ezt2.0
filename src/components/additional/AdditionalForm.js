import React from 'react';
import { Box, TextField, Paper } from '@mui/material';

const AdditionalForm = ({ handleChange, formData }) => {

    const { rep, contact, additionalNotes } = formData;
    console.log(contact)
    return (
        <Paper sx={{ height: '80vh', margin: "20px auto", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems:"center", width:"40vw" }}>
            <Box>
                <TextField id="rep" value={rep} onChange={handleChange} label="Representative Name" />
            </Box>
            <Box>
                <TextField id="contact" value={contact} onChange={handleChange} label="Contact Info" />
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
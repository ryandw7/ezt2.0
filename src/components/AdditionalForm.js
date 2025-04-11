import React from 'react';
import { Box, TextField, Paper } from '@mui/material';

const AdditionalForm = ({ handleChange, formData }) => {

    const { rep, contact, additionalNotes } = formData;

    return (
        <Paper sx={{ height: '80%', minHeight: "300px", margin: "30px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", minWidth: "500px", width: "70%", maxWidth: "800px" }}>

            <TextField id="rep" value={rep} onChange={handleChange} label="Representative Name"  sx={{ margin: "20px auto", width:"60%" }} />

            <TextField id="contact" value={contact} onChange={handleChange} label="Contact Info" sx={{ margin: "20px auto", width:"60%" }} />

            <Box sx={{ width: "100%" }}>
                <TextField
                    multiline
                    rows={3}
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
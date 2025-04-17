import React from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const PackageForm2 = ({ handleChange, handleAddItem, handleDeleteItem, items }) => {

    return (
        <Box sx={{ height: "100%", width: "70%", margin:"5px", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center", scrollbarGutter: "stable" }}>
            {items.length > 0 ? items.map((item, index) =>
                <Box sx={{ display: "flex", width: "100%" }}>
                    <Paper sx={{ margin: "5px auto", width: "90%" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <TextField sx={{ width: "70%", margin: "5px" }} name="description" variant="outlined" label="Item Description" value={item.description} onChange={handleChange(item.id)} />
                            <TextField sx={{ width: "20%", margin: "5px" }} name="cost" variant="outlined" label="Cost" value={item.cost !== 0 ? item.cost : ''} onChange={handleChange(item.id)} />
                        </Box>
                        <TextField fullWidth minRows={3} name="additionalNotes" variant="outlined" label="Additional Notes" value={item.additionalNotes} onChange={handleChange(item.id)} />
                    </Paper>
                    <Button sx={{ width: "50px" }} onClick={() => handleDeleteItem(item.id)}><DeleteIcon /></Button>
                </Box>)
                : <Typography>Add an item to make changes</Typography>}
            <Button variant="outlined" onClick={handleAddItem} sx={{ width: "100px" }}>Add</Button>
        </Box>
    )
}

export default PackageForm2;
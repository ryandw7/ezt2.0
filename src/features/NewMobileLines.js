import React, { useEffect } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import NewMobileLine from './NewMobileLine';

export default function NewMobileLines() {
    const { newMobileLines } = useNewMobileSelectors();
    console.log(newMobileLines)
    const { addMobileLine, updatePricing, quickAddMobileLine } = useNewMobileActions();

    const handleAdd = () => {
        addMobileLine();
    };

    const handleQuickAdd = () => {
        quickAddMobileLine();
    }

    // Get the line that is currently being edited
    const editingLine = newMobileLines.find(line => line.isEdit) || null;

    const handleResize = () => {
        if (editingLine) {
            return "30%"
        } else {
            return "70%"
        }

    }
    useEffect(() => {
        updatePricing();
    }, [])
    return (
        <Box sx={{ height: "80vh", width: "80vw", display: "flex", flexDirection: "row", gap: 2, alignItems: "center", justifyContent: "space-around", flexWrap:"nowrap", m:"0"}}>
            {/* Scrollable List of Non-Edit Lines */}
            <Box sx={{ width: () => handleResize(), height: "80%", p: 2, transition: 'width 0.3s ease-in-out' }}>
            <Paper elevation={3} sx={{height:"100%", width:"100%", overflowY:"auto"}}>
                <Typography variant="h6" sx={{ mb: 1 }}>Lines</Typography>
                {newMobileLines
                    .filter(line => !line.isEdit) // Exclude the currently edited line
                    .map((item) => (
                        <NewMobileLine key={item.id} line={item} />
                    ))
                }
                
            </Paper>
            <Box sx={{m:"0", justifySelf: "flex-end", alignSelf: "flex-end", height: "15%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", position:"relative" }}>
                    <Button variant="contained" onClick={handleAdd} sx={{ mt: 2 }}>Add Line</Button>
                    <Button variant="contained" onClick={handleAdd} sx={{ mt: 2 }}>Quick Add</Button>
                </Box>
            </Box>
            {/* Main Editing Section */}

            {editingLine && (
                <Box sx={{ width: "60%", height: "80%", p: 2 }}>
                    <NewMobileLine key={editingLine.id} line={editingLine} isEditing={true} />
                </Box>
            )}

        </Box>
    );
}
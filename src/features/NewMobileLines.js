import React, { useEffect } from 'react';
import { Box, Button, Typography, Paper, List } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import NewMobileLine from '../components/mobile/MobileLineForm';
import MobileLineView from '../components/mobile/MobileLineView';

export default function NewMobileLines() {

    const { newMobileLines, getNewMobileLineCost } = useNewMobileSelectors();

    const { addMobileLine, quickAddMobileLine, updateNewMobileLine } = useNewMobileActions();

    const handleAdd = () => {
        addMobileLine();
    };

    const handleQuickAdd = () => {
        quickAddMobileLine();
    }

    const handleUpdate = (id) => (key, value) => {
        updateNewMobileLine(id, key, value)
    }

    const handleStartEdit = (id) => {
        updateNewMobileLine(id, 'isEdit', true)
    }

    const handleStopEdit = (id) => {
        updateNewMobileLine(id, 'isEdit', false)
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

    return (
        <Box sx={{ height: "80vh", width: "100vw", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "nowrap", m: "0 a" }}>
            {/* Scrollable List of Non-Edit Lines */}
            <Box sx={{ width: () => handleResize(), height: "80%", p: 2, transition: 'width 0.3s ease-in-out', gap:10 }}>
                <List elevation={3} sx={{ height: "100%", width: "100%", overflowY: "auto", overflowX:"hidden" }}>
            
                    {newMobileLines
                        .map((item) => (
                            
                            <MobileLineView key={item.id} line={item} handleStartEdit={()=>handleStartEdit(item.id)} lineCost={getNewMobileLineCost(item.id)} config={{isFull: false, isForm: true, isEdit: item.isEdit}}/>
                        
                        ))
                    }

                </List>
                <Box sx={{ m: "0", justifySelf: "flex-end", alignSelf: "flex-end", height: "15%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", position: "relative" }}>
                    <Button variant="contained" onClick={handleAdd} sx={{ mt: 2 }}>Add Line</Button>
                    <Button variant="contained" onClick={handleQuickAdd} sx={{ mt: 2 }}>Quick Add</Button>
                </Box>
            </Box >
        {/* Main Editing Section */ }

    {
        editingLine && (
        
                <NewMobileLine key={editingLine.id} line={editingLine} handleUpdate={handleUpdate(editingLine.id)} lineCost={getNewMobileLineCost(editingLine.id)} />
           
        )
    }

        </Box >
    );
}
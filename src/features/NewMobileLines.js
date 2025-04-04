import React, { useEffect } from 'react';
import { Box, Button, Typography, Paper, List } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import NewMobileLine from '../components/mobile/MobileLineForm';
import MobileLineView from '../components/mobile/MobileLineView';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import WatchIcon from '@mui/icons-material/Watch';
export default function NewMobileLines() {

    const { newMobileLines, getNewMobileLineCost } = useNewMobileSelectors();

    const { addMobileLine, quickAddMobileLine, updateNewMobileLine, addTablet, addWatch, removeMobileLine } = useNewMobileActions();

    const handleAdd = () => {
        addMobileLine();
    };

    const handleQuickAdd = () => {
        quickAddMobileLine();
    }

    const handleTabletAdd = () => {
        addTablet()
    }

    const handleWatchAdd = () => {
        addWatch()
    }
    const handleUpdate = (id) => (key, value) => {
        updateNewMobileLine(id, key, value)
    }

    const handleStartEdit = (id) => {
        updateNewMobileLine(id, 'isEdit', true)
    }

    const handleDelete = (id) => {
        removeMobileLine(id)
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
        <Box sx={{ height: "80%", width: "100vw", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "nowrap", m: "0 a" }}>
            {/* Scrollable List lines*/}
            <Box sx={{ width: () => handleResize(), height: "100%", p: 2, transition: 'width 0.3s ease-in-out', gap: 10, minWidth: "400px" }}>
                <List elevation={3} sx={{ height: "80%", width: "100%", overflowY: "auto", overflowX: "hidden" }}>

                    {newMobileLines
                        .map((item) => (

                            <MobileLineView key={item.id} line={item} handleDelete={() => handleDelete(item.id)} handleStartEdit={() => handleStartEdit(item.id)} lineCost={getNewMobileLineCost(item.id)} config={{ isFull: false, isForm: true, isEdit: item.isEdit }} />

                        ))
                    }

                </List>
                <Typography textAlign={"center"} sx={{m:"5px"}}>Add Lines</Typography>
                <Box sx={{ p:0, m: "0", justifySelf: "flex-end", alignSelf: "flex-end", height: "10%", width: "100%", margin: "10px auto", display: "flex", flexDirection: "row", justifyContent: "space-around", position: "relative" }}>
                    <Button variant="contained" onClick={handleAdd} sx={{ mt: 2, margin: 0 }}><PhoneIcon /></Button>
                    <Button variant="contained" onClick={handleTabletAdd} sx={{ mt: 2, margin: 0 }}><TabletMacIcon /></Button>
                    <Button variant="contained" onClick={handleWatchAdd} sx={{ mt: 2, margin: 0 }}><WatchIcon /></Button>
                </Box>
            </Box >
            {/* Main Editing Section */}

            {
                editingLine && (

                    <NewMobileLine key={editingLine.id} line={editingLine} handleUpdate={handleUpdate(editingLine.id)} lineCost={getNewMobileLineCost(editingLine.id)} />

                )
            }

        </Box >
    );
}
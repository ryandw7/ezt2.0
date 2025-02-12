import React, { use, useEffect, useState } from "react";
import { Box, breadcrumbsClasses, TextField } from "@mui/material";
import useAppContext from "../context/context.js";
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from "../context/selectors/useCurrentSelectors.js";

export default function CurrentForm() {
    const { currentInternet, currentTv, currentInternetCost, currentTvCost, currentMobile, currentMobileCost, currentNotes } = useCurrentSelectors();
    const { updateCurrentInternet, updateCurrentInternetCost, updateCurrentTv, updateCurrentTvCost, updateCurrentMobile, updateCurrentMobileCost, updateCurrentNotes } = useCurrentActions();
    const { state } = useAppContext();
    const handleChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'internet':
                updateCurrentInternet(value);
                break;
            case 'internetCost':
                if (/^\d*(\.\d{0,2})?$/.test(value) || value === ""){
                updateCurrentInternetCost(value);
                console.log('g')
                }
                break;
            case 'tv':
                updateCurrentTv(value);
                break;
            case 'tvCost':
                if (/^\d*(\.\d{0,2})?$/.test(value) || value === ""){
                updateCurrentTvCost(value);
                }
                break;
            case 'mobile':
                updateCurrentMobile(value);
                break;
            case 'mobileCost':
                if (/^\d*(\.\d{0,2})?$/.test(value) || value === ""){
                updateCurrentMobileCost(value);
                }
                break;
            case 'notes':
                updateCurrentNotes(value)
        }

    };

    console.log(currentInternet)
    return (
        <Box sx={{ display: 'flex', width: "100%", flexDirection: "column", height: "80vh", justifyContent: "space-around" }}>
            <Box>
                <TextField id="internet" label="Internet" variant="outlined" value={currentInternet} onChange={handleChange}/>
                <TextField id="internetCost" label="Internet Cost" variant="outlined" value={currentInternetCost} onChange={handleChange} />
            </Box>
            <Box>
                <TextField id="tv" label="TV and Extras" variant="outlined" value={currentTv} onChange={handleChange} />
                <TextField id="tvCost" label="TV and Extras cost" variant="outlined" value={currentTvCost} onChange={handleChange} />
            </Box>
            <Box>
                <TextField id="mobile" label="Mobile" variant="outlined" value={currentMobile} onChange={handleChange} />
                <TextField id="mobileCost" label="Mobile Cost" variant="outlined" value={currentMobileCost} onChange={handleChange}/>
            </Box>
            <Box>
                <TextField id="notes" label="Additional Notes" variant="outlined" multiline
  minRows={4} value={currentNotes} fullWidth onChange={handleChange} />
            </Box>
        </Box>
    )
}
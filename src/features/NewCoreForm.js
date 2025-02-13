import React, { use, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import useNewCoreActions from '../context/actions/useNewCoreActions.js';
import useNewCoreSelectors from "../context/selectors/useNewCoreSelectors.js";
import useAppContext from "../context/context.js";
export default function newCoreForm() {
    const { newInternet, newTv, newInternetCost, newTvCost, newCoreNotes } = useNewCoreSelectors();
    const { updateNewInternet, updateNewInternetCost, updateNewTv, updateNewTvCost, updateNewCoreNotes } = useNewCoreActions();
    const { state } = useAppContext()
    console.log(newInternet)
    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(value)
        switch (id) {
            case 'internet':
                updateNewInternet(value);
                break;
            case 'internetCost':
                if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
                    updateNewInternetCost(value);
                }
                break;
            case 'tv':
                updateNewTv(value);
                break;
            case 'tvCost':
                if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
                    updateNewTvCost(value);
                }
                break;
            case 'notes':
                updateNewCoreNotes(value)
        }

    };

    console.log(newInternet)
    return (
        <Box sx={{ display: 'flex', width: "100%", flexDirection: "column", height: "80vh", justifyContent: "space-around" }}>
            <Box>
                <TextField id="internet" label="Internet" variant="outlined" value={newInternet} onChange={handleChange} />
                <TextField id="internetCost" label="Internet Cost" variant="outlined" value={newInternetCost} onChange={handleChange} />
            </Box>
            <Box>
                <TextField id="tv" label="TV and Extras" variant="outlined" value={newTv} onChange={handleChange} />
                <TextField id="tvCost" label="TV and Extras cost" variant="outlined" value={newTvCost} onChange={handleChange} />
            </Box>
            <Box>
                <TextField id="notes" label="Additional Notes" variant="outlined" multiline
                    minRows={4} value={newCoreNotes} fullWidth onChange={handleChange} />
            </Box>
        </Box>
    )
}
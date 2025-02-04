import React, { use, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import useAppContext from "../context/context.js";
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from "../context/selectors/useCurrentSelectors.js";

export default function CurrentForm() {
    const { currentInternet, currentTv, currentInternetCost, currentTvCost } = useCurrentSelectors();
    const { updateCurrentInternet } = useCurrentActions();
    const { state, dispatch } = useAppContext()

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(value)
        switch (id) {
            case 'internet':
                updateCurrentInternet(value)
        }
       
    };

    console.log(currentInternet)
    return (
        <Box>
            <TextField id="internet" label="Internet" variant="outlined" value={currentInternet} onChange={handleChange} />
            <TextField id="internetCost" label="Internet Cost" variant="outlined" value={currentInternetCost} onChange={handleChange} />
            <TextField id="tv" label="TV and Extras" variant="outlined" value={currentTv} onChange={handleChange} />
            <TextField id="tvCost" label="TV and Extras cost" variant="outlined" value={currentTvCost} onChange={handleChange} />
        </Box>
    )
}
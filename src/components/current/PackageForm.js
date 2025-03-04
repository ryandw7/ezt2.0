import React from 'react';
import {Box, TextField} from '@mui/material';

export default function PackageForm({handleChange, formValues, hasMobile}) {
   const {
        internet,
        internetCost,
        tv,
        tvCost,
        notes
    } = formValues

    let mobile;
    let mobileCost;
    if(hasMobile){
        mobile = formValues.mobile || '';
        mobileCost = formValues.mobileCost || ''; 
    }
    return (
        <Box sx={{ display: 'flex', width: "100%", flexDirection: "column", height: "80vh", justifyContent: "space-around" }}>
            <Box>
                <TextField id="internet" label="Internet" variant="outlined" value={internet} onChange={handleChange} />
                <TextField id="internetCost" label="Internet Cost" variant="outlined" value={internetCost} onChange={handleChange} />
            </Box>
            <Box>
                <TextField id="tv" label="TV and Extras" variant="outlined" value={tv} onChange={handleChange} />
                <TextField id="tvCost" label="TV and Extras cost" variant="outlined" value={tvCost} onChange={handleChange} />
            </Box>
            {hasMobile && <Box>
                <TextField id="mobile" label="Mobile" variant="outlined" value={mobile} onChange={handleChange} />
                <TextField id="mobileCost" label="Mobile Cost" variant="outlined" value={mobileCost} onChange={handleChange} />
            </Box>}
            <Box>
                <TextField id="notes" label="Additional Notes" variant="outlined" multiline
                    minRows={4} value={notes} fullWidth onChange={handleChange} />
            </Box>
        </Box>
    )

}
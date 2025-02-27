import React from 'react';
import { FormControlLabel, FormGroup, Checkbox, Box } from '@mui/material';
import CurrentDetails from '../components/finish/CurrentDetails';
import MobileDetails from '../components/finish/MobileDetails';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';

export default function Finish() {

    const { newMobileLines } = useNewMobileSelectors();
    return (
        <Box sx={{width:"90%"}}>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Mobile Form" />
                <FormControlLabel control={<Checkbox />} label="Prices" />
                <FormControlLabel control={<Checkbox />} label="Include Current" />
                <FormControlLabel control={<Checkbox />} label="Include Core" />
            </FormGroup>

            <CurrentDetails/>
            <MobileDetails lines={newMobileLines}/>
        </Box>
    )
}
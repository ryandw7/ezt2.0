import React from 'react';
import { FormControlLabel, FormGroup, Checkbox, Box } from '@mui/material';
import CurrentDetails from '../components/finish/CurrentDetails';
import FinishMobileDetails from '../features/FinishMobileDetails';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import Printout from '../features/Printout';
export default function Finish() {

    const { newMobileLines } = useNewMobileSelectors();
    return (
        <Box sx={{width:"90%"}}>
            <FormGroup className='print-hidden'>
                <FormControlLabel control={<Checkbox />} label="Mobile Form" />
                <FormControlLabel control={<Checkbox />} label="Prices" />
                <FormControlLabel control={<Checkbox />} label="Include Current" />
                <FormControlLabel control={<Checkbox />} label="Include Core" />
            </FormGroup>
            <Printout/>
            <CurrentDetails/>
            <FinishMobileDetails lines={newMobileLines}/>
        </Box>
    )
}
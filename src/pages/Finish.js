import React from 'react';
import { FormControlLabel, FormGroup, Checkbox, Box, Button} from '@mui/material';
import CurrentDetails from '../components/finish/CurrentDetails';
import FinishMobileDetails from '../features/FinishMobileDetails';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import PrintOut from '../features/PrintOut';
import { useReactToPrint } from 'react-to-print';

export default function Finish() {

    const componentRef = React.useRef(null);

    const handleAfterPrint = React.useCallback(() => {
        console.log("`onAfterPrint` called");
      }, []);
    
      const handleBeforePrint = React.useCallback(() => {
        console.log("`onBeforePrint` called");
        return Promise.resolve();
      }, []);
    
      const printFn = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "Xfinity Plan",
        onAfterPrint: handleAfterPrint,
        onBeforePrint: handleBeforePrint,
      });
    
    const { newMobileLines } = useNewMobileSelectors();
    return (
        <Box sx={{width:"90%"}}>
            <Button onClick={printFn}>Print</Button>
            <PrintOut ref={componentRef}/>
        </Box>
    )
}
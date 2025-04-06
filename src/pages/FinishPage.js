import React from 'react';
import { Box, Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import FinishFeature from '../features/FinshFeature';

const FinishPage = () => {

  const componentRef = React.useRef(null);

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {

    return Promise.resolve();
  }, [])

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Xfinity Plan",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
  })

  const handlePrint = () => {
    console.log("Waiting 500ms before printing...");
    setTimeout(() => {
      printFn();
    }, 500);
  };
  
  return (
    <Box sx={{ width: "90%" }}>
      <Button onClick={handlePrint}>Print</Button>
      <FinishFeature ref={componentRef} />
    </Box>
  )

};

export default FinishPage;
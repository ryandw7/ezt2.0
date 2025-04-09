import React from 'react';
import { Box, Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import FinishFeature from '../features/FinshFeature';
import { useState } from 'react';

const FinishPage = () => {
  const [isPrint, setIsPrint] = useState(false);
  console.log("routed to Finish")
  const componentRef = React.useRef(null);

  const handleAfterPrint = React.useCallback(() => {
    setIsPrint(false)
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
    setIsPrint(true)
    setTimeout(() => {
      printFn();
    }, 500);
  };

  return (
    <Box sx={{ width: "90%" }}>
      <Button onClick={handlePrint}>Print</Button>
      <FinishFeature ref={componentRef} isPrint={isPrint} paperHeight="80vh" isFullView={false} fontSize={"1vh"}/>
    </Box>
  )

};

export default FinishPage;
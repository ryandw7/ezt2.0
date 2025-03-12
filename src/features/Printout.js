import React, { useRef } from "react";
import { Button, Paper, Typography, Grid2 } from "@mui/material";
import { useReactToPrint } from "react-to-print";

const Printout = React.forwardRef(({ formData }, ref) => (
  <Paper ref={ref} sx={{ padding: 4, maxWidth: "8.5in", margin: "auto" }}>
    <Typography variant="h4" align="center">Customer Plan Summary</Typography>
    <Grid2 container spacing={2} mt={2}>
      <Grid2 item xs={6}>
        <Typography variant="h6">Customer Name:</Typography>
        
      </Grid2>
      <Grid2 item xs={6}>
        <Typography variant="h6">Email:</Typography>
        
      </Grid2>
      <Grid2 item xs={12}>
        <Typography variant="h6">Selected Plans:</Typography>
      
      </Grid2>
    </Grid2>
  </Paper>
));

const PrintComponent = ({ formData }) => {
  const printRef = useRef();
  const handlePrint = useReactToPrint({ content: () => printRef.current });

  return (
    <>
      <Button variant="contained" onClick={handlePrint}>Print Summary</Button>
      <PrintView ref={printRef} formData={formData} />
    </>
  );
};

export default Printout;

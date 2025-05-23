import React from 'react';
import { Box, Typography } from '@mui/material';

const SavingsView = ({ className, data }) => {
  const { totalSavings } = data;

  return (
    <>
      {totalSavings > 0 ? <Box
        className="savings"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h3">
          Save ${totalSavings.toFixed(2)} a month!
        </Typography>
      </Box> : null}
    </>
  );
};

export default SavingsView;

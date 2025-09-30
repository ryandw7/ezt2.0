import React from 'react';
import { Box, Typography } from '@mui/material';

const SavingsView = ({ className, data }) => {
  const { totalSavings } = data;
  const annualSavings = totalSavings * 12
  return (
    <>
      {totalSavings > 0 ? (
        <Box
          className="savings"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">
            Save: ${totalSavings.toFixed(2)} Monthly ${annualSavings.toFixed(2)} Annualy
          </Typography>
        </Box>
      ) : null}
    </>
  );
};

export default SavingsView;

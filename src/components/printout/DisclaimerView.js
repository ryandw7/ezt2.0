import React from 'react';
import { Box, Typography } from '@mui/material';

const DisclaimerView = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography fontWeight={'bold'}>
        DISCLAIMER: This is not a legal confirmation, and all offers are
        finalized at point of sale.
      </Typography>
    </Box>
  );
};

export default DisclaimerView;

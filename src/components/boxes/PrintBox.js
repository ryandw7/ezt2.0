import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PrintBox = ({
  children,
  header = {},
  boxSx = {},
  className = {},
  isPrintView,
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
        borderRadius: '22px',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={className}
    >
      <Typography
        variant={'h2'}
        sx={{
          height: 'fit-content',
          width: '100%',
          borderTopRightRadius: '20px',
          borderTopLeftRadius: '20px',
          m: '0 auto',
          p: '10px',
        }}
      >
        {header}
      </Typography>
      <Box
        sx={{
          flex: 1,
          width: '100%',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          ...boxSx,
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default PrintBox;

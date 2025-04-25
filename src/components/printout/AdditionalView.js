import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import PrintBox from '../boxes/PrintBox';
import RowBox from '../boxes/RowBox';
const AdditionalView = ({ className, data }) => {
  const { rep, contact, additionalNotes } = data;

  return (
    <PrintBox
      header={'Additional'}
      className={className}
      boxSx={{ justifyContent: 'space-around' }}
    >
      {rep || contact ? (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {rep ? (
              <>
                <Typography variant="h3" sx={{ margin: '5px' }}>
                  {rep}
                </Typography>
              </>
            ) : null}
            {contact ? (
              <>
                <Typography variant="h3" sx={{ margin: '5px' }}>
                  {contact}
                </Typography>
              </>
            ) : null}
          </Box>
        </>
      ) : null}
      {additionalNotes ? (
        <>
          <RowBox>
            <Typography
              sx={{ width: '100%', textAlign: 'center', height: 'fit-content' }}
            >
              {additionalNotes}
            </Typography>
          </RowBox>
        </>
      ) : null}
    </PrintBox>
  );
};

export default AdditionalView;

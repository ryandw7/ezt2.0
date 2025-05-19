import React from 'react';
import PrintBox from '../boxes/PrintBox';
import RowBox from '../boxes/RowBox';
import { Typography } from '@mui/material';

const CurrentView = ({ className, data }) => {
  const {currentServicesTotalCost, currentServicesItems } = data;
 
  return (
    <PrintBox header={'Current Services'} className={className}>
      {currentServicesItems.map((item) => {
        return item.cost ? (
          <>
            <RowBox>
              <Typography>{item.description}</Typography>
              <Typography>${item.cost.toFixed(2)} est.</Typography>
            </RowBox>
            <RowBox sx={{ justifyContent: 'center' }}>
              <Typography sx={{ fontStyle: 'italic' }}>
                {item.additionalNotes}
              </Typography>
            </RowBox>
          </>
        ) : null;
      })}
      {currentServicesTotalCost !== 0 ? (
        <RowBox
          sx={{ marginTop: 'auto', padding: '3px', justifySelf: 'flex-end' }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ p: 0, m: 0, height: 'fit-content' }}
          >
            Current Total
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ p: 0, m: 0, height: 'fit-content' }}
          >
            ${currentServicesTotalCost.toFixed(2)} est.
          </Typography>
        </RowBox>
      ) : null}
    </PrintBox>
  );
};

export default CurrentView;

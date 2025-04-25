import React from 'react';
import { Box, TextField, Paper } from '@mui/material';

export default function PackageForm({ handleChange, formValues, hasMobile }) {
  const { internet, internetCost, tv, tvCost, notes } = formValues;

  let mobile;
  let mobileCost;

  if (hasMobile) {
    mobile = formValues.mobile || '';
    mobileCost = formValues.mobileCost || '';
  }

  return (
    <Paper
      elevation={5}
      sx={{
        minWidth: '500px',
        width: '70%',
        maxWidth: '800px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        height: '70%',
        justifyContent: 'space-around',
      }}
    >
      <RowBox>
        <TextField
          id="internet"
          label="Internet"
          variant="outlined"
          value={internet}
          onChange={handleChange}
          sx={{ width: '60%' }}
        />
        <TextField
          id="internetCost"
          label="Internet Cost"
          variant="outlined"
          value={internetCost || ''}
          onChange={handleChange}
          sx={{ width: '30%' }}
        />
      </RowBox>
      <RowBox>
        <TextField
          id="tv"
          label="TV and Extras"
          variant="outlined"
          value={tv}
          onChange={handleChange}
          sx={{ width: '60%' }}
        />
        <TextField
          id="tvCost"
          label="Extras cost"
          variant="outlined"
          value={tvCost || ''}
          onChange={handleChange}
          sx={{ width: '30%' }}
        />
      </RowBox>
      {hasMobile && (
        <RowBox>
          <TextField
            id="mobile"
            label="Mobile"
            variant="outlined"
            value={mobile}
            onChange={handleChange}
            sx={{ width: '60%' }}
          />
          <TextField
            id="mobileCost"
            label="Mobile Cost"
            variant="outlined"
            value={mobileCost || ''}
            onChange={handleChange}
            sx={{ width: '30%' }}
          />
        </RowBox>
      )}
      <Box>
        <TextField
          id="notes"
          label="Additional Notes"
          variant="outlined"
          multiline
          minRows={4}
          value={notes}
          fullWidth
          onChange={handleChange}
        />
      </Box>
    </Paper>
  );
}

const RowBox = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    {children}
  </Box>
);

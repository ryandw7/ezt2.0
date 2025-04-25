import React from 'react';

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

export default function MobileLineForm({ line, handleUpdate, handleStopEdit }) {
  const {
    name,
    isEdit,
    id,
    xmc,
    phoneNumber,
    isBYOD,
    port,
    deviceModel,
    payInFull,
    deviceTotalCost,
    deviceDiscount,
    deviceDiscountDesc,
    lineDiscount,
    lineDiscountDesc,
    dataPlan,
  } = line;
  console.log(handleUpdate);
  const handleChange = (e) => {
    console.log('handling change');
    const key = e.target.id || e.target.name;
    let value = e.target.value;
    if (key === 'isBYOD') {
      handleUpdate?.('isBYOD', !isBYOD);
    } else {
      //  if (key === 'deviceTotalCost' || key === 'deviceDiscount' || key === 'lineDiscount') {
      if (['deviceTotalCost', 'deviceDiscount', 'lineDiscount'].includes(key)) {
        if (/^\d*(\.\d{0,2})?$/.test(value) || value === '') {
          if (value === '') {
            value = 0;
          }
          handleUpdate(key, Number(value));
        }
      } else {
        handleUpdate(key, value);
      }
    }
  };

  const handleStartEdit = () => {
    handleUpdate('isEdit', true);
  };
  const handleToggle = (e) => {
    const key = e.target.id;
    handleUpdate(key, !line[key]);
  };

  return (
    <Paper
      elevation={3}
      gap={2}
      sx={{
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '450px',
        width: '60%',
        height: '90%',
        overflow: '-moz-hidden-unscrollable',
        p: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          m: '5px',
          flexWrap: 'nowrap',
        }}
      >
        {/*NAME | BYOD*/}

        {dataPlan !== 'Tablet' && dataPlan !== 'Watch' ? (
          <>
            <FormControlLabel
              label="Data Plan"
              labelPlacement="top"
              control={
                <Select
                  name="dataPlan"
                  labelId="dataPlan"
                  id="dataPlan"
                  value={dataPlan}
                  onChange={handleChange}
                  sx={{ height: '25px', margin: '8px auto', fontSize: '.7em' }}
                >
                  <MenuItem value="Unlimited">Unlimited</MenuItem>
                  <MenuItem value="Unlimited Premium">Unlimited +</MenuItem>
                </Select>
              }
            />
          </>
        ) : null}

        <FormControlLabel
          labelPlacement="top"
          label="BYOD"
          control={
            <Switch checked={isBYOD} id="isBYOD" onChange={handleToggle} />
          }
        />

        <FormControlLabel
          label="XMC"
          labelPlacement="top"
          control={
            <Select
              name="xmc"
              labelId="xmc"
              id="xmc"
              value={xmc}
              onChange={handleChange}
              sx={{ height: '25px', margin: '8px auto', fontSize: '.7em' }}
            >
              <MenuItem value={9}>$9</MenuItem>
              <MenuItem value={12}>$12</MenuItem>
              <MenuItem value={15}>$15</MenuItem>
              <MenuItem value={17}>$17</MenuItem>
              <MenuItem value={19}>$19</MenuItem>
            </Select>
          }
        />

        <FormControlLabel
          labelPlacement="top"
          label="Port"
          control={<Switch checked={port} id="port" onChange={handleToggle} />}
        />
      </Box>

      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            m: '5px',
            width: '100%',
            overflowX: '-moz-hidden-unscrollable',
          }}
        >
          <FormControlLabel
            disabled={isBYOD}
            control={
              <Switch
                checked={payInFull}
                id="payInFull"
                onChange={handleToggle}
              />
            }
            label="Pay in Full"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <TextField
            disabled={isBYOD}
            id="deviceModel"
            label="Device Model"
            placeholder="Example: iPhone 16"
            variant="outlined"
            value={deviceModel}
            onChange={handleChange}
            sx={{
              flex: 2,
              '& .MuiInputBase-root': {
                height: '2.5em',
                fontSize: '0.85rem',
                paddingY: '0.25em',
              },
              '& .MuiInputLabel-root': {
                fontSize: '0.75rem',
              },
            }}
          />

          <TextField
            disabled={isBYOD}
            id="deviceTotalCost"
            label="Total Cost"
            variant="outlined"
            value={deviceTotalCost !== 0 ? deviceTotalCost : ''}
            onChange={handleChange}
            sx={{
              flex: 1,
              '& .MuiInputBase-root': {
                height: '2.5em',
                fontSize: '0.85rem',
                paddingY: '0.25em',
              },
              '& .MuiInputLabel-root': {
                fontSize: '0.75rem',
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            m: '5px',
          }}
        >
          <TextField
            disabled={isBYOD || payInFull}
            id="deviceDiscountDesc"
            label="Device Discount"
            placeholder="Example: Trade In"
            variant="outlined"
            value={deviceDiscountDesc}
            onChange={handleChange}
            sx={{ width: '200px', m: '5px' }}
          />
          <TextField
            disabled={isBYOD || payInFull}
            id="deviceDiscount"
            label="Amount"
            variant="outlined"
            value={deviceDiscount !== 0 ? deviceDiscount : ''}
            onChange={handleChange}
            sx={{ width: '100px', m: '5px' }}
          />
        </Box>
      </>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          m: '5px',
        }}
      >
        <TextField
          id="lineDiscountDesc"
          label="Line Discount"
          placeholder="Example: Free Line"
          variant="outlined"
          value={lineDiscountDesc}
          onChange={handleChange}
          sx={{ width: '200px', m: '5px' }}
        />
        <TextField
          id="lineDiscount"
          label="Amount"
          variant="outlined"
          value={lineDiscount !== 0 ? lineDiscount : ''}
          onChange={handleChange}
          sx={{ width: '100px', m: '5px' }}
        />
      </Box>
      <Button variant="contained" onClick={handleStopEdit} sx={{ mt: 2 }}>
        Done
      </Button>
    </Paper>
  );
}

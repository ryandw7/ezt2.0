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
} from '@mui/material';
import { getNowMobileLines } from '../../context/selectors/useNewMobileSelectors';
import { BoyRounded } from '@mui/icons-material';

/* 
INPUT GROUPS
  unlimitedLine : 1
  unlimitedPremiumLine : 2
  watchLine: 3
  tabletLine: 4
  nowMobileLine: 5
*/

const inputGroups = {
  nameGroup: [1, 2, 3, 4, 5],
  dataPlanGroup: [1, 2],
  BYODGroup: [1, 2, 3, 4, 5],
  XMCGroup: [1, 2, 3, 4, 5],
  portGroup: [1, 2, 3, 4, 5],
  payInFullGroup: [1, 2, 3, 4],
  deviceModelGroup: [1, 2, 3, 4, 5],
  totalCostGroup: [1, 2, 3, 4, 5],
  deviceDiscountGroup: [1, 2, 3, 4, 5],
  deviceDiscountAmountGroup: [1, 2, 3, 4, 5],
  lineDiscountGroup: [1, 2, 3, 4],
  lineDiscountAmountGroup: [1, 2, 3, 4],
  globalTravelPassGroup: [5],
  hotSpotGroup: [5],
};
const inputFilter = (lineGroup, inputName) => {
  if (!inputGroups[inputName].includes(lineGroup)) {
    return false;
  }
  return true;
};

const MobileLineForm = ({
  line,
  handleUpdate,
  handleStopEdit,
  isXfinityMobile,
}) => {
  const {
    xmc,
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
    name,
  } = line;

  let lineGroup;
  switch (dataPlan) {
    case 'Unlimited':
      lineGroup = 1;
      break;
    case 'Unlimited Premium':
      lineGroup = 2;
      break;
    case 'Watch':
      lineGroup = 3;
      break;
    case 'Tablet':
      lineGroup = 4;
      break;
    case 'Now':
      lineGroup = 5;
  }
  //EVENT HANDLERS

  const handleChange = (e) => {
    const key = e.target.id || e.target.name;
    let value = e.target.value;

    if (key === 'isBYOD') {
      handleUpdate('isBYOD', !isBYOD);
    } else if (
      ['deviceTotalCost', 'deviceDiscount', 'lineDiscount'].includes(key)
    ) {
      if (/^\d*(\.\d{0,2})?$/.test(value) || value === '') {
        if (value === '') value = 0;
        handleUpdate(key, Number(value));
      }
    } else {
      handleUpdate(key, value);
    }
  };

  const handleToggle = (e) => {
    const key = e.target.id;
    handleUpdate(key, !line[key]);
  };

  //INPUTS

  const dataPlanInput = () => {
    if (!inputFilter(lineGroup, 'dataPlanGroup')) {
      return null;
    }
    return (
      <FormControlLabel
        label="Data Plan"
        labelPlacement="top"
        sx={{ height: '25px', mb: '5px' }}
        control={
          <Select
            name="dataPlan"
            id="dataPlan"
            value={dataPlan}
            onChange={handleChange}
            sx={{ fontSize: 'inherit', height: '2em', mt: '5px' }}
          >
            <MenuItem value="Unlimited">Unlimited</MenuItem>
            <MenuItem value="Unlimited Premium">Unlimited +</MenuItem>
          </Select>
        }
      />
    );
  };

  const BYODInput = () => {
    if (!inputFilter(lineGroup, 'BYODGroup')) {
      return null;
    }
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '70px',
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', mb: '0px', p: 0 }}>
          BYOD
        </Typography>
        <Switch
          sx={{ m: 0 }}
          checked={isBYOD}
          id="isBYOD"
          onChange={handleToggle}
        />
      </Box>
    );
  };

  const XMCInput = () => {
    if (!inputFilter(lineGroup, 'BYODGroup')) {
      return null;
    }

    return (
      <FormControlLabel
        labelPlacement="top"
        sx={{ height: '25px', mb: '5px' }}
        label="XMC"
        control={
          <Select
            name="xmc"
            id="xmc"
            value={xmc}
            onChange={handleChange}
            sx={{ fontSize: 'inherit', height: '2.5em', mt: '5px' }}
          >
            {[9, 12, 15, 17, 19].map((val) => (
              <MenuItem key={val} value={val}>
                ${val}
              </MenuItem>
            ))}
          </Select>
        }
      />
    );
  };
  const portInput = () => {
    if (!inputFilter(lineGroup, 'BYODGroup')) {
      return null;
    }

    return (
      <FormControlLabel
        labelPlacement="top"
        label="Port"
        control={<Switch checked={port} id="port" onChange={handleToggle} />}
      />
    );
  };
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '90%',
        maxWidth: 600,
        minWidth: 400,
        p: 3,
        fontSize: { xs: '0.75rem', md: '0.85rem' },
        '& .MuiInputBase-root': {
          fontSize: 'inherit',
          height: '100%',
        },
        '& .MuiInputLabel-root': {
          fontSize: 'calc(inherit - 0.1rem)',
        },
      }}
    >
      {isXfinityMobile ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 2,
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'nowrap',
              width: '100%',
            }}
          >
            <TextField
              id="name"
              label="Name (Optional)"
              placeholder="Example: John"
              value={name}
              onChange={handleChange}
              sx={{ flex: 2, minWidth: '150px' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 2,
              flexWrap: 'nowrap',
              width: '100%',
            }}
          >
            {dataPlanInput()}
            {BYODInput()}
            {XMCInput()}
            {portInput()}
          </Box>

          {/* Pay In Full */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
          {/* Device Model + Cost */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              width: '100%',
              alignItems: 'stretch',
              flexWrap: 'nowrap',
            }}
          >
            <TextField
              disabled={isBYOD}
              id="deviceModel"
              label="Device Model"
              placeholder="Example: iPhone 16"
              value={deviceModel}
              onChange={handleChange}
              sx={{ flex: 2, minWidth: '150px' }}
            />
            <TextField
              disabled={isBYOD}
              id="deviceTotalCost"
              label="Total Cost"
              value={deviceTotalCost !== 0 ? deviceTotalCost : ''}
              onChange={handleChange}
              sx={{ flex: 1, minWidth: '100px' }}
            />
          </Box>

          {/* Device Discount */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              width: '100%',
              alignItems: 'stretch',
              flexWrap: 'nowrap',
            }}
          >
            <TextField
              disabled={isBYOD || payInFull}
              id="deviceDiscountDesc"
              label="Device Discount"
              placeholder="Example: Trade In"
              value={deviceDiscountDesc}
              onChange={handleChange}
              sx={{ flex: 2, minWidth: '150px' }}
            />
            <TextField
              disabled={isBYOD || payInFull}
              id="deviceDiscount"
              label="Amount"
              value={deviceDiscount !== 0 ? deviceDiscount : ''}
              onChange={handleChange}
              sx={{ flex: 1, minWidth: '100px' }}
            />
          </Box>

          {/* Line Discount */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              width: '100%',
              alignItems: 'stretch',
              flexWrap: 'nowrap',
            }}
          >
            <TextField
              id="lineDiscountDesc"
              label="Line Discount"
              placeholder="Example: Free Line"
              value={lineDiscountDesc}
              onChange={handleChange}
              sx={{ flex: 2, minWidth: '150px' }}
            />
            <TextField
              id="lineDiscount"
              label="Amount"
              value={lineDiscount !== 0 ? lineDiscount : ''}
              onChange={handleChange}
              sx={{ flex: 1, minWidth: '100px' }}
            />
          </Box>
        </Box>
      ) : (
        <>{getNowMobileLines}</>
      )}
      <Button variant="contained" onClick={handleStopEdit} sx={{ mt: 2 }}>
        Done
      </Button>
    </Paper>
  );
};

export default MobileLineForm;

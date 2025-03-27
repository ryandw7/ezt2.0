import * as React from 'react';
import styles from '../styles/Printout.module.css'
import CurrentView from '../components/printout/CurrentView';
import {test_lines, parse_mobile_cost} from '../utils.js';
import { Typography, Box, isMuiElement } from '@mui/material';
import NewView from '../components/printout/NewView';
import AdditionalView from '../components/printout/AdditionalView';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors';
import { PointOfSale } from '@mui/icons-material';
const PrintOut = React.forwardRef((props, ref) => {
  const isPrintMedia = window.matchMedia('print').matches;

  const { newMobileLines } = useNewMobileSelectors();

  const { newCore } = useNewCoreSelectors();
  const {current, currentTotal} = useCurrentSelectors();

  const mobileCost = parse_mobile_cost(newMobileLines);
  const mobileTotalCost = mobileCost.mobileTotal;

  const newCoreTotal = newCore.internetCost + newCore.tvCost;
  const newTotal = Number(mobileTotalCost + newCoreTotal) || 0;

  const savings = currentTotal - newCoreTotal;
  return (
    <div ref={ref} className="paper" sx={{position:"relative"}}>
      <CurrentView currentServices={current} total={currentTotal}/>
      <NewView newCore={newCore} newCoreTotal={newCoreTotal} mobileCost={mobileCost} mobileTotal={mobileTotalCost} newTotal={newTotal}/>
      <Box className="savings">
      <Box className="print-hidden" height={"90px"}></Box>
      <Typography variant="h3">Save {savings} a month!</Typography>
      </Box >
      <AdditionalView/>
      
    </div>
  )
})

export default PrintOut;
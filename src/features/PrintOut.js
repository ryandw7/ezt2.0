import * as React from 'react';
import styles from '../styles/Printout.module.css'
import CurrentView from '../components/printout/CurrentView';
import { test_lines, parse_mobile_cost } from '../utils.js';
import { Typography, Box, isMuiElement } from '@mui/material';
import NewView from '../components/printout/NewView';
import AdditionalView from '../components/printout/AdditionalView';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors';
import useAdditionalSelectors from '../context/selectors/useAdditionalSelectors.js';

import { PointOfSale } from '@mui/icons-material';
const PrintOut = React.forwardRef((props, ref) => {
  const isPrintMedia = window.matchMedia('print').matches;

  const { newMobileLines } = useNewMobileSelectors();
  const { newCore } = useNewCoreSelectors();
  const { current, currentTotal } = useCurrentSelectors();
  const additional = { ...useAdditionalSelectors() };


  const mobileCost = parse_mobile_cost(newMobileLines);
  const mobileTotalCost = Number(mobileCost.mobileTotal);

  const newCoreTotal = newCore.internetCost + newCore.tvCost;
  const newTotal = mobileTotalCost + newCoreTotal || 0;
  console.log(mobileTotalCost, newCoreTotal, newTotal)
  const savings = currentTotal - newTotal;
  return (
    <div ref={ref} className="paper" sx={{ position: "relative" }}>
      <CurrentView currentServices={current} total={currentTotal} />
      <NewView newCore={newCore} newCoreTotal={newCoreTotal} mobileCost={mobileCost} mobileTotal={mobileTotalCost} newTotal={newTotal} />
      {savings > 0 ? <>
        <Box className="savings">
          <Box height={"90px"}></Box>
          <Typography variant="h3">Save ${savings.toFixed(2)} a month!</Typography>
        </Box >
      </> : null}
      <AdditionalView additional={additional} />
      <Typography fontWeight={"bold"} sx={{borderTop:"2px solid #673AB7", width:"90%", left:`5%`}}className='disclaimer'>DISCLAIMER: This is not a legal confirmation, and all offers are finalized at point of sale.</Typography>
    </div>
  )
})

export default PrintOut;
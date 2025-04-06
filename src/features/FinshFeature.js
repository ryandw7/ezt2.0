import * as React from 'react';
import CurrentView from '../components/printout/CurrentView.js';
import { parse_mobile_cost } from '../utils.js';
import { Typography, Box } from '@mui/material';
import NewView from '../components/printout/NewView.js';
import AdditionalView from '../components/printout/AdditionalView.js';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors.js';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors.js';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors.js';
import useAdditionalSelectors from '../context/selectors/useAdditionalSelectors.js';

const FinishFeature = React.forwardRef((props, ref) => {

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
      <div className="savings">
        <Typography variant="h3">Save ${savings.toFixed(2)} a month!</Typography>
      </div>
      <AdditionalView additional={additional} />
      <Typography fontWeight={"bold"} sx={{ borderTop: "2px solid #673AB7" }} className='disclaimer'>DISCLAIMER: This is not a legal confirmation, and all offers are finalized at point of sale.</Typography>
    </div>
  )
})

export default FinishFeature;
import * as React from 'react';
import PaperView from '../components/paper/PaperView.js';

import CurrentView from '../components/printout/CurrentView.js';

import { parse_mobile_cost } from '../utils.js';
import NewView from '../components/printout/NewView.js';
import AdditionalView from '../components/printout/AdditionalView.js';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors.js';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors.js';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors.js';
import useAdditionalSelectors from '../context/selectors/useAdditionalSelectors.js';
import SavingsView from '../components/printout/SavingsView.js';
import DisclaimerView from '../components/printout/DisclaimerView.js';

const FinishFeature = React.forwardRef((props, ref) => {
  const { paperHeight } = props;
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


  const currentServicesData = { current, currentTotal };
  const newServicesData = {newCore, newCoreTotal, mobileCost, mobileTotalCost, newTotal};
  const savingsData = {savings}
  const additionalData = {...additional};

  const viewData = { currentServicesData, newServicesData, savingsData, additionalData };

  return (
    <PaperView ref={ref} className="paper" data={viewData} height={paperHeight}/>

  )
})

export default FinishFeature;
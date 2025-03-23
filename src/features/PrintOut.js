import * as React from 'react';
import styles from '../styles/Printout.module.css'
import CurrentView from '../components/printout/CurrentView';
import {test_lines, parse_mobile_cost} from '../utils.js'
import NewView from '../components/printout/NewView';
import AdditionalView from '../components/printout/AdditionalView';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors';
const PrintOut = React.forwardRef((props, ref) => {

  const { newMobileLines } = useNewMobileSelectors();

  const { newCore } = useNewCoreSelectors();
  const {current} = useCurrentSelectors();
  console.log(parse_mobile_cost(test_lines))
  return (
    <div ref={ref} className="paper">
      <CurrentView currentServices={current}/>
      <NewView newCore={newCore} mobileCost={parse_mobile_cost(newMobileLines)}/>
      <AdditionalView/>
    </div>
  )
})

export default PrintOut;
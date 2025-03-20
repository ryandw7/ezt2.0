import * as React from 'react';
import styles from '../styles/Printout.module.css'
import CurrentView from '../components/printout/CurrentView';

import NewView from '../components/printout/NewView';
import AdditionalView from '../components/printout/AdditionalView';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors';
const PrintOut = React.forwardRef((props, ref) => {

  const { newCore } = useNewCoreSelectors();
  const {current} = useCurrentSelectors();

  return (
    <div ref={ref} className="paper">
      <CurrentView currentServices={current}/>
      <NewView newCore={newCore} />
      <AdditionalView/>
    </div>
  )
})

export default PrintOut;
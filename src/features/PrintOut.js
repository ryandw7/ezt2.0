import * as React from 'react';
import styles from '../styles/Printout.module.css'
import CurrentView from '../components/printout/CurrentView';
import NewMobileView from '../components/printout/NewMobileView';
import NewCoreView from '../components/printout/NewCoreView';
import AdditionalView from '../components/printout/AdditionalView';

const PrintOut = React.forwardRef((props, ref) => {


  return (
    <div ref={ref} className="paper">
      <CurrentView/>
      <NewCoreView/>
      <NewMobileView/>
      <AdditionalView/>
    </div>
  )
})

export default PrintOut;
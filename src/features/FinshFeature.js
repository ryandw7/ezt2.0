import * as React from 'react';
import {
  useNewMobileSelectors,
  useNewCoreSelectors,
  useCurrentSelectors,
  useAdditionalSelectors,
  useDerivedSelectors,
} from '../context/selectors';
import PaperView from '../components/paper/PaperView.js';
import { useNavigate, useLocation } from 'react-router';

const FinishFeature = React.forwardRef((props, ref) => {
  const { paperHeight, fontSize } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const isFullView = location.pathname === '/finish-full-view';

  const handleClick = () => {
    navigate(isFullView ? '/finish' : '/finish-full-view');
  };

  const { newServicesTotalCost, totalSavings } = useDerivedSelectors();
  const { allMobileTotals } = useNewMobileSelectors();
  const { newCore, newCoreServices, newCoreServicesTotalCost } =
    useNewCoreSelectors();
  const { current, currentServicesTotalCost, currentServices } =
    useCurrentSelectors();
  const { rep, contact, additionalNotes } = useAdditionalSelectors();

  const currentServicesData = {
    current,
    currentServicesTotalCost,
    currentServices,
  };
  const newServicesData = {
    newCoreServices,
    newCoreServicesTotalCost,
    newServicesTotalCost,
    allMobileTotals,
  };
  const savingsData = { totalSavings };
  const additionalData = { rep, contact, additionalNotes };
  const viewData = {
    currentServicesData,
    newServicesData,
    savingsData,
    additionalData,
  };

  return (
    <PaperView
      ref={ref}
      className="paper"
      data={viewData}
      handleClick={handleClick}
      paperHeight={paperHeight}
      fontSize={fontSize}
      isFullView={isFullView}
    />
  );
});

export default FinishFeature;

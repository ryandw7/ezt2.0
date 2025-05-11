import React from 'react';
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors.js';

import PackageForm from '../components/PackageForm.js';

const CurrentServicesFeature = () => {
  const { current, currentServices, currentServicesItemsList } = useCurrentSelectors();
  const {
    updateCurrent,
    addCurrentServicesItem,
    updateCurrentServicesItem,
    deleteCurrentServicesItem,
  } = useCurrentActions();

  const handleChange = (id) => (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const key = name;
    if (key.includes('Cost') || key.includes('cost')) {
      if (/^\d*(\.\d{0,2})?$/.test(value) || value === '') {
        return updateCurrentServicesItem(id, key, Number(value));
      }
      return;
    }
    updateCurrentServicesItem(id, key, value);
  };
  const items = [{ description: '', cost: '', additionalNotes: '' }];

  return (
   
    
    <PackageForm
      handleChange={handleChange}
      formValues={current}
      hasMobile={true}
      items={currentServicesItemsList}
      handleAddItem={addCurrentServicesItem}
      handleDeleteItem={deleteCurrentServicesItem}
    />
    
  );
};

export default CurrentServicesFeature;

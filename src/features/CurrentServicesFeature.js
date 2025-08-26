import React from 'react';
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors.js';

import PackageForm from '../components/PackageForm.js';

const CurrentServicesFeature = () => {
  const { current, currentServicesItemsList } = useCurrentSelectors();
  const {
    addCurrentServicesItem,
    updateCurrentServicesItem,
    deleteCurrentServicesItem,
  } = useCurrentActions();

  const moneyLive = /^(?:\d+|\d+\.\d{0,2}|\.\d{0,2})$/;
  const complete = /^(?:\d+|\d+\.\d{1,2}|\.\d{1,2})$/;
  const handleChange = (id) => (e) => {
    const { name: key, value } = e.target;

    if (key.toLowerCase().includes('cost')) {
      if (value === '' || moneyLive.test(value)) {
        const out = complete.test(value) ? Number(value) : value;
        return updateCurrentServicesItem(id, key, out);
      }
      return;
    }

    updateCurrentServicesItem(id, key, value);
  };

  return (
    <PackageForm
      handleChange={handleChange}
      hasMobile={true}
      items={currentServicesItemsList}
      handleAddItem={addCurrentServicesItem}
      handleDeleteItem={deleteCurrentServicesItem}
    />
  );
};

export default CurrentServicesFeature;

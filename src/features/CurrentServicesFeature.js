import React from 'react';
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from '../context/selectors/useCurrentSelectors.js';
import PackageFormList from '../components/PackageFormList.js';

const CurrentServicesFeature = () => {
  const { currentServicesItems } = useCurrentSelectors();
  const {
    addCurrentServicesItem,
    updateCurrentServicesItem,
    deleteCurrentServicesItem
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

  return (
  
    <PackageFormList
      handleChange={handleChange}
      hasMobile={true}
      items={currentServicesItems}
      handleAddItem={addCurrentServicesItem}
      handleDeleteItem={deleteCurrentServicesItem}
    />
    
  );
};

export default CurrentServicesFeature;

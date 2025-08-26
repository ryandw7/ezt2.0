import React from 'react';
import useNewCoreActions from '../context/actions/useNewCoreActions.js';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors.js';

import PackageForm from '../components/PackageForm.js';

const NewCoreServicesFeature = () => {
  const { newCoreServicesItems, newCoreServicesItemsList } =
    useNewCoreSelectors();
  const {
    addNewCoreServicesItem,
    updateNewCoreServicesItem,
    deleteNewCoreServicesItem,
  } = useNewCoreActions();

  console.log(newCoreServicesItems);
  console.log(newCoreServicesItemsList);
  const moneyLive = /^(?:\d+|\d+\.\d{0,2}|\.\d{0,2})$/;
  const complete = /^(?:\d+|\d+\.\d{1,2}|\.\d{1,2})$/;
  const handleChange = (id) => (e) => {
    const { name: key, value } = e.target;

    if (key.toLowerCase().includes('cost')) {
      if (value === '' || moneyLive.test(value)) {
        const out = complete.test(value) ? Number(value) : value;
        return updateNewCoreServicesItem(id, key, out);
      }
      return;
    }

    updateNewCoreServicesItem(id, key, value);
  };

  return (
    <PackageForm
      handleChange={handleChange}
      isNew={true}
      items={newCoreServicesItemsList}
      handleAddItem={addNewCoreServicesItem}
      handleDeleteItem={deleteNewCoreServicesItem}
    />
  );
};

export default NewCoreServicesFeature;

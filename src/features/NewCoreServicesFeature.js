import React from 'react';
import useNewCoreActions from '../context/actions/useNewCoreActions.js';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors.js';

import PackageForm from '../components/PackageForm.js';

const NewCoreServicesFeature = () => {
  const { newCore, newCoreServices } = useNewCoreSelectors();
  const { addNewCoreItem, deleteNewCoreItem, updateNewCoreItem } =
    useNewCoreActions();

  const moneyLive = /^(?:\d+|\d+\.\d{0,2}|\.\d{0,2})$/;
  const complete = /^(?:\d+|\d+\.\d{1,2}|\.\d{1,2})$/;
  const handleChange = (id) => (e) => {
    const { name: key, value } = e.target;

    if (key.toLowerCase().includes('cost')) {
      if (value === '' || moneyLive.test(value)) {
        const out = complete.test(value) ? Number(value) : value;
        return updateNewCoreItem(id, key, out);
      }
      return;
    }

    updateNewCoreItem(id, key, value);
  };

  return (
    <PackageForm
      handleChange={handleChange}
      isNew={true}
      formValues={newCore}
      hasMobile={true}
      items={newCoreServices}
      handleAddItem={addNewCoreItem}
      handleDeleteItem={deleteNewCoreItem}
    />
  );
};

export default NewCoreServicesFeature;

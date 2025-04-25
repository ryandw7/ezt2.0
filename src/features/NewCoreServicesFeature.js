import React from 'react';
import useNewCoreActions from '../context/actions/useNewCoreActions.js';
import useNewCoreSelectors from '../context/selectors/useNewCoreSelectors.js';

import PackageForm2 from '../components/PackageForm2.js';

const NewCoreServicesFeature = () => {
  const { newCore, newCoreServices } = useNewCoreSelectors();
  const {
    updateNewCore,
    addNewCoreItem,
    deleteNewCoreItem,
    updateNewCoreItem,
  } = useNewCoreActions();

  const handleChange = (id) => (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const key = name;
    if (key.includes('Cost') || key.includes('cost')) {
      if (/^\d*(\.\d{0,2})?$/.test(value) || value === '') {
        return updateNewCoreItem(id, key, Number(value));
      }
      return;
    }
    updateNewCoreItem(id, key, value);
  };
  const items = [{ description: '', cost: '', additionalNotes: '' }];

  return (
    <PackageForm2
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

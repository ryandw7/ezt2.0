import React from 'react';
import AdditionalForm from '../components/AdditionalForm.js';
import useAdditionalSelectors from '../context/selectors/useAdditionalSelectors.js';
import useAdditionalActions from '../context/actions/useAdditionalActions.js';

const AdditionalInfoFeature = () => {

    const { updateRep, updateContact, updateAdditionalNotes } = useAdditionalActions();

    const { rep, contact, additionalNotes } = useAdditionalSelectors();

    const handleChange = (e) => {

        const { value, id } = e.target;

        switch (id) {
            case 'rep': updateRep(value);
                break;
            case 'contact': updateContact(value);
                break;
            case 'additionalNotes': updateAdditionalNotes(value);
        }
    }

    const formData = { rep, contact, additionalNotes };

    return (

        <AdditionalForm handleChange={handleChange} formData={formData} />

    )

};

export default AdditionalInfoFeature;
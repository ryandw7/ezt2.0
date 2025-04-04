import React from 'react';
import { Box, breadcrumbsClasses, Paper } from '@mui/material';
import AdditionalForm from '../components/additional/AdditionalForm';
import useAdditionalActions from '../context/actions/useAdditionalActions';
import useAdditionalSelectors from '../context/selectors/useAdditionalSelectors';
import PageBox from './PageBox';
export default function Additional() {

    const { updateRep, updateContact, updateAdditionalNotes } = useAdditionalActions();

    const { rep, contact, additionalNotes } = useAdditionalSelectors();

    const handleChange = (e) => {
        const { value, id } = e.target;
        console.log(value, id)
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
        <PageBox>
            <AdditionalForm handleChange={handleChange} formData={formData} />
        </PageBox>

    )
}
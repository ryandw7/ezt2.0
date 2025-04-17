import React from "react";
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from "../context/selectors/useCurrentSelectors.js";

import PackageForm2 from "../components/PackageForm2.js";


const CurrentServicesFeature = () => {

    const { current, currentServices } = useCurrentSelectors();
    const { updateCurrent, addCurrentItem, deleteCurrentItem, updateCurrentItem } = useCurrentActions();


    const handleChange = (id) => (e) => {
    
        const { name, value } = e.target;
        console.log(name, value)
        const key = name;
        if (key.includes('Cost') || key.includes('cost')) {
            if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
                return updateCurrentItem(id, key, Number(value))
            }
            return;
        }
        updateCurrentItem(id, key, value);

    }
    const items = [{description:"", cost:"", additionalNotes:""}]
   
    return <PackageForm2 handleChange={handleChange} formValues={current} hasMobile={true} items={currentServices} handleAddItem={addCurrentItem} handleDeleteItem={deleteCurrentItem}/>

};

export default CurrentServicesFeature;
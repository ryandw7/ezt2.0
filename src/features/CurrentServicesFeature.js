import React from "react";
import useCurrentActions from '../context/actions/useCurrentActions.js';
import useCurrentSelectors from "../context/selectors/useCurrentSelectors.js";

import PackageForm from "../components/PackageForm.js";

const CurrentServicesFeature = () => {

    const { current } = useCurrentSelectors();
    const { updateCurrent } = useCurrentActions();

    const handleChange = (e) => {

        const { id, value } = e.target;
        const key = id;
        if (key.includes('Cost')) {
            if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
                updateCurrent(key, Number(value))
            }
            return;
        }
        updateCurrent(key, value)


    }

   
    return <PackageForm handleChange={handleChange} formValues={current} hasMobile={true} />

};

export default CurrentServicesFeature;
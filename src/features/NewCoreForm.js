import React from "react";

import useNewCoreActions from '../context/actions/useNewCoreActions.js';
import useNewCoreSelectors from "../context/selectors/useNewCoreSelectors.js";
import PackageForm from "../components/current/PackageForm.js";

export default function CurrentForm() {

    const { newCore } = useNewCoreSelectors();
    const { updateNewCore } = useNewCoreActions();

    const handleChange = (e) => {

        const { id, value } = e.target;
        const key = id;
        if (key.includes('Cost')) {
            if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
                updateNewCore(key, Number(value))
            }
            return;
        }
        updateNewCore(key, value)


    }
    return <PackageForm handleChange={handleChange} formValues={newCore} hasMobile={false} />
}
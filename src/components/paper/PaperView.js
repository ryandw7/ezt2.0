import React from 'react';

import { CurrentView, NewView, SavingsView, AdditionalView, DisclaimerView } from '../printout';

const PaperView = ({ ref, data, paperHeight }) => {
    const { currentServicesData, newServicesData, additionalData, savingsData } = data;
    return (
        <div ref={ref} className={"paper"}>
            <CurrentView className={"current-view"} data={currentServicesData} />
            <NewView className={"new-view"} data={newServicesData} />
            <SavingsView className={"savings"} data={savingsData} />
            <AdditionalView className={"additional-view"} data={additionalData} />
            <DisclaimerView className={"disclaimer"} />
        </div>
    )
};

export default PaperView;
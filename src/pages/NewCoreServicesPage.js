import React from 'react';
import PageBox from './PageBox';
import NewCoreServicesFeature from '../features/NewCoreServicesFeature';

const NewCoreServicesPage = () => {
  
    return (
        <PageBox header="New Core Services" subHeader="(Exclude Mobile Service)">
            <NewCoreServicesFeature />
        </PageBox>
    )

};

export default NewCoreServicesPage;
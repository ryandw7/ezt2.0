import React from 'react';
import PageBox from './PageBox';
import CurrentServicesFeature from '../features/CurrentServicesFeature';

const CurrentServicesPage = () => {
  return (
    <PageBox header="Current Services">
      <CurrentServicesFeature />
    </PageBox>
  );
};

export default CurrentServicesPage;

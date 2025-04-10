import React from 'react';
import FinishFeature from '../features/FinshFeature';
import { ContextProvider } from '../context/context';

const FinishFullView = () => {

    
    return (
     
        <FinishFeature isFullView={true} paperHeight="90vh" fontSize="11pt"/>
       
    )
}

export default FinishFullView;
import React from 'react';
import FinishFeature from '../features/FinshFeature';
import { ContextProvider } from '../context/context';

const FinishFullView = () => {

    
    return (
     
        <FinishFeature isFullView={true} paperHeight="100vh" fontSize="14pt"/>
       
    )
}

export default FinishFullView;
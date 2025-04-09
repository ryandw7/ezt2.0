import React from 'react';
import styles from './PaperView.module.css'
import { CurrentView, NewView, SavingsView, AdditionalView, DisclaimerView } from '../printout';

const PaperView = ({ ref, data, handleClick, paperHeight, fontSize}) => {

    const { currentServicesData, newServicesData, additionalData, savingsData } = data;
   
    return (
        <div ref={ref} className={styles.paper} style={{height:paperHeight, fontSize:fontSize}} onClick={handleClick}>
            <CurrentView className={styles.currentView} data={currentServicesData} />
            <NewView className={styles.newView} data={newServicesData} />
            <SavingsView className={styles.savings} data={savingsData} />
            <AdditionalView className={styles.additionalView} data={additionalData} />
            <DisclaimerView className={styles.disclaimer} />
        </div>
    )
};

export default PaperView;
import React from 'react';
import styles from './PaperView.module.css'
import { CurrentView, NewView, SavingsView, AdditionalView, DisclaimerView } from '../printout';

const PaperView = React.forwardRef(({ data, handleClick, paperHeight, fontSize, isFullView }, ref) =>{

    const { currentServicesData, newServicesData, additionalData, savingsData } = data;
    const fullViewProps = () => {
        if (isFullView) {

           return { minHeight: "200mm"}
        }
    }
    return (
        <div ref={ref} className={styles.paper} style={{ height: paperHeight, fontSize: fontSize, ...fullViewProps(), visibility:"visible"}} onClick={handleClick}>
            <CurrentView className={styles.currentView} data={currentServicesData} />
            <NewView className={styles.newView} data={newServicesData} />
            <SavingsView className={styles.savings} data={savingsData} />
            <AdditionalView className={styles.additionalView} data={additionalData} />
            <DisclaimerView className={styles.disclaimer} />
        </div>
    )
});

export default PaperView;
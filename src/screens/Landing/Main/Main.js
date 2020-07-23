import React from 'react';
import styles from './Main.module.css';
import Button from '../../../components/UI/Button/Button';

const Main = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.splashContainer}>
                <div className={styles.splash}>
                    <p className={styles.tagline}>One stop solution for Business acquisition</p>
                </div>
            </div>
            <div className={styles.panel}>
                <div className={styles.option}>
                    <p className={styles.optionLabel}>Want to sell your business?</p>
                    <Button label="List Your Business" type="orange" className={styles.optionBtn}/>
                </div>
                <div className={styles.option}>
                    <p className={styles.optionLabel}>Want to aquire a business?</p>
                    <Button label="Explore Businesses" type="blue" className={styles.optionBtn}/>
                </div>
            </div>
        </div>
    )
}

export default Main;
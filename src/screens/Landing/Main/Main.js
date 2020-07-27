import React from 'react';
import styles from './Main.module.css';
import Button from '../../../components/UI/Button/Button';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.splashContainer}>
                <div className={styles.splash}>
                    <p className={styles.tagline}>One Stop Solution for Business Acquisition</p>
                </div>
            </div>
            <div className={styles.panel}>
                <div className={styles.option}>
                    <p className={styles.optionLabel}>Want to sell your business?</p>
                    <Link to="/list-your-business">
                        <Button 
                            label="List Your Business" 
                            type="orange" 
                            className={styles.optionBtn}
                        />
                    </Link>
                </div>
                <div className={styles.option} style={{ marginBottom: 8 }}>
                    <p className={styles.optionLabel}>Want to aquire a business?</p>
                    <Link to="/explore">
                        <Button 
                            label="Explore Businesses" 
                            type="blue" 
                            className={styles.optionBtn}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main;
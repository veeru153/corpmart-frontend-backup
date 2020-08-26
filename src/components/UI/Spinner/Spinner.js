import React from 'react';
import styles from './Spinner.module.css';
import logoMini from '../../../assets/images/CorpMart-icon.png';

const Spinner = () => {
    return (
        <div className={styles.spinnerContainers}>
            <div className={styles.spinner}>
                <img className={styles.img} src={logoMini} />
            </div>
        </div>
    )
}

export default Spinner;
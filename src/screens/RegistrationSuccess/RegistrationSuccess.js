import React from 'react';
import styles from './RegistrationSuccess.module.css';
import Button from '../../components/UI/Button/Button';

const RegistrationSuccess = () => {
    return (
        <div className={styles.RegistrationSuccess}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.title}>Registration Successsful</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>Our expert will get in touch with you soon for the verification of the creditials.</p>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        <Button label="List another business" type="white" color="#4AB9CA" className={styles.listBtn}/>
                    </div>
                    <div className={styles.btn}>
                        <Button label="Continue" type="orange" className={styles.continueBtn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationSuccess;
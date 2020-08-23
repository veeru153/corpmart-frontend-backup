import React, { useEffect } from 'react';
import styles from './RegistrationSuccess.module.css';
import Button from '../../components/UI/Button/Button';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';

const RegistrationSuccess = (props) => {

    document.title = "Registration Successful - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div>
            <NavbarMobile />
            <Navbar />
            <div className={styles.RegistrationSuccess}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <p className={styles.title}>Registration Successsful</p>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.text}>Our expert will get in touch with you soon for the verification of the details.</p>
                    </div>
                    <div className={styles.btn}>
                        <Button
                            label="Continue"
                            type="orange"
                            className={styles.continueBtn}
                            pressed={() => props.history.push('/dashboard')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationSuccess;
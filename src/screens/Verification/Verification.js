import React from 'react';
import styles from './Verification.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';

const Verification = () => {
    return (
        <div className={styles.Verification}>
            <Formik
                initialValues={{ otp: '' }}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <p className={styles.title}>Verification</p>
                            <p className={styles.subtitle}>A One-Time-Password ( OTP ) has been sent to your Mobile number and Email ID.</p>
                        </div>
                        <div>
                            <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Enter OTP</p>
                                <input
                                    id="otp"
                                    onChange={props.handleChange('otp')}
                                    value={props.values.otp}
                                    className={styles.inputField}
                                />
                            </div>
                        </div>
                        <div>
                            <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn} />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Verification;
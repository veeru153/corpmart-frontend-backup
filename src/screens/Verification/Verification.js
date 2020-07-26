import React from 'react';
import styles from './Verification.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';

// TODO: Implement Dropdowns and Checkboxes

const Verification = () => {
    return (
        <div className={styles.Verification}>
        <Formik
            initialValues={{
                firstName: '', lastName: '', mobileNo: '', emailId: '',
                businessName: '', state: '', country: '',
                companyType: '', subtype: '', industry: '', saleDesc: '',
                incorporationYear: '', companyAge: '',
                gst: false, bankAcc: false, ieCode: false, licenses: false, licenseDetails: '',
                capital: '', sellingPrice: ''
            }}
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
                                id="emailId"
                                onChange={props.handleChange('emailId')}
                                value={props.values.emailId}
                                className={styles.inputField}
                            />
                        </div>  
                    </div>
                    <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn}/>
                </form>
            )}
        </Formik>
    </div>
    )
}

export default Verification;
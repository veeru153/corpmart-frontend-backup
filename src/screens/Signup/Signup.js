import React from 'react';
import styles from './Signup.module.css';
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';

const Signup = () => {
    return (
        <div className={styles.Signup}>
            <Formik
                initialValues={{ firstName: '', lastName: '', mobile: '', email: '', orgName: '' }}
            >
                {(props) => (
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <p className={styles.title}>Sign Up</p>
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.nameFields}>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>First Name*</p>
                                    <input
                                        id="firstName"
                                        onChange={props.handleChange('firstName')}
                                        value={props.values.firstName}
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Last Name*</p>
                                    <input
                                        id="lastName"
                                        onChange={props.handleChange('lastName')}
                                        value={props.values.lastName}
                                        className={styles.inputField}
                                    />
                                </div>
                            </div>
                            <div className={styles.contactFields}>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Mobile Number*</p>
                                    <input
                                        id="mobile"
                                        onChange={props.handleChange('mobile')}
                                        value={props.values.mobile}
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Email ID*</p>
                                    <input
                                        id="email"
                                        onChange={props.handleChange('email')}
                                        value={props.values.email}
                                        className={styles.inputField}
                                    />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Name of Organisation</p>
                                <input
                                    id="orgName"
                                    onChange={props.handleChange('orgName')}
                                    value={props.values.orgName}
                                    className={styles.inputField}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={styles.subtitle}>Already have an account? Log In.</p>
                            <Button label="Next" type="blue" pressed={props.handleSubmit} className={styles.submitBtn} />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Signup;
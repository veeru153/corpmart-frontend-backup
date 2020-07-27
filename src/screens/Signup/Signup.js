import React from 'react';
import styles from './Signup.module.css';
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter, Link } from 'react-router-dom';

const Signup = (props) => {
    return (
        <div className={styles.Signup}>
            <Formik
                initialValues={{ firstName: '', lastName: '', countryCode: '+91', mobile: '', email: '', orgName: '' }}
                onSubmit={ async (values, actions) => {
                    let payload = {
                        email: values.email,
                        first_name: values.firstName,
                        last_name: values.lastName,
                        country_code: parseInt(values.countryCode.substr(1)),
                        mobile: parseInt(values.mobile),
                        organisation_name: values.orgName,
                    }
                    try {
                        let req = await Axios.post('/signup/?format=json', payload);
                        console.log(req.data);
                    } catch (e) { console.log(e);}

                    try {
                        let otp = await Axios.post('/generate_otp/?format=json', {
                            email: values.email
                        })
                        console.log(otp.data);
                    } catch (e) { console.log(e); }
                    props.history.push('/verification', payload);
                }}
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
                                    <div className={styles.mobileNoFields}>
                                        <input
                                            id="countryCode"
                                            onChange={props.handleChange('countryCode')}
                                            value={props.values.countryCode}
                                            className={styles.inputField}
                                            style={{ width: '100%' }}
                                        />
                                        <input
                                            id="mobile"
                                            onChange={props.handleChange('mobile')}
                                            value={props.values.mobile}
                                            className={styles.inputField}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
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
                            <p className={styles.subtitle}>
                                Already have an account? <Link to="/login">Log In</Link>.
                            </p>
                            <Button label="Next" type="blue" pressed={props.handleSubmit} className={styles.submitBtn} />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Signup);
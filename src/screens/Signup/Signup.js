import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter, Link } from 'react-router-dom';
import * as yup from 'yup';

const signupSchema = yup.object({
    firstName: yup.string().required("A First Name is required."),
    lastName: yup.string().required("A Last Name is required."),
    mobile: yup.string().required("A Mobile number is required.").matches(/^[0-9]*$/g, "Mobile numbers must only contain numbers.").length(10, "Mobile numbers should be 10 digits long."),
    email: yup.string().required("An Email address is required.").email("Invalid Email Address"),
    orgName: yup.string()
})

const Signup = (props) => {
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    return (
        <div className={styles.Signup}>
            <Formik
                initialValues={{ firstName: '', lastName: '', countryCode: '+91', mobile: '', email: '', orgName: '' }}
                validationSchema={signupSchema}
                validateOnBlur
                onSubmit={ async (values, actions) => {
                    setDisableBtn(true);
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
                    } catch (e) { console.log(e);}

                    try {
                        let otp = await Axios.post('/generate_otp/?format=json', {
                            email: values.email
                        })
                        props.history.push('/verification', {
                            payload: payload,
                            type: 'signup'
                        });
                    } catch (e) { 
                        console.log(e.response); 
                        setError(true);
                        setErrorMsg("An Error Occured");
                        setDisableBtn(false);
                    }
                }}
            >
                {(props) => (
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <p className={styles.title}>Sign Up</p>
                            {error
                                ? <p className={styles.subtitle} style={{ color: 'red' }}>{errorMsg}</p> 
                                : null}
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.nameFields}>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>First Name*</p>
                                    <ErrorMessage name="firstName">
                                        {(msg) => {
                                            return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p> 
                                        }}
                                    </ErrorMessage> 
                                    <input
                                        id="firstName"
                                        onChange={props.handleChange('firstName')}
                                        value={props.values.firstName}
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Last Name*</p>
                                    <ErrorMessage name="lastName">
                                        {(msg) => {
                                            return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p> 
                                        }}
                                    </ErrorMessage> 
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
                                    <ErrorMessage name="mobile">
                                        {(msg) => {
                                            return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p> 
                                        }}
                                    </ErrorMessage> 
                                    <div className={styles.mobileNoFields}>
                                        <input
                                            id="countryCode"
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
                                    <ErrorMessage name="email">
                                        {(msg) => {
                                            return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p> 
                                        }}
                                    </ErrorMessage> 
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
                                <ErrorMessage name="orgName">
                                    {(msg) => {
                                        return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p> 
                                    }}
                                </ErrorMessage> 
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
                            <Button
                                label="Next"
                                type={disableBtn ? "#DADEE4" : "blue"}
                                color={disableBtn ? "black" : "white"}
                                pressed={props.handleSubmit}
                                className={styles.submitBtn}
                                disabled={disableBtn}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Signup);
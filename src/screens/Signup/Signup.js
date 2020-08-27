import React, { useState, useEffect } from 'react';
import styles from './Signup.module.css';
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter, Link } from 'react-router-dom';
import * as yup from 'yup';
import { validateToken } from '../../components/util';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';

const signupSchema = yup.object({
    firstName: yup.string().required("A First Name is required."),
    lastName: yup.string().required("A Last Name is required."),
    mobile: yup.string().required("A Mobile number is required.").matches(/^[0-9]*$/g, "Mobile numbers must only contain numbers.").length(10, "Mobile numbers should be 10 digits long."),
    email: yup.string().required("An Email address is required.").email("Invalid Email Address"),
    orgName: yup.string()
})

const Signup = (props) => {
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [disableBtn, setDisableBtn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    document.title = "Sign Up - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0,0), []);

    useEffect(() => {
        async function validateSession() {
            let validity = await validateToken();
            if (validity && validity.status == 200) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }
        validateSession();
    }, [])

    if (loggedIn) props.history.push('/');

    return (
        <div>
            <NavbarMobile />
            <Navbar />
            <div className={styles.Signup}>
                <Formik
                    initialValues={{ firstName: '', lastName: '', countryCode: '+91', mobile: '', email: '', orgName: '' }}
                    validationSchema={signupSchema}
                    validateOnBlur
                    onSubmit={async (values, actions) => {
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

                            try {
                                let otp = await Axios.post('/generate_otp/?format=json', {
                                    email: values.email
                                })
                                props.history.push('/verification', {
                                    payload: payload,
                                    type: 'signup',
                                    mobile: payload.mobile,
                                });
                            } catch (e) {
                                setError(true);
                                setErrorMsg("An Error Occurred");
                                setDisableBtn(false);
                            }

                        } catch (e) { 
                            console.log(e.response);
                            if(e.response.data.mobile) {
                                setErrorMsg('User with this Mobile Number already exists');
                            } else if(e.response.data.email) {
                                setErrorMsg('User with this Email ID already exists');
                            } else {
                                setErrorMsg('An error occureed');
                            }
                            setError(true);
                            setDisableBtn(false);
                        }
                    }}
                >
                    {(props) => (
                        <form className={styles.form}>
                            <div className={styles.header}>
                                <p className={styles.title}>Sign Up</p>
                                {error
                                    ? <p 
                                    className={styles.subtitle} 
                                    style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                >{errorMsg}</p>
                                    : null}
                            </div>
                            <div className={styles.formFields}>
                                <div className={styles.nameFields}>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>First Name*</p>
                                        <ErrorMessage name="firstName">
                                        {(msg) => {
                                            return <p 
                                                className={styles.subtitle} 
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                        </ErrorMessage>
                                        <input
                                            id="firstName"
                                            onChange={props.handleChange('firstName')}
                                            value={props.values.firstName}
                                            className={styles.inputField}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Last Name*</p>
                                        <ErrorMessage name="lastName">
                                        {(msg) => {
                                            return <p 
                                                className={styles.subtitle} 
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                        </ErrorMessage>
                                        <input
                                            id="lastName"
                                            onChange={props.handleChange('lastName')}
                                            value={props.values.lastName}
                                            className={styles.inputField}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className={styles.contactFields}>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Mobile Number*</p>
                                        <ErrorMessage name="mobile">
                                        {(msg) => {
                                            return <p 
                                                className={styles.subtitle} 
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                        </ErrorMessage>
                                        <div className={styles.mobileNoFields}>
                                            <input
                                                id="countryCode"
                                                value={props.values.countryCode}
                                                className={styles.inputField}
                                                style={{ width: '100%' }}
                                                autoComplete="off"
                                                contentEditable="false"
                                                disabled="true"
                                            />
                                            <input
                                                id="mobile"
                                                onChange={props.handleChange('mobile')}
                                                value={props.values.mobile}
                                                className={styles.inputField}
                                                style={{ width: '100%' }}
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Email ID*</p>
                                        <ErrorMessage name="email">
                                        {(msg) => {
                                            return <p 
                                                className={styles.subtitle} 
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                        </ErrorMessage>
                                        <input
                                            id="email"
                                            onChange={props.handleChange('email')}
                                            value={props.values.email}
                                            className={styles.inputField}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Name of Organisation</p>
                                    <ErrorMessage name="orgName">
                                    {(msg) => {
                                            return <p 
                                                className={styles.subtitle} 
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                    </ErrorMessage>
                                    <input
                                        id="orgName"
                                        onChange={props.handleChange('orgName')}
                                        value={props.values.orgName}
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className={styles.subtitle}>
                                    Already have an account? <Link to="/login">Log In</Link>.
                            </p>
                                <Button
                                    label="Next"
                                    type={disableBtn ? "#DADEE4" : "orange"}
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
        </div>
    )
}

export default withRouter(Signup);
import React, { useState, useEffect } from 'react';
import styles from './ListingForm.module.css'
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import { withRouter } from 'react-router-dom';
import { validateToken } from '../../components/util';
import Axios from '../../axios';
import FormDropdown from '../../components/UI/FormDropdown/FormDropdown';
import stateList from '../../components/FilterSort/filterOptions/State/stateList';
import * as yup from 'yup';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';

const countryList = [
    { name: 'India', checked: false },
    { name: 'Other', checked: false },
]

const ListingForm = (props) => {
    const [previewMode, setPreviewMode] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [disableBtn, setDisableBtn] = useState(false);

    document.title = "List Your Business - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0,0), []);

    let listingSchema;

    if(loggedIn) {
        listingSchema = yup.object({
            businessName: yup.string().required("Business Name is required."),
            state: yup.string().required("State is required."),
            country: yup.string().required("Country is required."),
            sellingPrice: yup.string().required("Selling Price is required.")
        })
    } else {
        listingSchema = yup.object({
            firstName: yup.string().required("First Name is required."),
            lastName: yup.string().required("Last Name is required."),
            mobileNo: yup.string().required("A Mobile number is required.").matches(/^[0-9]*$/g, "Mobile numbers must only contain numbers.").length(10, "Mobile numbers should be 10 digits long."),
            emailId: yup.string().required("An Email address is required.").email("Invalid Email Address"),
            businessName: yup.string().required("Business Name is required."),
            state: yup.string().required("State is required."),
            country: yup.string().required("Country is required."),
            sellingPrice: yup.string().required("Selling Price is required.")
        })
    }

    useEffect(() => {
        async function validateSession() {
            let validity = await validateToken();
            if (validity.status == 200) {
                setUser(validity.data);
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }
        validateSession();
    }, [])

    let initVals;

    if (props.location.state && props.location.state.type == 'preview') {
        initVals = props.location.state.formPayload;
        if (previewMode == false) setPreviewMode(true);
    } else {
        if (loggedIn) {
            initVals = {
                firstName: user.first_name, lastName: user.last_name, mobileNo: user.mobile, emailId: user.email,
                businessName: '', state: '', country: '', sellingPrice: ''
            };
        } else {
            initVals = {
                firstName: '', lastName: '', mobileNo: '', emailId: '',
                businessName: '', state: '', country: '', sellingPrice: ''
            };
        }
    }

    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <div className={styles.ListingForm}>
                <Formik
                    initialValues={initVals}
                    validationSchema={listingSchema}
                    validateOnBlur
                    onSubmit={async (values, actions) => {
                        setDisableBtn(true);
                        if (previewMode) {
                            if (loggedIn) {
                                props.history.push('/additional-data', {
                                    formPayload: values
                                })
                            } else {
                                // User is logged out: check if user exists
                                let res;
                                // Checking if user exists. 
                                try {
                                    res = await Axios.post('/generate_otp/', {
                                        mobile: values.mobileNo
                                    });
                                } catch (e) {
                                    res = e.response;
                                    console.log(e.response);
                                    setDisableBtn(false);
                                }
                                // res.status == 200 means user exists and we have an OTP so redirect to verification so user can login
                                if (res.status == 200) {
                                    props.history.push('/verification', {
                                        type: 'listing',
                                        formPayload: values,
                                        mobile: values.mobileNo
                                    })

                                } else {
                                    // res.status != 200 means user doesn't exist and needs to sign up
                                    try {
                                        // User signs up
                                        res = await Axios.post('/signup/', {
                                            email: values.emailId,
                                            first_name: values.firstName,
                                            last_name: values.lastName,
                                            country_code: '91',
                                            mobile: parseInt(values.mobileNo),
                                            organisation_name: values.businessName
                                        })
                                    } catch (e) { console.log(e.response); }

                                    try {
                                        // Newly signed up user gets OTP
                                        res = await Axios.post('/generate_otp/', {
                                            mobile: values.mobileNo
                                        });
                                        // User should be signed up here and will have an OTP, redirect to /verification.
                                        props.history.push('/verification', {
                                            type: 'listing',
                                            formPayload: values,
                                            mobile: values.mobileNo
                                        })
                                    } catch (e) {
                                        console.log(e.response);
                                        setDisableBtn(false);
                                    }
                                }
                            }
                        } else {
                            props.history.push('/preview', {
                                type: 'preview',
                                formPayload: {
                                    ...values,
                                    firstName: loggedIn ? user.first_name : values.firstName,
                                    lastName: loggedIn ? user.last_name : values.lastName,
                                    mobileNo: loggedIn ? user.mobile : values.mobileNo,
                                    emailId: loggedIn ? user.email : values.emailId,
                                },
                            })
                        }
                    }}
                >
                    {(props) => (
                        <form className={styles.form}>
                            <div className={styles.header}>
                                <p className={styles.title}>List your Business</p>
                                <p className={styles.subtitle}>
                                    {
                                        previewMode
                                            ? "Review your listing before submitting"
                                            : "(mandatory fields are marked with *)"
                                    }
                                </p>
                            </div>
                            <div style={{ padding: '0 48px'}}>
                                {
                                    !previewMode && loggedIn
                                        ? null
                                        : <div className={styles.nameFields}>
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
                                }
                                {
                                    !previewMode && loggedIn
                                        ? null
                                        : <div className={styles.formGroup}>
                                            <p className={styles.inputLabel}>Mobile Number*</p>
                                            <ErrorMessage name="mobileNo">
                                                {(msg) => {
                                                    return <p
                                                        className={styles.subtitle}
                                                        style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                    >{msg}</p>
                                                }}
                                            </ErrorMessage>
                                            <input
                                                id="mobileNo"
                                                onChange={props.handleChange('mobileNo')}
                                                value={props.values.mobileNo}
                                                className={styles.inputField}
                                                autoComplete="off"
                                            />
                                        </div>
                                }
                                {
                                    !previewMode && loggedIn
                                        ? null
                                        : <div className={styles.formGroup}>
                                            <p className={styles.inputLabel}>Email ID*</p>
                                            <ErrorMessage name="emailId">
                                                {(msg) => {
                                                    return <p
                                                        className={styles.subtitle}
                                                        style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                    >{msg}</p>
                                                }}
                                            </ErrorMessage>
                                            <input
                                                id="emailId"
                                                onChange={props.handleChange('emailId')}
                                                value={props.values.emailId}
                                                className={styles.inputField}
                                                autoComplete="off"
                                            />
                                        </div>
                                }
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Business/Company Name*</p>
                                    <ErrorMessage name="businessName">
                                        {(msg) => {
                                            return <p
                                                className={styles.subtitle}
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                    </ErrorMessage>
                                    <input
                                        id="businessName"
                                        onChange={props.handleChange('businessName')}
                                        value={props.values.businessName}
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>State*</p>
                                    <ErrorMessage name="state">
                                        {(msg) => {
                                            return <p
                                                className={styles.subtitle}
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                    </ErrorMessage>
                                    <FormDropdown
                                        name="state"
                                        onChange={props.handleChange('state')}
                                        value={props.values.state}
                                        options={stateList}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Country*</p>
                                    <ErrorMessage name="country">
                                        {(msg) => {
                                            return <p
                                                className={styles.subtitle}
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                    </ErrorMessage>
                                    <FormDropdown
                                        name="country"
                                        onChange={props.handleChange('country')}
                                        value={props.values.country}
                                        options={countryList}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Expected Selling Price (in INR)</p>
                                    <ErrorMessage name="sellingPrice">
                                        {(msg) => {
                                            return <p
                                                className={styles.subtitle}
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                    </ErrorMessage>
                                    <input
                                        id="sellingPrice"
                                        onChange={props.handleChange('sellingPrice')}
                                        value={props.values.sellingPrice}
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className={styles.tos} style={{ display: previewMode ? 'block' : 'none' }}>
                                <p>By submitting this form, you agree to our Terms and Conditions and Privacy Policy.</p>
                            </div>
                            {
                                previewMode
                                    ? <Button
                                        label="Submit"
                                        type={disableBtn ? "#DADEE4" : "orange"}
                                        color={disableBtn ? "black" : "white"}
                                        pressed={props.handleSubmit}
                                        className={styles.submitBtn}
                                        disabled={disableBtn}
                                    />
                                    : <Button
                                        label="Continue"
                                        type={disableBtn ? "#DADEE4" : "orange"}
                                        color={disableBtn ? "black" : "white"}
                                        pressed={props.handleSubmit}
                                        className={styles.submitBtn}
                                        disabled={disableBtn}
                                    />
                            }
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default withRouter(ListingForm);
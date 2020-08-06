import React, { useState, useEffect } from 'react';
import styles from './ListingForm.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import { withRouter } from 'react-router-dom';
import { validateToken } from '../../components/util';
import Axios from '../../axios';

// TODO: Implement Dropdowns and Checkboxes

const ListingForm = (props) => {
    const [previewMode, setPreviewMode] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        async function validateSession() {
            let validity = await validateToken();
            if(validity.status == 200) {
                setUser(validity.data);
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }
        validateSession();
    }, [])

    let initVals;

    if(props.location.state && props.location.state.type == 'preview') {
        initVals = props.location.state.formPayload;
        if(previewMode == false) setPreviewMode(true);
    } else {
        if(loggedIn) {
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
        <div className={styles.ListingForm}>
        <Formik
            initialValues={initVals}
            onSubmit={ async (values, actions) => {
                if(previewMode) {
                    if(loggedIn) {
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
                            console.log(res.data);
                        } catch (e) { console.log(e); }
                        // res.status == 200 means user exists and we have an OTP so redirect to verification so user can login
                        if(res.status == 200) {
                            props.history.push('/verification', {
                                type: 'listing',
                                formPayload: values
                            })

                        } else {
                            // res.status != 200 means user doesn't exist and needs to sign up
                            try {
                                // User signs up
                                res = await Axios.post('/signup/', {
                                    email: values.email,
                                    first_name: values.firstName,
                                    last_name: values.lastName,
                                    mobile: parseInt(values.mobile),
                                    organisation_name: values.businessName,
                                })
                            } catch (e) { console.log(e); }

                            try {
                                // Newly signed up user gets OTP
                                res = await Axios.post('/generate_otp/', {
                                    mobile: values.mobileNo
                                });
                                console.log(res.data);
                                // User should be signed up here and will have an OTP, redirect to /verification.
                                props.history.push('/verification', {
                                    type: 'listing',
                                    formPayload: values
                                })
                            } catch (e) { console.log(e); }
                        }
                    }
                } else {
                    props.history.push('/preview', {
                        type: 'preview',
                        formPayload: {
                            ...values,
                            firstName: user.first_name, 
                            lastName: user.last_name, 
                            mobileNo: user.mobile, 
                            emailId: user.email,
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
                                ?   "Review your listing before submitting"
                                :   "(mandatory fields are marked with *)"
                            }  
                        </p>
                    </div>
                    <div>
                        {
                            !previewMode && loggedIn 
                            ? null 
                            : <div className={styles.nameFields}>
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
                        }
                        {
                            !previewMode && loggedIn
                            ? null
                            : <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Mobile Number*</p>
                                <input
                                    id="mobileNo"
                                    onChange={props.handleChange('mobileNo')}
                                    value={props.values.mobileNo}
                                    className={styles.inputField}
                                />
                            </div>
                        }
                        {
                            !previewMode && loggedIn
                            ? null
                            : <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Email ID*</p>
                                <input
                                    id="emailId"
                                    onChange={props.handleChange('emailId')}
                                    value={props.values.emailId}
                                    className={styles.inputField}
                                />
                            </div>
                        }
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Business/Company Name*</p>
                            <input
                                id="businessName"
                                onChange={props.handleChange('businessName')}
                                value={props.values.businessName}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>State*</p>
                            <input
                                id="state"
                                onChange={props.handleChange('state')}
                                value={props.values.state}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Country*</p>
                            <input
                                id="country"
                                onChange={props.handleChange('country')}
                                value={props.values.country}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Expected Selling Price (in INR)</p>
                            <input
                                id="sellingPrice"
                                onChange={props.handleChange('sellingPrice')}
                                value={props.values.sellingPrice}
                                className={styles.inputField}
                            />
                        </div>
                    </div>
                    <div className={styles.tos} style={{ display: previewMode ? 'block' : 'none' }}>
                        <p>By submitting this form, you agree to our Terms and Conditions and Privacy Policy.</p>
                    </div>
                    {
                        previewMode
                        ?   <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn}/>
                        :   <Button label="Continue" type="blue" pressed={props.handleSubmit} className={styles.submitBtn}/>
                    }
                </form>
            )}
        </Formik>
    </div>
    )
}

export default withRouter(ListingForm);
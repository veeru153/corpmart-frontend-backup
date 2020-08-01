import React, { useState } from 'react';
import styles from './ListingForm.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import { withRouter } from 'react-router-dom';

// TODO: Implement Dropdowns and Checkboxes

const ListingForm = (props) => {
    const [previewMode, setPreviewMode] = useState(false);

    let initVals;

    if(props.location.state && props.location.state.type == 'preview') {
        initVals = props.location.state.formPayload;
        if(previewMode == false) setPreviewMode(true);
    } else {
        // TODO: if logged in set values for first name, last name, mobileNo and emailId from user object
        initVals = {
            firstName: '', lastName: '', mobileNo: '', emailId: '',
            businessName: '', state: '', country: '', sellingPrice: ''
        };
    }

    return (
        <div className={styles.ListingForm}>
        <Formik
            initialValues={initVals}
            onSubmit={(values, actions) => {
                console.log(values);
                if(previewMode) {
                    // TODO: if logged out, check if user exists. If user exists, send email to /generate-opt and proceed. If user does not exist, create user and login.
                } else {
                    props.history.push('/preview', {
                        type: 'preview',
                        formPayload: values,
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
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Mobile Number*</p>
                            <input
                                id="mobileNo"
                                onChange={props.handleChange('mobileNo')}
                                value={props.values.mobileNo}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Email ID*</p>
                            <input
                                id="emailId"
                                onChange={props.handleChange('emailId')}
                                value={props.values.emailId}
                                className={styles.inputField}
                            />
                        </div>
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
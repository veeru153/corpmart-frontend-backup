import React from 'react';
import styles from './ListingForm.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';

// TODO: Implement Dropdowns and Checkboxes

const ListingForm = () => {
    return (
        <div className={styles.ListingForm}>
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
                        <p className={styles.title}>List your Business</p>
                        <p className={styles.subtitle}>(mandatory fields are marked with *)</p>
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
                            <p className={styles.inputLabel}>Business Name*</p>
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
                    </div>
                    <div className={styles.header}>
                        <p className={styles.title2}>Additional Information</p>
                        <p className={styles.subtitle2}>Businesses with additional information are likely to be listed faster.</p>
                    </div>
                    <div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Type of Company</p>
                            <input
                                id="companyType"
                                onChange={props.handleChange('companyType')}
                                value={props.values.companyType}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Sub-type</p>
                            <input
                                id="subtype"
                                onChange={props.handleChange('subtype')}
                                value={props.values.subtype}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Industry</p>
                            <input
                                id="industry"
                                onChange={props.handleChange('industry')}
                                value={props.values.industry}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Sale Description</p>
                            <textarea
                                id="saleDesc"
                                onChange={props.handleChange('saleDesc')}
                                value={props.values.saleDesc}
                                rows={4}
                                className={[styles.inputField, styles.saleDesc].join(' ')}
                            ></textarea>
                        </div>
                        <div className={styles.yearAgeFields}>
                            <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Year of Incorporation</p>
                                <input
                                    id="incorporationYear"
                                    onChange={props.handleChange('incorporationYear')}
                                    value={props.values.incorporationYear}
                                    className={styles.inputField}
                                />
                            </div>
                            <p className={styles.orText}>OR</p>
                            <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Age of Company</p>
                                <input
                                    id="companyAge"
                                    onChange={props.handleChange('companyAge')}
                                    value={props.values.companyAge}
                                    className={styles.inputField}
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <p>Do you have GST no.?</p>
                        </div>
                        <div className={styles.formGroup}>
                            <p>Do you have a Bank Account?</p>
                        </div>
                        <div className={styles.formGroup}>
                            <p>Do you have an Import/Export Code?</p>
                        </div>
                        <div className={styles.formGroup}>
                            <p>Do you have any Licenses or Registrations?</p>
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Mention, if any</p>
                            <input
                                id="licenseDetails"
                                onChange={props.handleChange('licenseDetails')}
                                value={props.values.licenseDetails}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Capital (in INR)</p>
                            <input
                                id="capital"
                                onChange={props.handleChange('capital')}
                                value={props.values.capital}
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
                    <div className={styles.tos}>
                        <p>By submitting this form, you agree to our Terms and Conditions and Privacy Policy.</p>
                    </div>
                    <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn}/>
                </form>
            )}
        </Formik>
    </div>
    )
}

export default ListingForm;
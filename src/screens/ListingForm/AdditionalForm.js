import React from 'react';
import styles from './ListingForm.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import { Link, withRouter } from 'react-router-dom';
import Axios from '../../axios';

// TODO: Implement Dropdowns

const AdditionalForm = (props) => {
    // TODO: Uncomment this code to allow proper redirection
    // if(!props.location.state || props.location.state == undefined) {
    //     props.history.push('/list-your-business');
    // }

    return (
        <div className={styles.ListingForm}>
        <Formik
            initialValues={{
                companyType: '', subtype: '', industry: '', saleDesc: '',
                incorporationYear: '', companyAge: '',
                gst: false, bankAcc: false, ieCode: false, licenses: false, licenseDetails: '',
                authCapital: '', paidupCapital: '',
            }}
            onSubmit={ async (values, actions) => {
                let prevState = props.location.state.payload;
                try {
                    let res = await Axios.post('/post-business', {
                        business_name: prevState.businessName,
                        state: prevState.state,
                        country: prevState.country,
                        company_type: values.companyType,
                        company_type_others_description: "",
                        sub_type: values.subtype,
                        sub_type_others_description: "",
                        industry: values.industry,
                        industries_others_description: "",
                        sale_description: values.saleDesc,
                        year_of_incorporation: values.incorporationYear,
                        has_gst_number: values.gst,
                        has_bank_account: values.bankAcc,
                        has_import_export_code: values.ieCode,
                        has_other_license: values.licenses,
                        other_license: "",
                        authorised_capital: values.authCapital,
                        paidup_capital: values.paidupCapital,
                        user_defined_selling_price: prevState.sellingPrice
                    })
                    console.log(res);
                } catch (e) { console.log(e); }
            }}
        >
            {(props) => (
                <form className={styles.form}>
                    <div className={styles.header}>
                        <p className={styles.title}>Additional Information</p>
                        <p className={styles.subtitle}>Businesses with additional information are likely to be listed faster.</p>
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
                        <div className={[styles.formGroup, styles.optionGroups].join(' ')}>
                            <div><p>Do you have GST no.?</p></div>
                            <div>
                                {<Button 
                                    label="Yes" 
                                    type={props.values.gst ? "blue" : "white"}
                                    color={props.values.gst ? "white" : "black"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('gst', true)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                            <div>
                                {<Button 
                                    label="No" 
                                    type={props.values.gst ? "white" : "orange"}
                                    color={props.values.gst ? "black" : "white"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('gst', false)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                        </div>
                        <div className={[styles.formGroup, styles.optionGroups].join(' ')}>
                            <div><p>Do you have a Bank Account?</p></div>
                            <div>
                                {<Button 
                                    label="Yes" 
                                    type={props.values.bankAcc ? "blue" : "white"}
                                    color={props.values.bankAcc ? "white" : "black"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('bankAcc', true)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                            <div>
                                {<Button 
                                    label="No" 
                                    type={props.values.bankAcc ? "white" : "orange"}
                                    color={props.values.bankAcc ? "black" : "white"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('bankAcc', false)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                        </div>
                        <div className={[styles.formGroup, styles.optionGroups].join(' ')}>
                            <div><p>Do you have an Import/Export Code?</p></div>
                            <div>
                                {<Button 
                                    label="Yes" 
                                    type={props.values.ieCode ? "blue" : "white"}
                                    color={props.values.ieCode ? "white" : "black"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('ieCode', true)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                            <div>
                                {<Button 
                                    label="No" 
                                    type={props.values.ieCode ? "white" : "orange"}
                                    color={props.values.ieCode ? "black" : "white"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('ieCode', false)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                        </div>
                        <div className={[styles.formGroup, styles.optionGroups].join(' ')}>
                            <div><p>Do you have any Licenses or Registrations?</p></div>
                            <div>
                                {<Button 
                                    label="Yes" 
                                    type={props.values.licenses ? "blue" : "white"}
                                    color={props.values.licenses ? "white" : "black"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('licenses', true)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
                            <div>
                                {<Button 
                                    label="No" 
                                    type={props.values.licenses ? "white" : "orange"}
                                    color={props.values.licenses ? "black" : "white"}
                                    pressed={(e) => {
                                        e.preventDefault();
                                        props.setFieldValue('licenses', false)
                                    }}
                                    className={styles.optionBtn}
                                />}
                            </div>
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
                            <p className={styles.inputLabel}>Authorised Capital (in INR)</p>
                            <input
                                id="authCapital"
                                onChange={props.handleChange('authCapital')}
                                value={props.values.authCapital}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.inputLabel}>Paid-Up Capital (in INR)</p>
                            <input
                                id="paidupCapital"
                                onChange={props.handleChange('paidupCapital')}
                                value={props.values.paidupCapital}
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

export default AdditionalForm;
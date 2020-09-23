import React, { useState, useEffect } from 'react';
import styles from './ListingForm.module.css'
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import Cookies from 'universal-cookie';
import FormDropdown from '../../components/UI/FormDropdown/FormDropdown';
import * as yup from 'yup';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';

import typeList from '../../components/FilterSort/filterOptions/Type/typeList';
import subTypeList from '../../components/FilterSort/filterOptions/Type/subTypeList';
import industryList from '../../components/FilterSort/filterOptions/Industry/industryList';

const d = new Date();

const formSchema = yup.object({
    companyType: yup.string().notRequired(),
    subtype: yup.string().notRequired(),
    industry: yup.string().notRequired(),
    saleDesc: yup.string().notRequired(),
    incorporationYear: yup.number().max(parseInt(d.getFullYear()), "Year of Incorporation cannot be greater than the current year."),
    companyAge: yup.number().min(0, "Age of Company cannot be negative."),
    gst: yup.boolean(),
    bankAcc: yup.boolean(),
    roc: yup.boolean(),
    licenses: yup.boolean(),
    licenseDetails: yup.string().notRequired(),
    authCapital: yup.string().notRequired().matches(/^[0-9]*$/g, "Authorised Capital can only contain numbers."),
    paidupCapital: yup.string().notRequired().matches(/^[0-9]*$/g, "Paid-up Capital can only contain numbers."),
})

const AdditionalForm = (props) => {
    // if (!props.location.state || props.location.state == undefined) {
    //     props.history.push('/list-your-business');
    // }

    document.title = "List Your Business - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0, 0), []);

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [submitting, setSubmitting] = useState(false);

    let d = new Date();
    const cookies = new Cookies();
    let token = cookies.get('userToken');

    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <div className={styles.ListingForm}>
                <Formik
                    initialValues={{
                        companyType: '', subtype: '', industry: '', industryOther: '', saleDesc: '',
                        incorporationYear: parseInt(d.getFullYear()), companyAge: 0,
                        gst: false, bankAcc: false, roc: false, licenses: false, licenseDetails: '',
                        authCapital: '', paidupCapital: '',
                    }}
                    validationSchema={formSchema}
                    validateOnBlur
                    onSubmit={async (values, actions) => {
                        setSubmitting(true);
                        let { formPayload } = props.location.state;
                        let applicationData = {
                            verified_by: "",
                            business_name: formPayload.businessName,
                            state: formPayload.state,
                            country: formPayload.country,
                            company_type: values.companyType,
                            company_type_others_description: "",
                            sub_type: values.subtype,
                            sub_type_others_description: values.subtype,
                            industry: values.industry,
                            industries_others_description: values.industryOther,
                            sale_description: values.saleDesc,
                            year_of_incorporation: parseInt(values.incorporationYear),
                            has_gst_number: values.gst,
                            has_bank_account: values.bankAcc,
                            roc_up_to_date: values.roc,
                            has_other_license: values.licenses,
                            other_license: "",
                            authorised_capital: parseInt(values.authCapital),
                            paidup_capital: parseInt(values.paidupCapital),
                            user_defined_selling_price: formPayload.sellingPrice
                        }
                        try {
                            let res = await Axios.post('/post-business', applicationData, {
                                headers: {
                                    "Authorization": `Token ${token}`,
                                    "Content-Type": "application/json"
                                }
                            })
                            props.history.push('/success');
                        } catch (e) {
                            console.log(e.response);
                            setError(true);
                        }
                    }}
                >
                    {(props) => (
                        <form className={styles.form}>
                            <div className={styles.header}>
                                <p className={styles.title}>Additional Information</p>
                                <p className={styles.subtitle}>Businesses with additional information are likely to be listed faster.</p>
                                {error
                                    ? <p
                                        className={styles.subtitle}
                                        style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                    >{errorMsg}</p>
                                    : null}
                            </div>
                            <div style={{ padding: '0 48px'}}>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Type of Company</p>
                                    <FormDropdown
                                        name="companyType"
                                        onChange={props.handleChange('companyType')}
                                        value={props.values.companyType}
                                        options={typeList}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Sub-type</p>
                                    <FormDropdown
                                        name="subtype"
                                        onChange={props.handleChange('subtype')}
                                        value={props.values.subtype}
                                        options={subTypeList}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Industry</p>
                                    <FormDropdown
                                        name="industry"
                                        onChange={props.handleChange('industry')}
                                        value={props.values.industry}
                                        options={industryList}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>If Industry is of type "Other", describe: </p>
                                    <input
                                        id="industryOther"
                                        onChange={props.handleChange('industryOther')}
                                        value={props.values.industryOther}
                                        className={styles.inputField}
                                        autoComplete="off"
                                        disabled={props.values.industry.toLowerCase() != "others"}
                                        style={{ cursor: props.values.industry.toLowerCase() != "others" ? 'not-allowed' : 'text' }}
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
                                        autoComplete="off"
                                    ></textarea>
                                </div>
                                <div className={styles.yearAgeFields}>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Year of Incorporation</p>
                                        <ErrorMessage name="incorporationYear">
                                            {(msg) => {
                                                return <p
                                                    className={styles.subtitle}
                                                    style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                >{msg}</p>
                                            }}
                                        </ErrorMessage>
                                        <input
                                            id="incorporationYear"
                                            onChange={(e) => {
                                                let currYear = parseInt(d.getFullYear());
                                                props.setFieldValue('incorporationYear', e.target.value)
                                                props.setFieldValue('companyAge', currYear - parseInt(e.target.value))
                                            }}
                                            value={isNaN(props.values.incorporationYear) ? "" : props.values.incorporationYear}
                                            className={styles.inputField}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <p className={styles.orText}>OR</p>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Age of Company</p>
                                        <ErrorMessage name="companyAge">
                                            {(msg) => {
                                                return <p
                                                    className={styles.subtitle}
                                                    style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                >{msg}</p>
                                            }}
                                        </ErrorMessage>
                                        <input
                                            id="companyAge"
                                            onChange={(e) => {
                                                let currYear = parseInt(d.getFullYear());
                                                props.setFieldValue('incorporationYear', currYear - parseInt(e.target.value))
                                                props.setFieldValue('companyAge', e.target.value)
                                            }}
                                            value={isNaN(props.values.companyAge) ? "" : props.values.companyAge}
                                            className={styles.inputField}
                                            autoComplete="off"
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
                                    <div><p>Is ROC Filing up to date?</p></div>
                                    <div>
                                        {<Button
                                            label="Yes"
                                            type={props.values.roc ? "blue" : "white"}
                                            color={props.values.roc ? "white" : "black"}
                                            pressed={(e) => {
                                                e.preventDefault();
                                                props.setFieldValue('roc', true)
                                            }}
                                            className={styles.optionBtn}
                                        />}
                                    </div>
                                    <div>
                                        {<Button
                                            label="No"
                                            type={props.values.roc ? "white" : "orange"}
                                            color={props.values.roc ? "black" : "white"}
                                            pressed={(e) => {
                                                e.preventDefault();
                                                props.setFieldValue('roc', false)
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
                                        autoComplete="off"
                                        disabled={!props.values.licenses}
                                        style={{ cursor: !props.values.licenses ? 'not-allowed' : 'text' }}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Authorised Capital (in INR)</p>
                                    <input
                                        id="authCapital"
                                        onChange={props.handleChange('authCapital')}
                                        value={props.values.authCapital}
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <p className={styles.inputLabel}>Paid-Up Capital (in INR)</p>
                                    <input
                                        id="paidupCapital"
                                        onChange={props.handleChange('paidupCapital')}
                                        value={props.values.paidupCapital}
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <Button 
                                label="Submit" 
                                type={submitting ? "#DADEE4" : "orange"}
                                color={submitting ? "#676767" : "white"}
                                pressed={props.handleSubmit}
                                className={styles.submitBtn}
                                style={{ margin: submitting ? '15px 0 0' : '15px 0'}}
                                disabled={submitting}
                            />
                            {submitting
                              ? <p className={styles.submittingText}>Submitting...</p>
                              : null 
                            }
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AdditionalForm;
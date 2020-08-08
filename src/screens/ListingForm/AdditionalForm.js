import React from 'react';
import styles from './ListingForm.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import Cookies from 'universal-cookie';
import FormDropdown from '../../components/UI/FormDropdown/FormDropdown';

import typeList from '../../components/FilterSort/filterOptions/Type/typeList';
import subTypeList from '../../components/FilterSort/filterOptions/Type/subTypeList';
import industryList from '../../components/FilterSort/filterOptions/Industry/industryList';

const AdditionalForm = (props) => {
    if(!props.location.state || props.location.state == undefined) {
        props.history.push('/list-your-business');
    }

    let d = new Date();
    const cookies = new Cookies();
    let token = cookies.get('userToken');

    return (
        <div className={styles.ListingForm}>
            <Formik
                initialValues={{
                    companyType: '', subtype: '', industry: '', saleDesc: '',
                    incorporationYear: d.getFullYear(), companyAge: '',
                    gst: false, bankAcc: false, ieCode: false, licenses: false, licenseDetails: '',
                    authCapital: '', paidupCapital: '',
                }}
                onSubmit={async (values, actions) => {
                    let { formPayload } = props.location.state;
                    let applicationData = {
                        verified_by: "",
                        business_name: formPayload.businessName,
                        state: formPayload.state,
                        country: formPayload.country,
                        company_type: values.companyType,
                        company_type_others_description: "",
                        sub_type: values.subtype,
                        sub_type_others_description: "",
                        industry: values.industry,
                        industries_others_description: "",
                        sale_description: values.saleDesc,
                        year_of_incorporation: parseInt(values.incorporationYear),
                        has_gst_number: values.gst,
                        has_bank_account: values.bankAcc,
                        has_import_export_code: values.ieCode,
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
                        props.history.push('/');
                    } catch (e) { console.log(e.response); }
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
                        <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn} />
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AdditionalForm;
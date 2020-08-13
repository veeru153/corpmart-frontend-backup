import React from 'react';
import styles from './Verification.module.css'
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import * as yup from 'yup';

const otpSchema = {
    otp: yup.string().required("OTP is required.").matches(/^[0-9]*$/g, "OTP must only contain numbers.").length(6, "OTP must be 6 digits long.")
}

const Verification = (props) => {
    if(props.location.state == undefined) props.history.pop();
    const cookies = new Cookies();

    return (
        <div className={styles.Verification}>
            <Formik
                initialValues={{ otp: '' }}
                validationSchema={otpSchema}
                validateOnBlur
                onSubmit={ async (values, actions) => {
                    const prevState = props.location.state;
                    let payload;
                    if(prevState.type == 'listing') {
                        let { formPayload } = prevState;
                        // if redirected from listing, login and redirect to additional form with the previous data
                        payload = {
                            mobile: formPayload.mobileNo,
                            otp: parseInt(values.otp)
                        }
                        try {
                            let req = await Axios.post('/login/?format=json', payload);
                            cookies.set('userToken', req.data.token, {
                                path: '/',
                                sameSite: 'strict',
                                maxAge: 172800,
                            })
                            props.history.push('/additional-data', {
                                formPayload: formPayload
                            })
                        } catch (e) { console.log(e.response); }

                    } else {
                        // otherwise, continue the login-signup and redirect to landing
                        if(prevState.payload.email) {
                            payload = {
                                email: prevState.payload.email,
                                otp: parseInt(values.otp),
                            }
                        } else {
                            payload = {
                                mobile: prevState.payload.mobile,
                                otp: parseInt(values.otp),
                            }
                        }
    
                        try {
                            let req = await Axios.post('/login/?format=json', payload);
                            cookies.set('userToken', req.data.token, {
                                path: '/',
                                sameSite: 'strict',
                                maxAge: 172800,
                            })
                            props.history.push('/');
                        } catch (e) { console.log(e.response); }
                    }
                }}
            >
                {(props) => (
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <p className={styles.title}>Verification</p>
                            <p className={styles.subtitle}>A One-Time-Password ( OTP ) has been sent to your Mobile number and Email ID.</p>
                        </div>
                        <div>
                            <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Enter OTP</p>
                                <ErrorMessage name="otp">
                                    {(msg) => {
                                        return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p> 
                                    }}
                                </ErrorMessage> 
                                <input
                                    id="otp"
                                    onChange={props.handleChange('otp')}
                                    value={props.values.otp}
                                    className={styles.inputField}
                                />
                            </div>
                        </div>
                        <div>
                            <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn} />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Verification);
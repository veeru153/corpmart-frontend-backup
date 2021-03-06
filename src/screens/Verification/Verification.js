import React, { useState, useEffect } from 'react';
import styles from './Verification.module.css'
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import * as yup from 'yup';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';

const otpSchema = yup.object({
    otp: yup.string().required("OTP is required.").matches(/^[0-9]*$/g, "OTP must only contain numbers.").length(5, "OTP must be 5 digits long.")
})

const Verification = (props) => {
    if (props.location.state == undefined) props.history.pop();
    const [resend, setResend] = useState(false);
    const [timer, setTimer] = useState(60);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const prevState = props.location.state;
    const cookies = new Cookies();

    document.title = "Verification - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0,0), []);
    
    useEffect(() => {
        if (timer <= 0) {
            setResend(true);
        } else {
            setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        }
    })

    const resendOtp = async () => {
        try {
            setError(false);
            let req = await Axios.post('/generate_otp/?format=json', {
                mobile: prevState.mobile
            });
        } catch (e) {
            setErrorMsg('An Error Occurred. Please try again.');
            setError(true);
        }
        setResend(false);
        setTimer(60);
    }

    return (
        <div>
            <NavbarMobile />
            <Navbar />
            <div className={styles.Verification}>
                <Formik
                    initialValues={{ otp: '' }}
                    validationSchema={otpSchema}
                    validateOnBlur
                    onSubmit={async (values, actions) => {
                        setError(false);
                        let payload;
                        if (prevState.type == 'listing') {
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
                            } catch (e) {
                                console.log(e.response);
                                if(e.response.data.error.includes('OTP expired')) {
                                    setErrorMsg('OTP Expired. Please request a new OTP.');
                                    setError(true);
                                } else if(e.response.data.error.includes('Wrong Credentials')) {
                                    setErrorMsg('Incorrect OTP. Please try again.');
                                    setError(true);
                                } else {
                                    setErrorMsg('An Error Occured. Please try again.');
                                    setError(true);
                                }
                            }
                            if (cookies.get('userToken')) {
                                props.history.push('/additional-data', {
                                    formPayload: formPayload
                                })
                            }

                        } else {
                            // otherwise, continue the login-signup and redirect to registration success
                            if (prevState.payload.email) {
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
                            } catch (e) { 
                                console.log(e.response);
                                if(e.response.data.error.includes('OTP expired')) {
                                    setErrorMsg('OTP Expired. Please request a new OTP.');
                                    setError(true);
                                } else if(e.response.data.error.includes('Wrong Credentials')) {
                                    setErrorMsg('Incorrect OTP. Please try again.');
                                    setError(true);
                                } else {
                                    setErrorMsg('An Error Occured. Please try again.');
                                    setError(true);
                                }
                            }
                            if (cookies.get('userToken')) {
                                if(prevState == "signup")
                                    props.history.push('/success');
                                else
                                    props.history.push('/dashboard');
                            }
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
                                    {error
                                        ? <p 
                                            className={styles.subtitle} 
                                            style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                        >{errorMsg}</p>
                                        : null}
                                    <ErrorMessage name="otp">
                                    {(msg) => {
                                            return <p 
                                                className={styles.subtitle} 
                                                style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                            >{msg}</p>
                                        }}
                                    </ErrorMessage>
                                    <input
                                        id="otp"
                                        onChange={props.handleChange('otp')}
                                        value={props.values.otp}
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className={styles.subtitle}>Didn't receive the OTP?</p>
                                {resend
                                    ? <p
                                        className={[styles.subtitle, styles.otpButton].join(' ')}
                                        onClick={resendOtp}
                                    >Resend OTP</p>
                                    : <p className={styles.subtitle}>You can request a new one in {timer}s. </p>}
                                <Button label="Submit" type="orange" pressed={props.handleSubmit} className={styles.submitBtn} />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default withRouter(Verification);
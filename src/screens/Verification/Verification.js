import React from 'react';
import styles from './Verification.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Verification = (props) => {
    if(props.location.state == undefined) props.history.push('/signup');
    const cookies = new Cookies();

    return (
        <div className={styles.Verification}>
            <Formik
                initialValues={{ otp: '' }}
                onSubmit={ async (values, actions) => {
                    const prevState = props.location.state;
                    let payload;
                    console.log(values);

                    if(prevState.email) {
                        payload = {
                            email: prevState.email,
                            otp: parseInt(values.otp),
                        }
                    } else {
                        payload = {
                            mobile: prevState.mobile,
                            otp: parseInt(values.otp),
                        }
                    }

                    try {
                        let req = await Axios.post('/login/?format=json', payload);
                        cookies.set('userId', req, {
                            path: '/',
                            sameSite: 'strict',
                            maxAge: 172800,
                        })
                        console.log(req.data);
                    } catch (e) { console.log(e); }

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
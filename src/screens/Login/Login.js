import React, { useState } from 'react';
import styles from './Login.module.css'
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter, Link } from 'react-router-dom';
import * as yup from 'yup';

const Login = (props) => {
    const [error, setError] = useState();
    const [errorMsg, setErrorMsg] = useState('');
    const [disableBtn, setDisableBtn] = useState(false);

    const validationSchema = yup.object({
        loginId: yup.lazy(val => {
            if (val != undefined && !isNaN(parseInt(val))) {
                return yup.string().required("A Login ID is required.").length(10, "Mobile numbers must be 10 digits long.")
            } else {
                return yup.string().required("A Login ID is required.").email("Invalid Email address")
            }
        })
    })

    const handleIdInput = (e, props) => {
        setError(false);
        props.setFieldValue('loginId', e.target.value);
    }

    return (
        <div className={styles.Login}>
            <Formik
                initialValues={{ loginId: '' }}
                validationSchema={validationSchema}
                validateOnBlur
                onSubmit={async (values, actions) => {
                    setDisableBtn(true);
                    let payload;
                    if (values.loginId.match(/((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)/g)) {
                        payload = { email: values.loginId }
                    } else {
                        payload = { mobile: values.loginId }
                    }
                    try {
                        let req = await Axios.post('/generate_otp/?format=json', payload)
                        props.history.push('/verification', {
                            payload: payload,
                            type: 'login'
                        })
                    } catch (e) {
                        setError(true);
                        if (e.response.data.startsWith("DoesNotExist")) {
                            setErrorMsg("This user does not exist.")
                        } else {
                            setErrorMsg("An Error Occured.")
                        }
                        setDisableBtn(false);
                    }
                }}
            >
                {(props) => (
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <p className={styles.title}>Log In</p>
                        </div>
                        <div>
                            <div className={styles.formGroup}>
                                <p className={styles.inputLabel}>Enter Mobile number OR Email ID</p>
                                {error
                                    ? <p className={styles.subtitle} style={{ color: 'red' }}>{errorMsg}</p>
                                    : null}
                                <ErrorMessage name="loginId">
                                    {(msg) => {
                                        return <p className={styles.subtitle} style={{ color: 'red' }}>{msg}</p>
                                    }}
                                </ErrorMessage>

                                <input
                                    id="loginId"
                                    onChange={(e, formikProps) => handleIdInput(e, props)}
                                    value={props.values.loginId}
                                    className={styles.inputField}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={styles.subtitle}>
                                Don’t have an account? <Link to="/signup">Sign Up</Link>.
                        </p>
                            <Button
                                label="Submit"
                                type={disableBtn ? "#DADEE4" : "blue"}
                                color={disableBtn ? "black" : "white"}
                                pressed={props.handleSubmit}
                                className={styles.submitBtn}
                                disabled={disableBtn}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Login);
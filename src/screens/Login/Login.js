import React from 'react';
import styles from './Login.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import Axios from '../../axios';
import { withRouter, Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className={styles.Login}>
        <Formik
            initialValues={{ loginId: '' }}
            onSubmit={ async (values, actions) => {
                let payload;
                if(values.loginId.match(/((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)/g)) {
                    payload = { email: values.loginId }
                } else {
                    payload = { mobile: values.loginId }
                }
                try {
                    let req = await Axios.post('/generate_otp/?format=json', payload)
                    console.log(req.data)
                } catch (e) { console.log(e); }
                props.history.push('/verification', {
                    payload: payload,
                    type: 'login'
                })
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
                            <input
                                id="loginId"
                                onChange={props.handleChange('loginId')}
                                value={props.values.loginId}
                                className={styles.inputField}
                            />
                        </div>  
                    </div>
                    <div>
                        <p className={styles.subtitle}>
                            Don’t have an account? <Link to="/signup">Sign Up</Link>.
                        </p>
                        <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn}/>
                    </div>
                </form>
            )}
        </Formik>
    </div>
    )
}

export default withRouter(Login);
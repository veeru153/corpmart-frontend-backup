import React from 'react';
import styles from './Login.module.css'
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';

const Login = () => {
    return (
        <div className={styles.Login}>
        <Formik
            initialValues={{ loginId: '' }}
            onSubmit={(values, actions) => {
                console.log(values);
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
                    <p className={styles.subtitle}>Don’t have an account? Sign Up.</p>
                    <Button label="Submit" type="blue" pressed={props.handleSubmit} className={styles.submitBtn}/>
                </form>
            )}
        </Formik>
    </div>
    )
}

export default Login;
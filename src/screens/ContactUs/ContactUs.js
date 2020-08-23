import React, { useEffect } from 'react';
import styles from './ContactUs.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import { Formik, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';
import { Facebook, LinkedIn, Twitter, Instagram } from '@material-ui/icons';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';
import * as yup from 'yup';

const contactSchema = yup.object({
    name: yup.string().required('Please eneter your name.'),
    emailId: yup.string().required('Please enter your email.').email('The email entered is invalid.'),
    query: yup.string().required('Please type in a suggestion/query.'),
})

const ContactUs = () => {

    document.title = "Contact Us - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0,0), []);

    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <div className={styles.ContactUs}>
                <div className={styles.ContactForm}>
                    <Formik
                        initialValues={{ name: '', emailId: '', query: '' }}
                        validationSchema={contactSchema}
                        onSubmit={async (values, actions) => {
                            console.log('submitted')
                            try {
                                let req = await Axios.post('/chatbot-request', {
                                    name: values.name,
                                    emailId: values.name,
                                    query: values.name,
                                })
                                console.log(req);
                            } catch (e) {
                                console.log(e.response);
                            }
                        }}
                    >
                        {(props) => (
                            <form className={styles.form}>
                                <div className={styles.header}>
                                    <p className={styles.title}>Contact us</p>
                                    <p className={styles.subtitle}>For general enquiries and technical support send your query using the form below.</p>
                                </div>
                                <div className={styles.formFields}>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Name</p>
                                        <ErrorMessage name="name">
                                            {(msg) => {
                                                return <p
                                                    className={styles.subtitle}
                                                    style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                >{msg}</p>
                                            }}
                                        </ErrorMessage>
                                        <input
                                            id="name"
                                            onChange={props.handleChange('name')}
                                            value={props.values.name}
                                            className={styles.inputField}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Email ID</p>
                                        <ErrorMessage name="emailId">
                                            {(msg) => {
                                                return <p
                                                    className={styles.subtitle}
                                                    style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                >{msg}</p>
                                            }}
                                        </ErrorMessage>
                                        <input
                                            id="emailId"
                                            onChange={props.handleChange('emailId')}
                                            value={props.values.emailId}
                                            className={styles.inputField}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Suggestion or query</p>
                                        <ErrorMessage name="query">
                                            {(msg) => {
                                                return <p
                                                    className={styles.subtitle}
                                                    style={{ color: 'red', margin: '2px 0', fontSize: 16 }}
                                                >{msg}</p>
                                            }}
                                        </ErrorMessage>
                                        <textarea
                                            id="query"
                                            onChange={props.handleChange('query')}
                                            value={props.values.query}
                                            rows={4}
                                            className={[styles.inputField, styles.query].join(' ')}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <Button label="Submit" type="orange" pressed={props.handleSubmit} className={styles.submitBtn} />
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className={styles.ContactDetails}>
                    <div className={styles.header}>
                        <p className={styles.title}>Company</p>
                    </div>
                    <div className={styles.address}>
                        <p>CorpMart</p>
                        <p>(a unit of M/s Priash Tradecorp)</p>
                        <p>Corporate Office:- G5.2/11, SF, Vatika India Next,</p>
                        <p>Sector 82, Gurugram, Haryana India, PIN:- 122004</p>
                    </div>
                    <div className={styles.header}>
                        <p className={styles.title}>Social</p>
                    </div>
                    <div>
                        <div className={styles.links}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                                <p style={{ margin: '0 12px' }}>Facebook</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                                <p style={{ margin: '0 12px' }}>LinkedIn</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter />
                                <p style={{ margin: '0 12px' }}>Twitter</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                                <p style={{ margin: '0 12px' }}>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;
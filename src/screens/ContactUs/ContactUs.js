import React from 'react';
import styles from './ContactUs.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import { Facebook, LinkedIn, Twitter, Instagram } from '@material-ui/icons';
import Footer from '../Landing/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <div className={styles.ContactUs}>
                <div className={styles.ContactForm}>
                    <Formik
                        initialValues={{ name: '', emailId: '', query: '' }}
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
                                        <input
                                            id="name"
                                            onChange={props.handleChange('name')}
                                            value={props.values.name}
                                            className={styles.inputField}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Email ID</p>
                                        <input
                                            id="emailId"
                                            onChange={props.handleChange('emailId')}
                                            value={props.values.emailId}
                                            className={styles.inputField}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <p className={styles.inputLabel}>Suggestion or query</p>
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
                        <p>CorpMart Pvt. Ltd.,</p>
                        <p>Helios Business Park,</p>
                        <p>Level 10, Wing C, 150 Outer Ring Road,</p>
                        <p>Kadubeesanahalli, Varthur Hobli,</p>
                        <p>Bangalore, India - 560103</p>
                        <p>CIN: U74900KA2015PTC082128</p>
                    </div>
                    <div className={styles.header}>
                        <p className={styles.title}>Social</p>
                    </div>
                    <div>
                        <div className={styles.links}>
                            <a href="https://www.facebook.com" target="_blank">
                                <Facebook />
                                <p style={{ margin: '0 12px' }}>Facebook</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.linkedin.com" target="_blank">
                                <LinkedIn />
                                <p style={{ margin: '0 12px' }}>LinkedIn</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.twitter.com" target="_blank">
                                <Twitter />
                                <p style={{ margin: '0 12px' }}>Twitter</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.instagram.com" target="_blank">
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
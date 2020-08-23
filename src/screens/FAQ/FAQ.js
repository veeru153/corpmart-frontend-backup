import React, { useEffect } from 'react';
import styles from './FAQ.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Footer from '../Landing/Footer/Footer';

const FAQ = () => {
    document.title = "Frequently Asked Questions - CorpMart - One Stop Solution for Business Acquisition";
    useEffect(() => window.scrollTo(0,0), []);

    return (
        <div>
            <NavbarMobile />
            <Navbar />
            <div className={styles.FAQ}>
                <div className={styles.header}>
                    <p className={styles.title}>Frequently Asked Questions</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>Is CORPMART buy and sell exchange Platform?</p>
                        <p>CORPMART is an exchange platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location.</p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>Is CORPMART a "business for sale" website?</p>
                        <p>Yes and no. Yes, because we have sell side profiles of businesses which are seeking a takeover. And no, because we are not a classifieds website, but a private network of members.</p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>Can businesses / investors from any country register on CORPMART?</p>
                        <p>CORPMART is a global platform with businesses and acquirers / investors from across the globe. Businesses and investors from any country or industry can register on CORPMART. The only pre- requisite is that the business needs to be a registered entity with the Government and should be able to produce proof of the same when required and investors should be working in a company or if self- employed must be able to produce proof of business.</p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>Should I use CorpMart instead of an advisor?</p>
                        <p>You should use CorpMart to gain qualified leads from large network of investors, buyers, lenders and advisors from across the globe. You may also want to connect with suitable advisors on CorpMart who can help negotiate and close your deal.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ;
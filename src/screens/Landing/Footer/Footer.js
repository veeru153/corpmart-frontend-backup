import React from 'react';
import styles from './Footer.module.css';
import { Facebook, LinkedIn, Twitter, Instagram } from '@material-ui/icons'

const Footer = () => {
    return (
        <>
            <div className={styles.FooterMobile}>
                <div className={styles.showcaseCorpmart}>
                    <div className={styles.showcase}>
                        <p className={styles.sectionHeader}>Businesses for Sale</p>
                        <p className={styles.links}>List your business</p>
                        <p className={styles.links}>Acquire a business</p>
                    </div>
                    <div className={styles.corpmart}>
                        <p className={styles.sectionHeader}>CorpMart</p>
                        <div className={styles.links}>
                            <Facebook />
                            <p style={{ margin: '0 12px' }}>Facebook</p>
                        </div>
                        <div className={styles.links}>
                            <LinkedIn />
                            <p style={{ margin: '0 12px' }}>LinkedIn</p>
                        </div>
                        <div className={styles.links}>
                            <Twitter />
                            <p style={{ margin: '0 12px' }}>Twitter</p>
                        </div>
                        <div className={styles.links}>
                            <Instagram />
                            <p style={{ margin: '0 12px' }}>Instagram</p>
                        </div>
                    </div>
                </div>
                <div className={styles.company}>
                    <p className={styles.sectionHeader}>Company</p>
                    <p className={styles.links}>Contact us</p>
                    <p className={styles.links}>Blogs</p>
                    <p className={styles.links}>Testimonials</p>
                    <p className={styles.links}>FAQs</p>
                </div>
            </div>
            <div className={styles.Footer}>
                <div className={styles.showcase}>
                    <p className={styles.sectionHeader}>Businesses for Sale</p>
                    <p className={styles.links}>List your business</p>
                    <p className={styles.links}>Acquire a business</p>
                </div>
                <div className={styles.company}>
                    <p className={styles.sectionHeader}>Company</p>
                    <p className={styles.links}>Contact us</p>
                    <p className={styles.links}>Blogs</p>
                    <p className={styles.links}>Testimonials</p>
                    <p className={styles.links}>FAQs</p>
                </div>
                <div className={styles.corpmart}>
                    <p className={styles.sectionHeader}>CorpMart</p>
                    <div className={styles.links}>
                        <Facebook />
                        <p style={{ margin: '0 12px' }}>Facebook</p>
                    </div>
                    <div className={styles.links}>
                        <LinkedIn />
                        <p style={{ margin: '0 12px' }}>LinkedIn</p>
                    </div>
                    <div className={styles.links}>
                        <Twitter />
                        <p style={{ margin: '0 12px' }}>Twitter</p>
                    </div>
                    <div className={styles.links}>
                        <Instagram />
                        <p style={{ margin: '0 12px' }}>Instagram</p>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div>Copyright © 2020 CorpMart Private Limited. All Rights Reserved.</div>
                <div className={styles.tos}>Terms of Use | Privacy Policy</div>
            </div>
        </>
    )
}

export default Footer;
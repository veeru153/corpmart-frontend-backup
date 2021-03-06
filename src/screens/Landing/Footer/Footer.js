import React from 'react';
import styles from './Footer.module.css';
import { Facebook, LinkedIn, Twitter, Instagram, WhatsApp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className={styles.FooterMobile}>
                <div className={styles.showcaseCorpmart}>
                    <div className={styles.showcase}>
                        <p className={styles.sectionHeader}>Businesses for Sale</p>
                        <p className={styles.links}>
                            <Link to="/list-your-business">List your business</Link>
                        </p>
                        <p className={styles.links}>
                            <Link to="/explore">Acquire a business</Link>
                        </p>
                    </div>
                    <div className={styles.corpmart}>
                        <p className={styles.sectionHeader}>CorpMart</p>
                        <div className={styles.links}>
                            <a href="https://wa.me/919711600250" target="_blank" rel="noopener noreferrer">
                                <WhatsApp />
                                <p style={{ margin: '0 12px' }}>WhatsApp</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.facebook.com/CorpMart-107352017757169" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                                <p style={{ margin: '0 12px' }}>Facebook</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.linkedin.com/in/corpmart-8075931b5" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                                <p style={{ margin: '0 12px' }}>LinkedIn</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://twitter.com/corp_mart" target="_blank" rel="noopener noreferrer">
                                <Twitter />
                                <p style={{ margin: '0 12px' }}>Twitter</p>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.instagram.com/corpmartindia" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                                <p style={{ margin: '0 12px' }}>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.company}>
                    <p className={styles.sectionHeader}>Company</p>
                    <p className={styles.links}>
                        <Link to="/contact-us">Contact us</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/blogs">Blogs</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/testimonials">Testimonials</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/faq">FAQs</Link>
                    </p>
                </div>
            </div>
            <div className={styles.Footer}>
                <div className={styles.showcase}>
                    <p className={styles.sectionHeader}>Businesses for Sale</p>
                    <p className={styles.links}>
                        <Link to="/list-your-business">List your business</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/explore">Acquire a business</Link>
                    </p>
                </div>
                <div className={styles.company}>
                    <p className={styles.sectionHeader}>Company</p>
                    <p className={styles.links}>
                        <Link to="/">Home</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/contact-us">Contact us</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/blogs">Blogs</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/testimonials">Testimonials</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/faq">FAQs</Link>
                    </p>
                    <p className={styles.links}>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </p>
                </div>
                <div className={styles.corpmart}>
                    <p className={styles.sectionHeader}>CorpMart</p>
                    <div className={styles.links}>
                        <a href="https://wa.me/919711600250" target="_blank" rel="noopener noreferrer">
                            <WhatsApp />
                            <p style={{ margin: '0 12px' }}>WhatsApp</p>
                        </a>
                    </div>
                    <div className={styles.links}>
                        <a href="https://www.facebook.com/CorpMart-107352017757169" target="_blank" rel="noopener noreferrer">
                            <Facebook />
                            <p style={{ margin: '0 12px' }}>Facebook</p>
                        </a>
                    </div>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/corpmart-8075931b5" target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                            <p style={{ margin: '0 12px' }}>LinkedIn</p>
                        </a>
                    </div>
                    <div className={styles.links}>
                        <a href="https://twitter.com/corp_mart" target="_blank" rel="noopener noreferrer">
                            <Twitter />
                            <p style={{ margin: '0 12px' }}>Twitter</p>
                        </a>
                    </div>
                    <div className={styles.links}>
                        <a href="https://www.instagram.com/corpmartindia" target="_blank" rel="noopener noreferrer">
                            <Instagram />
                            <p style={{ margin: '0 12px' }}>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div>Copyright ?? 2020 CorpMart. All Rights Reserved.</div>
                <div className={styles.tos}><Link to="/terms-of-service">Terms of Service</Link></div>
            </div>
        </>
    )
}

export default Footer;
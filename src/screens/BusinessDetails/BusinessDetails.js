import React from 'react';
import styles from './BusinessDetails.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import Button from '../../components/UI/Button/Button';
import Footer from '../Landing/Footer/Footer';

const BusinessDetails = (props) => {
    const { type, subtype, industry, state, capitalPrice, askingPrice } = props;
    const available = true;
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <div className={styles.BusinessDetails}>
                <div className={styles.selectedBusiness}>
                    <div className={styles.detailsCard}>
                        <p className={styles.businessDesc}>A textile manufacturing Pvt. Ltd. company based in Surat.</p>
                        <div className={styles.businessInfo}>
                            <div className={styles.businessInfoRow}>
                                <div className={styles.businessInfoLabel}>Type</div>
                                <div className={styles.businessInfoValue}>{type}</div>
                            </div>
                            <div className={styles.businessInfoRow}>
                                <div className={styles.businessInfoLabel}>Sub Type</div>
                                <div className={styles.businessInfoValue}>{subtype}</div>
                            </div>
                            <div className={styles.businessInfoRow}>
                                <div className={styles.businessInfoLabel}>Industry</div>
                                <div className={styles.businessInfoValue}>{industry}</div>
                            </div>
                            <div className={styles.businessInfoRow}>
                                <div className={styles.businessInfoLabel}>State</div>
                                <div className={styles.businessInfoValue}>{state}</div>
                            </div>
                            <div className={styles.businessInfoRow}>
                                <div className={styles.businessInfoLabel}>Capital Price</div>
                                <div className={styles.businessInfoValue}>{capitalPrice}</div>
                            </div>
                            <div className={styles.businessInfoRow}>
                                <div className={styles.businessInfoLabel}>Asking Price</div>
                                <div className={styles.businessInfoValue} style={{ fontWeight: 'normal' }}>{askingPrice}</div>
                            </div>
                            <div className={styles.businessRegRow}>
                                {available
                                    ? <p className={styles.regAvailable}>GST no. available</p>
                                    : <p className={styles.regNotAvailable}>GST no. not available</p>}
                            </div>
                            <div className={styles.businessRegRow}>
                                {available
                                    ? <p className={styles.regAvailable}>Bank account available</p>
                                    : <p className={styles.regNotAvailable}>Bank account not available</p>}
                            </div>
                            <div className={styles.businessRegRow}>
                                {!available
                                    ? <p className={styles.regAvailable}>Import/Export code available</p>
                                    : <p className={styles.regNotAvailable}>Import/Export code not available</p>}
                            </div>
                            <div className={styles.businessRegRow}>
                                {!available
                                    ? <p className={styles.regAvailable}>Other licenses available</p>
                                    : <p className={styles.regNotAvailable}>No other licenses available</p>}
                            </div>
                            <div className={styles.businessRegRow}>
                                {available
                                    ? <p className={styles.regAvailable}>Balancesheet available</p>
                                    : <p className={styles.regNotAvailable}>Balancesheet not available</p>}
                            </div>
                        </div>
                    </div>
                    <div className={styles.balancesheet}>
                        <div className={styles.bsDiv1}>
                            <p>Balancesheet of this business is available</p>
                            <div className={styles.bsImg}></div>
                            <Button
                                label="View"
                                type="orange"
                                style={{ padding: '12px 16px' }}
                                textStyle={{ margin: 0 }}
                            />
                        </div>
                        <div className={styles.bsDiv2}>
                            <p>Interseted in acquiring this business?</p>
                            <Button
                                label="contact"
                                type="orange"
                                style={{ padding: '12px 16px' }}
                                textStyle={{ margin: 0 }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.otherBusinesses}>
                    <div className={styles.header}>
                        <p className={styles.title}>Other Businesses for sale</p>
                    </div>
                    <BusinessSlide />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BusinessDetails;
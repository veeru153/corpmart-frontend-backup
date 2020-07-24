import React from 'react';
import styles from './BusinessSlide.module.css';
import Button from '../../../../components/UI/Button/Button';

const BusinessSlide = () => {
    return (
        <div className={styles.slide}>
            <p className={styles.businessDesc}>A textile manufacturing Pvt. Ltd. company based in Surat.</p>
            <div className={styles.businessInfo}>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Type</div>
                    <div className={styles.businessInfoValue}>Pvt. Ltd.</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Sub Type</div>
                    <div className={styles.businessInfoValue}>Pvt. Ltd.</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Industry</div>
                    <div className={styles.businessInfoValue}>Pharmaceutical</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>State</div>
                    <div className={styles.businessInfoValue}>Haryana</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Asking Price</div>
                    <div className={styles.businessInfoValue} style={{ fontWeight: 'normal' }}>INR 40 lakh</div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Button
                    label="contact"
                    type="orange"
                    style={{ padding: '12px 16px' }}
                    textStyle={{ margin: 0 }}
                />
            </div>
        </div>
    )
}

export default BusinessSlide;
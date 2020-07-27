import React from 'react';
import styles from './BusinessSlide.module.css';
import Button from '../UI/Button/Button';

const BusinessSlide = (props) => {
    const { type, subtype, industry, state, capitalPrice, askingPrice } = props;
    return (
        <div className={[styles.slide, props.className].join(' ')}>
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
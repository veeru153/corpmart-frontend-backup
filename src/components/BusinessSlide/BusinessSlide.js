import React from 'react';
import styles from './BusinessSlide.module.css';
import Button from '../UI/Button/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const BusinessSlide = (props) => {
    const { type, subtype, industry, state, authCapital, paidCapital, askingPrice, desc } = props;
    return (
        <div className={[styles.slide, props.className].join(' ')}>
            <p className={styles.businessDesc}>{desc}</p>
            <div className={styles.verified}>
                <CheckCircleIcon style={{ fontSize: 16, color: '#55B546'}}/>
                <p>Contact Verified</p>
            </div>
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
                    <div className={styles.businessInfoValue}>{industry.toLowerCase()}</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>State</div>
                    <div className={styles.businessInfoValue}>{state}</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Auth. Captial</div>
                    <div className={styles.businessInfoValue}>{authCapital}</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Paid-up Capital</div>
                    <div className={styles.businessInfoValue}>{paidCapital}</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Asking Price</div>
                    <div className={styles.businessInfoValue} style={{ fontWeight: 'normal', fontSize: 16 }}>{askingPrice}</div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Button
                    label="Contact Business"
                    type="orange"
                    style={{ padding: '12px 16px' }}
                    textStyle={{ margin: 0 }}
                />
            </div>
        </div>
    )
}

export default BusinessSlide;
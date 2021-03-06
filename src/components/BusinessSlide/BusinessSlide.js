import React from 'react';
import styles from './BusinessSlide.module.css';
import Button from '../UI/Button/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withRouter } from 'react-router-dom';

const BusinessSlide = (props) => {
    const { id, type, subtype, subtypeOther, industry, industryOther, state, authCapital, paidCapital, askingPrice, desc, openBusiness } = props;
    return (
        <div className={[styles.slide, props.className].join(' ')}>
            <p className={styles.businessDesc}>{!desc || desc.length == 0 ? "Currently Not Available. Please check later." : desc}</p>
            <div className={styles.verified}>
                <CheckCircleIcon style={{ fontSize: 16, color: '#55B546'}}/>
                <p>Contact Verified</p>
            </div>
            <div className={styles.businessInfo}>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Type</div>
                    <div className={styles.businessInfoValue}>{type ?? "Available After Contact"}</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Sub Type</div>
                    <div className={styles.businessInfoValue}>
                        {subtype ? 
                            subtype.toLowerCase() == "others" ?
                            subtypeOther.toLowerCase() :
                            subtype.toLowerCase()
                        : "Available after contact"}
                    </div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Industry</div>
                    <div className={styles.businessInfoValue}>
                        {industry ? 
                            industry.toLowerCase() == "others" ?
                            industryOther.toLowerCase() :
                            industry.toLowerCase()
                        : "Available after contact"}
                    </div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>State</div>
                    <div className={styles.businessInfoValue}>{state}</div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Auth. Captial</div>
                    <div className={styles.businessInfoValue} style={{ fontWeight: 'normal' }}>         
                        {authCapital
                            ? <p><span style={{ fontFamily: "Arial"}}>???</span>{authCapital}</p>
                            : "Available After Contact"}
                    </div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Paid-up Capital</div>
                    <div className={styles.businessInfoValue} style={{ fontWeight: 'normal' }}>
                        {paidCapital 
                            ? <p><span style={{ fontFamily: "Arial"}}>???</span>{paidCapital}</p>
                            : "Available After Contact"}
                    </div>
                </div>
                <div className={styles.businessInfoRow}>
                    <div className={styles.businessInfoLabel}>Asking Price</div>
                    <div className={styles.businessInfoValue} style={{ fontWeight: 'normal', fontSize: 16 }}>
                        {askingPrice 
                            ? <p><span style={{ fontFamily: "Arial"}}>???</span>{askingPrice}</p>
                            : "Available After Contact"}
                    </div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Button
                    label="Contact Business"
                    type="orange"
                    style={{ padding: '12px 16px' }}
                    textStyle={{ margin: 0 }}
                    pressed={() => {
                        if(openBusiness) openBusiness();
                        else props.history.push(`/business-details/${id}`);
                    }}
                />
            </div>
        </div>
    )
}

export default withRouter(BusinessSlide);
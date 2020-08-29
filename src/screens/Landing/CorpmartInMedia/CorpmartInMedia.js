import React from 'react';
import styles from './CorpmartInMedia.module.css';

import isoCert from './images/isocert.webp';
import startupIndia from './images/startupindia.png';
import msme from './images/msme.webp';

const CorpmartInMedia = () => {
    return (
        <div className={styles.CorpmartInMedia}>
            <div className={styles.header}>
                <div className={styles.title}>Accreditations</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={styles.mediaShowcase}>
                    <div className={styles.imgContainer}><img src={isoCert} /></div>
                    <div className={styles.imgContainer}><img src={startupIndia} /></div>
                    <div className={styles.imgContainer}><img src={msme} /></div>
                </div>
            </div>
        </div>
    )
}

export default CorpmartInMedia;
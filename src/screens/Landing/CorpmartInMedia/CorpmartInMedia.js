import React from 'react';
import styles from './CorpmartInMedia.module.css';

import isoCert from './images/isocert.png';
import startupIndia from './images/startupindia.png';

const CorpmartInMedia = () => {
    return (
        <div className={styles.CorpmartInMedia}>
            <div className={styles.header}>
                <div className={styles.title}>Accreditations</div>
                <div className={styles.subtitle}>CorpMart in Media</div>
            </div>
            <div className={styles.mediaShowcase}>
                <div><img src={isoCert} /></div>
                <div><img src={startupIndia} /></div>
            </div>
        </div>
    )
}

export default CorpmartInMedia;
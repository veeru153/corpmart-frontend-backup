import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';

// TODO: Add Slider

const PaidCapital = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.section}>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Paid-Up Capital (in INR)</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div style={{ 
                height: expanded ? '100%' : '0', 
                overflow: expanded ? 'scroll' : "hidden", 
                maxHeight: '120px',
                backgroundColor: '#E8EAED'
            }}>
                
            </div>
        </div>
    )
}

export default PaidCapital;
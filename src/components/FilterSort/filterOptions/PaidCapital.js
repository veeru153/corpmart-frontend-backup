import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import Slider from '../../UI/MySlider/MySlider';

// TODO: Add Slider

const PaidCapital = () => {
    const [expanded, setExpanded] = useState(false);
    const [values, setValues] = useState([10, 450000]);
    const min = 14999;
    const min = 0;
    const max = 450001;

    return (
        <div className={styles.section}>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Paid-Up Capital (in INR)</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180} /> : <ChevronDown size={16} />}
                </div>
            </button>
            <div style={{
                height: expanded ? '100%' : '0',
                overflow: expanded ? 'scroll' : "hidden",
                maxHeight: '120px',
                backgroundColor: '#E8EAED',
                // padding: '40px 0'
            }}>
                <Slider values={values} setValues={setValues} max={max} min={min} />
                <p>Selling Price</p>
                <p>INR {values[0]} - {values[1]}</p>
            </div>
        </div>
    )
}

export default PaidCapital;
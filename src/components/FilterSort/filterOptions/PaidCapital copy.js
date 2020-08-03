import React, { useState, useEffect } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import Slider from '../../UI/MySlider/MySlider';

// TODO: Add Slider

const PaidCapital = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [values, setValues] = useState([0, 0]);

    useEffect(() => setValues([0, props.max]), [props.max]);

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
                <Slider values={values} setValues={setValues} max={props.max} min={0} />
                <p>Paid-up Capital</p>
                <p>INR {values[0]} - {values[1]}</p>
            </div>
        </div>
    )
}

export default PaidCapital;
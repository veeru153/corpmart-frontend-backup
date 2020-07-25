import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

const Country = () => {
    const [expanded, setExpanded] = useState(false);
    const [countryList, setCountryList] = useState([
        { name: 'India', checked: false},
        { name: 'Other', checked: false},
    ])

    const handleCountry = (index) => {
        const tempCountry = [...countryList];
        tempCountry[index] = { ...tempCountry[index], checked: !countryList[index].checked };
        setCountryList(tempCountry);
    }

    return (
        <div className={styles.section}>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Country</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div style={{ 
                height: expanded ? '100%' : '0', 
                overflow: expanded ? 'scroll' : "hidden", 
                maxHeight: 'calc(31px * 2)',
                backgroundColor: '#E8EAED',
            }}>
                {countryList.map((country, index) => (
                    <button className={styles.option} onClick={() => handleCountry(index)}>
                        <p className={styles.optionExpLabel}>{country.name}</p>
                        <div>
                            { country.checked
                                ?   <CheckBoxOutlined />
                                :   <CheckBoxOutlineBlank />
                            }
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Country;
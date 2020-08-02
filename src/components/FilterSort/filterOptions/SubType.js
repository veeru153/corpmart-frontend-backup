import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

// TODO: Add Other in companyList

const SubType = () => {
    const [expanded, setExpanded] = useState(false);
    const [companyList, setCompanyList] = useState([
        { name: 'One Person Company', checked: false},
        { name: 'Producer Company', checked: false},
        { name: 'Nidhi Company', checked: false},
        { name: 'Section-8 company (NGO)', checked: false},
        { name: 'Non-Banking Financial Company (NBFC)', checked: false},
        { name: 'Micro Finance Company', checked: false},
        { name: 'Insurance Company', checked: false},
        { name: 'Direct Selling Company', checked: false},
    ])

    const handleCompanyType = (index) => {
        const tempCompany = [...companyList];
        tempCompany[index] = { ...tempCompany[index], checked: !companyList[index].checked };
        setCompanyList(tempCompany);
    }

    return (
        <div className={styles.section}>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Sub - type</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div 
                className={styles.filterOptions}
                style={{ 
                    height: expanded ? '100%' : '0', 
                    overflow: expanded ? 'scroll' : "hidden", 
                    maxHeight: 'calc(31px * 8)',
                    backgroundColor: '#E8EAED',
                }}
            >
                {companyList.map((company, index) => (
                    <button 
                        key={company.name}
                        className={styles.option} 
                        onClick={() => handleCompanyType(index)}
                    >
                        <p className={styles.optionExpLabel}>{company.name}</p>
                        <div>
                            { company.checked
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

export default SubType;
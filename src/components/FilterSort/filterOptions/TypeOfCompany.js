import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

// TODO: Add Other in companyList

const TypeOfCompany = () => {
    const [expanded, setExpanded] = useState(false);
    const [companyList, setCompanyList] = useState([
        { name: 'Pvt. Ltd.', checked: false},
        { name: 'Public Ltd.', checked: false},
        { name: 'Limited Liability Partnership (LLP)', checked: false},
        { name: 'Partnership Firm', checked: false},
        { name: 'Trust/Society', checked: false},
    ])

    const handleCompanyType = (index) => {
        const tempCompany = [...companyList];
        tempCompany[index] = { ...tempCompany[index], checked: !companyList[index].checked };
        setCompanyList(tempCompany);
    }

    return (
        <div className={styles.section}>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Type of Company</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div 
                className={styles.filterOptions}
                style={{ 
                    height: expanded ? '100%' : '0', 
                    overflow: expanded ? 'scroll' : "hidden", 
                    maxHeight: 'calc(31px * 5)',
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

export default TypeOfCompany;
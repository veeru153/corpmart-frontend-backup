import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

// TODO: Add Other in industryList

const Industry = () => {
    const [expanded, setExpanded] = useState(false);
    const [industryList, setIndustryList] = useState([
        { name: 'AGRICULTURE AND ALLIED INDUSTRIES',checked: false },
        { name: 'AUTOMOBILES', checked: false },
        { name: 'AUTO COMPONENTS', checked: false },
        { name: 'AVIATION', checked: false },
        { name: 'BANKING', checked: false },
        { name: 'CEMENT', checked: false },
        { name: 'CONSUMER DURABLES', checked: false },
        { name: 'ECOMMERCE', checked: false },
        { name: 'EDUCATION AND TRAINING', checked: false },
        { name: 'ENGINEERING AND CAPITAL GOODS', checked: false },
        { name: 'FINANCIAL SERVICES', checked: false },
        { name: 'FMCG', checked: false },
        { name: 'GEMS AND JEWELLERY', checked: false },
        { name: 'HEALTHCARE', checked: false },
        { name: 'INFRASTRUCTURE', checked: false },
        { name: 'INSURANCE', checked: false },
        { name: 'IT & ITES', checked: false },
        { name: 'MANUFACTURING', checked: false },
        { name: 'MEDIA AND ENTERTAINMENT', checked: false },
        { name: 'METALS AND MINING', checked: false },
        { name: 'OIL AND GAS', checked: false },
        { name: 'PHARMACEUTICALS', checked: false },
        { name: 'PORTS', checked: false },
        { name: 'POWER', checked: false },
        { name: 'RAILWAYS', checked: false },
        { name: 'REAL ESTATE', checked: false },
        { name: 'RENEWABLE ENERGY', checked: false },
        { name: 'RETAIL', checked: false },
        { name: 'ROADS', checked: false },
        { name: 'SCIENCE AND TECHNOLOGY', checked: false },
        { name: 'SERVICES', checked: false },
        { name: 'STEEL', checked: false },
        { name: 'TELECOMMUNICATIONS', checked: false },
        { name: 'TEXTILES', checked: false },
        { name: 'TOURISM AND HOSPITALITY', checked: false },
        { name: 'OTHERS', checked: false },
    ])

    const handleCompanyType = (index) => {
        const tempIndustry = [...industryList];
        tempIndustry[index] = { ...tempIndustry[index], checked: !industryList[index].checked };
        setIndustryList(tempIndustry);
    }

    return (
        <div className={styles.section}>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Industry</p>
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
                {industryList.map((industry, index) => (
                    <button 
                        key={industry.name}
                        className={styles.option} 
                        onClick={() => handleCompanyType(index)}
                    >
                        <p className={styles.optionExpLabel}>{industry.name}</p>
                        <div>
                            { industry.checked
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

export default Industry;
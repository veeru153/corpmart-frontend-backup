import React, { useState } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

// TODO: Add Other in industryList

const Industry = () => {
    const [expanded, setExpanded] = useState(false);
    const [industryList, setIndustryList] = useState([
        { name: 'Waiting for List...', checked: false},
    ])

    const handleCompanyType = (index) => {
        const tempIndustry = [...industryList];
        tempIndustry[index] = { ...tempIndustry[index], checked: !industryList[index].checked };
        setIndustryList(tempIndustry);
    }

    return (
        <div>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>Industry</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div style={{ 
                height: expanded ? '100%' : '0', 
                overflow: expanded ? 'scroll' : "hidden", 
                maxHeight: 'calc(31px * 8)',
            }}>
                {industryList.map((industry, index) => (
                    <button className={styles.option} onClick={() => handleCompanyType(index)}>
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
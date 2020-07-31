import React, { useState } from 'react';
import styles from './FilterDiv.module.css';
import { Filter } from 'react-feather';
import FilterContent from '../FilterContent';

const FilterDiv = (props) => {
    const [filterOps, setFilterOps] = useState([
        { name: 'GST No. Availability', checked: false },
        { name: 'Bank Account Availability', checked: false },
    ]);

    const handleOption = (index) => {
        const tempOps = [...filterOps];
        tempOps[index] = { ...tempOps[index], checked: !filterOps[index].checked };
        setFilterOps(tempOps);
    }

    return (
        <div className={styles.FilterDiv}>
            <div className={styles.header}>
                <p>FILTER BY</p>
                <Filter size={24} style={{ margin: '0 20px' }}/>
            </div>
            <FilterContent 
                filterOps={filterOps} 
                expanded 
                type="filter" 
                handleOption={handleOption}
            />
        </div>
    )
}

export default FilterDiv;
import React, { useState } from 'react';
import styles from './FilterDiv.module.css';
import { Filter } from 'react-feather';
import FilterContent from '../FilterContent';

const FilterDiv = (props) => {
    return (
        <div className={styles.FilterDiv}>
            <div className={styles.header}>
                <p>FILTER BY</p>
                <Filter size={24} style={{ margin: '0 20px' }}/>
            </div>
            <FilterContent 
                filterOps={props.filterOps} 
                expanded 
                type="filter" 
                handleOption={props.handleOption}
                updateQuery={props.updateQuery}
            />
        </div>
    )
}

export default FilterDiv;
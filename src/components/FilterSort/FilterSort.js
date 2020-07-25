import React, { useState } from 'react';
import styles from './FilterSort.module.css';
import { Filter } from 'react-feather';
import Sort from '@material-ui/icons/Sort'
import State from './filterOptions/State/State';

const FilterSort = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className={styles.FilterSort}>
            <div className={styles.tabs}>
                <button className={styles.tab}>
                    <Filter size={16} />
                    <p>Filter</p>
                </button>
                <button className={styles.tab}>
                    <Sort fontSize="16" />
                    <p>Sort by</p>
                </button>
            </div>
            <div className={styles.expanded}>
                <div className={styles.filterExp}>
                    <State />
                </div>
                <div className={styles.sortExp}>

                </div>
            </div>
        </div>
    )
}

export default FilterSort;
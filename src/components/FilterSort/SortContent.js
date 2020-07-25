import React from 'react';
import styles from './FilterSortMobile.module.css';

// TODO: Implement rather than having placeholders

const SortContent = (props) => {
    const { expanded, type } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'sort' ? 'block' : 'none',
            }}
        >
            <p>Recently Listed</p>
            <p>Year of Establishment (newest first)</p>
            <p>Year of Establishment (oldest first)</p>
            <p>Capital (low to high)</p>
            <p>Capital (high to low)</p>
            <p>Selling price (low to high)</p>
            <p>Selling price (high to low)</p>
        </div>
    )
}

export default SortContent;
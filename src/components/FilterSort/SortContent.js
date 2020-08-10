import React from 'react';
import styles from './FilterSortMobile.module.css';

const SortContent = (props) => {
    const { expanded, type, updateQuery } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'sort' ? 'block' : 'none',
                overflow: expanded ? 'scroll' : 'hidden',
                marginBottom: 104,
            }}
        >
            <p onClick={() =>  updateQuery('sort', 0)}>Recently Listed</p>
            <p onClick={() =>  updateQuery('sort', 1)}>Year of Establishment (newest first)</p>
            <p onClick={() =>  updateQuery('sort', 2)}>Year of Establishment (oldest first)</p>
            <p onClick={() =>  updateQuery('sort', 3)}>Authorised Capital (low to high)</p>
            <p onClick={() =>  updateQuery('sort', 4)}>Authorised Capital (high to low)</p>
            <p onClick={() =>  updateQuery('sort', 3)}>Paid-up Capital (low to high)</p>
            <p onClick={() =>  updateQuery('sort', 4)}>Paid-up Capital (high to low)</p>
            <p onClick={() =>  updateQuery('sort', 5)}>Selling price (low to high)</p>
            <p onClick={() =>  updateQuery('sort', 6)}>Selling price (high to low)</p>
        </div>
    )
}

export default SortContent;
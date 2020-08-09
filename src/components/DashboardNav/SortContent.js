import React from 'react';
import styles from '../FilterSort/FilterSortMobile.module.css';

const SortContent = (props) => {
    const { expanded, type, handleSort } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'sort' ? 'block' : 'none',
            }}
        >
            <p onClick={() =>  handleSort(0)}>Recently Listed</p>
            <p onClick={() =>  handleSort(1)}>Year of Establishment (newest first)</p>
            <p onClick={() =>  handleSort(2)}>Year of Establishment (oldest first)</p>
            <p onClick={() =>  handleSort(3)}>Authorised Capital (low to high)</p>
            <p onClick={() =>  handleSort(4)}>Authorised Capital (high to low)</p>
            <p onClick={() =>  handleSort(3)}>Paid-up Capital (low to high)</p>
            <p onClick={() =>  handleSort(4)}>Paid-up Capital (high to low)</p>
            <p onClick={() =>  handleSort(5)}>Selling price (low to high)</p>
            <p onClick={() =>  handleSort(6)}>Selling price (high to low)</p>
        </div>
    )
}

export default SortContent;
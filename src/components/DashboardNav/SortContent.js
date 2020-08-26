import React from 'react';
import styles from '../FilterSort/FilterSortMobile.module.css';

const SortContent = (props) => {
    const { expanded, type, handleSort, selectedSort } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'sort' ? 'block' : 'none',
                overflow: expanded ? 'scroll' : 'hidden',
                marginBottom: 104,
            }}
        >
            <p 
                onClick={() =>  handleSort(0)}
                style={{ color: selectedSort == 0 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Recently Listed</p>
            <p 
                onClick={() =>  handleSort(1)}
                style={{ color: selectedSort == 1 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Year of Establishment (newest first)</p>
            <p 
                onClick={() =>  handleSort(2)}
                style={{ color: selectedSort == 2 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Year of Establishment (oldest first)</p>
            <p 
                onClick={() =>  handleSort(3)}
                style={{ color: selectedSort == 3 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Authorised Capital (low to high)</p>
            <p 
                onClick={() =>  handleSort(4)}
                style={{ color: selectedSort == 4 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Authorised Capital (high to low)</p>
            <p 
                onClick={() =>  handleSort(5)}
                style={{ color: selectedSort == 5 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Paid-up Capital (low to high)</p>
            <p 
                onClick={() =>  handleSort(6)}
                style={{ color: selectedSort == 6 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Paid-up Capital (high to low)</p>
            <p 
                onClick={() =>  handleSort(7)}
                style={{ color: selectedSort == 7 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Selling price (low to high)</p>
            <p 
                onClick={() =>  handleSort(8)}
                style={{ color: selectedSort == 8 ? '#4AB9CA' : 'black', cursor: 'pointer' }}    
            >Selling price (high to low)</p>
        </div>
    )
}

export default SortContent;
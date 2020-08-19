import React from 'react';
import styles from './FilterSortMobile.module.css';

const SortContent = (props) => {
    const { expanded, type, updateQuery, selectedSort } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'sort' ? 'block' : 'none',
                overflow: expanded ? 'scroll' : 'hidden',
                marginBottom: 104,
                fontSize: 14,
            }}
        >
            <p 
                onClick={() =>  updateQuery('sort', 0)}
                style={{ color: selectedSort.length == 0 ? '#4AB9CA' : 'black' }}    
            >Recently Listed</p>
            <p 
                onClick={() =>  updateQuery('sort', 1)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '1' ? '#4AB9CA' : 'black' }}    
            >Year of Establishment (newest first)</p>
            <p 
                onClick={() =>  updateQuery('sort', 2)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '2' ? '#4AB9CA' : 'black' }}    
            >Year of Establishment (oldest first)</p>
            <p 
                onClick={() =>  updateQuery('sort', 3)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '3' ? '#4AB9CA' : 'black' }}    
            >Authorised Capital (low to high)</p>
            <p 
                onClick={() =>  updateQuery('sort', 4)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '4' ? '#4AB9CA' : 'black' }}    
            >Authorised Capital (high to low)</p>
            <p 
                onClick={() =>  updateQuery('sort', 5)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '5' ? '#4AB9CA' : 'black' }}    
            >Paid-up Capital (low to high)</p>
            <p 
                onClick={() =>  updateQuery('sort', 6)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '6' ? '#4AB9CA' : 'black' }}    
            >Paid-up Capital (high to low)</p>
            <p 
                onClick={() =>  updateQuery('sort', 7)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '7' ? '#4AB9CA' : 'black' }}    
            >Selling price (low to high)</p>
            <p 
                onClick={() =>  updateQuery('sort', 8)}
                style={{ color: selectedSort.length != 0 && selectedSort.substring(8) == '8' ? '#4AB9CA' : 'black' }}    
            >Selling price (high to low)</p>
        </div>
    )
}

export default SortContent;
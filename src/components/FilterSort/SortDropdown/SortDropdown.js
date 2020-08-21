import React, { useState, useEffect } from 'react';
import styles from './SortDropdown.module.css';
import Button from '../../UI/Button/Button';

const SortDrop = (props) => {
    const { updateQuery } = props;
    const [opened, setOpened] = useState(false);
    const [currVal, setCurrVal] = useState(0);

    const handleSort = (e, val) => {
        // e.stopPropagation();
        e.preventDefault();
        setCurrVal(val);
        updateQuery('sort', val);
    }

    useEffect(() => document.addEventListener('click', (e) => {
        // Had to do this in a hacky way (used same ID multiple times). I'm sorry future developer :((
        if(opened && !["dropdownBtn", "dropdown", "dropdownOption"].includes(e.target.id)) {
            setOpened(false);
        }
    }))

    return (
        <div className={styles.SortDropdown}>
            <Button 
                id="dropdownBtn"
                type="blue"
                label="Sort By"
                className={styles.dummyBtn}
                style={{ borderBottomLeftRadius: opened ? 0 : 10, borderBottomRightRadius: opened ? 0 : 10 }}
                pressed={() => setOpened(!opened)}
            />
            <div 
                id="dropdown"
                className={styles.dropdown} 
                style={{ display: opened ? 'block' : 'none' }} 
            >
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 0)}
                    className={ currVal == 0 ? styles.active : ""}
                >Recently Listed</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 1)}
                    className={ currVal == 1 ? styles.active : ""}
                >Year of Establishment (newest first)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 2)}
                    className={ currVal == 2 ? styles.active : ""}
                >Year of Establishment (oldest first)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 3)}
                    className={ currVal == 3 ? styles.active : ""}
                >Authorised Capital (low to high)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 4)}
                    className={ currVal == 4 ? styles.active : ""}
                >Authorised Capital (high to low)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 5)}
                    className={ currVal == 5 ? styles.active : ""}
                >Paid-up Capital (low to high)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(6)}
                    className={ currVal == 6 ? styles.active : ""}
                >Paid-up Capital (high to low)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 7)}
                    className={ currVal == 7 ? styles.active : ""}
                >Selling price (low to high)</div>
                <div 
                    id="dropdownOption"
                    onClick={(e) => handleSort(e, 8)}
                    className={ currVal == 8 ? styles.active : ""}
                >Selling price (high to low)</div>
            </div>
            {/* <select
                name="SortDropdown"
                onChange={(e) => updateQuery('sort', e.target.value)}
                className={styles.dropdownHeader}
            >
                <option value="-1">Sort By</option>
                <option value="0">Recently Listed</option>
                <option value="1">Year of Establishment (newest first)</option>
                <option value="2">Year of Establishment (oldest first)</option>
                <option value="3">Authorised Capital (low to high)</option>
                <option value="4">Authorised Capital (high to low)</option>
                <option value="5">Paid-up Capital (low to high)</option>
                <option value="6">Paid-up Capital (high to low)</option>
                <option value="7">Selling price (low to high)</option>
                <option value="8">Selling price (high to low)</option>
            </select> */}
        </div>
    )
}

export default SortDrop;
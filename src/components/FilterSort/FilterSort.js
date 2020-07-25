import React, { useState } from 'react';
import styles from './FilterSort.module.css';
import { Filter } from 'react-feather';
import Sort from '@material-ui/icons/Sort'
import State from './filterOptions/State/State';
import Country from './filterOptions/Country';
import TypeOfCompany from './filterOptions/TypeOfCompany';
import SubType from './filterOptions/SubType';
import Industry from './filterOptions/Industry';

const FilterSort = () => {
    const [expanded, setExpanded] = useState(true);
    const [type, setType] = useState('');

    const openMenu = (type) => {
        setExpanded(true);
        setType(type);
    }

    return (
        <div className={styles.FilterSort}>
            {/* <div 
                className={styles.backdrop} 
                // style={{ display: expanded ? 'block' : 'none'}}
                onClick={() => setExpanded(false)}
            ></div> */}
            <div className={styles.tabs}>
                <button className={styles.tab} onClick={() => openMenu('filter')}>
                    <Filter size={16} />
                    <p>Filter</p>
                </button>
                <button className={styles.tab} onClick={() => openMenu('sort')}>
                    <Sort fontSize="16" />
                    <p>Sort by</p>
                </button>
            </div>
            <div 
                className={styles.expanded}
                style={{
                    height: expanded ? '100%' : '0',
                    overflow: expanded ? 'scroll' : 'hidden',
                }}
            >
                <div 
                    className={styles.filterExp}
                    style={{
                        display: expanded && type == 'filter' ? 'block' : 'none',
                    }}
                >
                    <State />
                    <Country />
                    <TypeOfCompany />
                    <SubType />
                    <Industry />
                </div>
                <div 
                    className={styles.sortExp}
                    style={{
                        display: expanded && type == 'sort' ? 'block' : 'none',
                    }}
                >

                </div>
            </div>
        </div>
    )
}

export default FilterSort;
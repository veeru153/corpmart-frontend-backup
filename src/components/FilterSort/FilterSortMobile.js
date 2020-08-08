import React, { useState } from 'react';
import styles from './FilterSortMobile.module.css';
import { Filter } from 'react-feather';
import Sort from '@material-ui/icons/Sort';
import FilterContent from './FilterContent';
import SortContent from './SortContent';

const FilterSortMobile = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [type, setType] = useState('');

    const openMenu = (type) => {
        setExpanded(true);
        setType(type);
    }

    return (
        <div 
            className={styles.FilterSort} 
            style={{
                background: expanded ? 'rgba(0, 0, 0, 0.3)' : 'none',
            }}
            onClick={() => setExpanded(false)}
        >
            <div className={styles.tabs}>
                <button
                    className={styles.tab}
                    style={{ borderBottom: expanded && type == 'filter' ? '4px solid #4AB9CA' : 'none' }}
                    onClick={(e) => {
                        openMenu('filter');
                        e.stopPropagation();
                    }}
                >
                    <Filter size={16} />
                    <p>Filter</p>
                </button>
                <button
                    className={styles.tab}
                    style={{ borderBottom: expanded && type == 'sort' ? '4px solid #4AB9CA' : 'none' }}
                    onClick={(e) => {
                        openMenu('sort')
                        e.stopPropagation();
                    }}
                >
                    <Sort fontSize="16" />
                    <p>Sort by</p>
                </button>
            </div>
            <div
                className={styles.expanded}
                onClick={(e) => e.stopPropagation()}
                style={{
                    height: expanded ? '100%' : '0',
                    overflow: expanded ? 'scroll' : 'hidden',
                }}
            >
                <FilterContent 
                    expanded={expanded} 
                    type={type} 
                    filterOps={props.filterOps} 
                    handleOption={props.handleOption}
                    updateQuery={props.updateQuery}
                />
                <SortContent 
                    expanded={expanded} 
                    type={type} 
                    updateQuery={props.updateQuery}
                />
            </div>
        </div>
    )
}

export default FilterSortMobile;
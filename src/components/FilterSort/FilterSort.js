import React, { useState } from 'react';
import styles from './FilterSort.module.css';
import { Filter } from 'react-feather';
import Sort from '@material-ui/icons/Sort';
import FilterContent from './FilterContent';
import SortContent from './SortContent';

// TODO: Add Backdrop

const FilterSort = () => {
    const [expanded, setExpanded] = useState(true);
    const [type, setType] = useState('');
    const [filterOps, setFilterOps] = useState([
        { name: 'GST No. Availability', checked: false },
        { name: 'Bank Account Availability', checked: false },
        { name: 'Imp/Exp Code Availability', checked: false },
        { name: 'Balance Sheet Availability', checked: false },
    ]);

    const handleOption = (index) => {
        const tempOps = [...filterOps];
        tempOps[index] = { ...tempOps[index], checked: !filterOps[index].checked };
        setFilterOps(tempOps);
    }

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
                <button
                    className={styles.tab}
                    style={{ borderBottom: expanded && type == 'filter' ? '4px solid #4AB9CA' : 'none' }}
                    onClick={() => openMenu('filter')}
                >
                    <Filter size={16} />
                    <p>Filter</p>
                </button>
                <button
                    className={styles.tab}
                    style={{ borderBottom: expanded && type == 'sort' ? '4px solid #4AB9CA' : 'none' }}
                    onClick={() => openMenu('sort')}
                >
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
                <FilterContent 
                    expanded={expanded} 
                    type={type} 
                    filterOps={filterOps} 
                    handleOption={handleOption}
                />
                <SortContent expanded={expanded} type={type} />
            </div>
        </div>
    )
}

export default FilterSort;
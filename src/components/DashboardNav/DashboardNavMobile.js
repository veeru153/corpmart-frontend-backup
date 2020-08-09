import React, { useState } from 'react';
import styles from '../FilterSort/FilterSortMobile.module.css';
import { Filter } from 'react-feather';
import Sort from '@material-ui/icons/Sort';
import DashboardContentSelector from './DashboardContentSelector';
import SortContent from './SortContent';

const DashboardNavMobile = (props) => {
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
                        openMenu('contentSelector');
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
                    maxHeight: expanded && type == 'contentSelector' ? '20vh' : '48vh',
                    overflow: expanded ? 'scroll' : 'hidden',
                }}
            >
                <DashboardContentSelector 
                    expanded={expanded} 
                    type={type} 
                    changePanel={props.changePanel}
                />
                <SortContent 
                    expanded={expanded} 
                    type={type} 
                    handleSort={props.handleSort}
                />
            </div>
        </div>
    )
}

export default DashboardNavMobile;
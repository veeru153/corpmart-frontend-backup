import React, { useState } from 'react';
import styles from '../FilterSort/FilterSortMobile.module.css';
import { ChevronUp } from 'react-feather';
import Sort from '@material-ui/icons/Sort';
import DashboardContentSelector from './DashboardContentSelector';
import SortContent from './SortContent';

const DashboardNavMobile = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [type, setType] = useState('');
    const [panel, setPanel] = useState('yourListings');

    const openMenu = (type) => {
        setExpanded(true);
        setType(type);
    }

    return (
        <div 
            className={styles.FilterSort} 
            style={{
                background: expanded ? 'rgba(0, 0, 0, 0.3)' : 'none',
                minHeight: expanded ? '100vh' : 'unset',
            }}
            onClick={() => setExpanded(false)}
        >
            <div className={styles.tabs}>
                <button
                    className={styles.tab}
                    style={{ borderBottom: expanded && type == 'contentSelector' ? '4px solid #4AB9CA' : 'none' }}
                    onClick={(e) => {
                        openMenu('contentSelector');
                        e.stopPropagation();
                    }}
                >
                    <ChevronUp size={16} />
                    <p>{panel == 'yourListings' ? 'Your Listings' : 'Recently Viewed'}</p>
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
                    height: expanded ? '60vh' : '0',
                    maxHeight: expanded ? '60vh' : '0',
                    overflow: expanded ? 'scroll' : 'hidden',
                }}
            >
                <DashboardContentSelector 
                    expanded={expanded} 
                    type={type} 
                    changePanel={props.changePanel}
                    panel={panel}
                    setPanel={setPanel}
                />
                <SortContent 
                    expanded={expanded} 
                    type={type} 
                    handleSort={props.handleSort}
                    selectedSort={props.selectedSort}
                />
            </div>
        </div>
    )
}

export default DashboardNavMobile;
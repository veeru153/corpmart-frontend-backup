import React from 'react';
import styles from '../FilterSort/FilterSortMobile.module.css';

const DashboardContentSelector = (props) => {
    const { expanded, type, changePanel } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'contentSelector' ? 'block' : 'none',
            }}
        >
            <p onClick={() => changePanel('yourListings')}>Your Listing</p>
            <p onClick={() => changePanel('recentlyViewed')}>Recently Viewed</p>
        </div>
    )
}

export default DashboardContentSelector;
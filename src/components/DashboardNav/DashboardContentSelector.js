import React from 'react';
import styles from '../FilterSort/FilterSortMobile.module.css';

const DashboardContentSelector = (props) => {
    const { expanded, type, changePanel, panel, setPanel } = props;
    return (
        <div
            className={styles.sortExp}
            style={{
                display: expanded && type == 'contentSelector' ? 'block' : 'none',
                overflow: expanded ? 'scroll' : 'hidden',
                marginBottom: 104,
            }}
        >
            <p 
                style={{ color: panel == 'yourListings' ? '#4AB9CA' : 'black'}}
                onClick={() => {
                    changePanel('yourListings');
                    setPanel('yourListings')
            }}>Your Listings</p>
            <p 
                style={{ color: panel == 'recentlyViewed' ? '#4AB9CA' : 'black'}}
                onClick={() => {
                    changePanel('recentlyViewed');
                    setPanel('recentlyViewed');
            }}>Recently Viewed</p>
        </div>
    )
}

export default DashboardContentSelector;
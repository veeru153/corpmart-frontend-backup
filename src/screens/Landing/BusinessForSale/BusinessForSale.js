import React from 'react';
import styles from './BusinessForSale.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '../../../components/UI/Button/Button';
import BusinessSlide from './BusinessSlide/BusinessSlide';

const BusinessForSale = () => {
    return (
        <div className={styles.BusinessForSale}>
            <div className={styles.header}>
                <p className={styles.title}>Businesses for Sale</p>
                <p className={styles.subtitle}>Explore the extensive range of options across various industries.</p>
            </div>
            <div className={styles.carousel}>
                <BusinessSlide />
            </div>
        </div>
    )
}

export default BusinessForSale;
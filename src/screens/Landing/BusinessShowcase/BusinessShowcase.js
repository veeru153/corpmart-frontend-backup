import React from 'react';
import styles from './BusinessShowcase.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '../../../components/UI/Button/Button';
import BusinessSlide from './BusinessSlide/BusinessSlide';

const BusinessForSale = () => {
    return (
        <div className={styles.BusinessShowcase}>
            <div className={styles.header}>
                <p className={styles.title}>Businesses for Sale</p>
                <p className={styles.subtitle}>Explore the extensive range of options across various industries.</p>
            </div>
            <div className={styles.carousel}>
                <BusinessSlide 
                    type="Pvt. Ltd."
                    subtype="Pvt. Ltd."
                    industry="Pharmaceutical"
                    state="Haryana"
                    price="INR 40 lakh"
                />
            </div>
            <div className={styles.btnContainer}>
                <Button 
                    label="View More" 
                    type="orange" 
                    style={{ padding: '12px 56px' }} 
                    textStyle={{ margin: 0 }}
                />
            </div>
        </div>
    )
}

export default BusinessForSale;
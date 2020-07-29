import React from 'react';
import styles from './BusinessesForSale.module.css';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import FilterSortMobile from '../../components/FilterSort/FilterSortMobile';
import FilterDiv from '../../components/FilterSort/FilterDiv/FilterDiv';
import Footer from '../Landing/Footer/Footer';

// TODO: Get Businesses from API

const BusinessesForSale = () => {
    return (
        <div className={styles.BusinessesForSale}>
            <NavbarMobile />
            <Navbar />

            <div className={styles.container}>
                <FilterDiv />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.title}>Businesses For Sale</p>
                        <p className={styles.subtitle}>Explore the extensive range of pre-approved businesses to find the one that suits your requirement.</p>
                    </div>
                    <div className={styles.showcase}>
                        <BusinessSlide
                            type="Pvt. Ltd."
                            subtype="Pvt. Ltd."
                            industry="Pharmaceutical"
                            state="Haryana"
                            authCapital="INR 20 lakh"
                            paidCapital="INR 10 lakh"
                            askingPrice="INR 40 lakh"
                            className={styles.card}
                        />
                        <BusinessSlide
                            type="Pvt. Ltd."
                            subtype="Pvt. Ltd."
                            industry="Pharmaceutical"
                            state="Haryana"
                            authCapital="INR 20 lakh"
                            paidCapital="INR 10 lakh"
                            askingPrice="INR 40 lakh"
                            className={styles.card}
                        />
                        <BusinessSlide
                            type="Pvt. Ltd."
                            subtype="Pvt. Ltd."
                            industry="Pharmaceutical"
                            state="Haryana"
                            authCapital="INR 20 lakh"
                            paidCapital="INR 10 lakh"
                            askingPrice="INR 40 lakh"
                            className={styles.card}
                        />
                        <BusinessSlide
                            type="Pvt. Ltd."
                            subtype="Pvt. Ltd."
                            industry="Pharmaceutical"
                            state="Haryana"
                            authCapital="INR 20 lakh"
                            paidCapital="INR 10 lakh"
                            askingPrice="INR 40 lakh"
                            className={styles.card}
                        />
                    </div>
                </div>
            </div>
            <FilterSortMobile />
            <Footer />
        </div>
    )
}

export default BusinessesForSale;
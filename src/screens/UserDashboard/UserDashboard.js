import React, { useState } from 'react';
import styles from './UserDashboard.module.css';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import Footer from '../Landing/Footer/Footer';
import Button from '../../components/UI/Button/Button';

// TODO: Get Businesses from API

const UserDashboard = () => {
    const panelTypes = ['yourListings', 'recentlyViewed'];
    const [nowActive, setNowActive] = useState(panelTypes[0]);

    return (
        <div className={styles.BusinessesForSale}>
            <NavbarMobile />
            <Navbar />

            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div 
                        className={styles.sidebarOptions} 
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Button type="blue" label="Add Listing" textStyle={{ padding: '12px 20px' }} />
                    </div>
                    <div 
                        className={styles.sidebarOptions}
                        style={{ justifyContent: 'flexStart', alignItems: 'left', margin: '0 30px' }}
                    >
                        <p 
                            className={styles.sidebarOptionsText}
                            style={{ fontWeight: nowActive == panelTypes[0] ? 'normal' : '300'}}
                            onClick={() => setNowActive(panelTypes[0])}
                        >Your Listing</p>
                        <p 
                            className={styles.sidebarOptionsText}
                            style={{ fontWeight: nowActive == panelTypes[1] ? 'normal' : '300'}}
                            onClick={() => setNowActive(panelTypes[1])}
                        >Recently Viewed</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.title}>My Dashboard</p>
                        <p className={styles.subtitle}>Fron here you can manage your business listings and balancesheet requests.</p>
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
            <Footer />
        </div>
    )
}

export default UserDashboard;
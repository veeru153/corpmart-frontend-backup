import React, { useState, useEffect } from 'react';
import styles from './BusinessesForSale.module.css';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import FilterSortMobile from '../../components/FilterSort/FilterSortMobile';
import FilterDiv from '../../components/FilterSort/FilterDiv/FilterDiv';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';

// TODO: Implement Filters

const BusinessesForSale = () => {
    const [businessList, setBusinessList] = useState([]);
    const [sliderMaxVals, setSliderMaxVals] = useState([0,0,0]);

    useEffect(() => {
        async function getMax() {
            let res = await Axios.get('/max-value?format=json');
            let data = await res.data;
            setSliderMaxVals([data.max_auth_capital, data.max_paidup_capital, data.max_selling_price]);
        }
        getMax();
    }, [])

    useEffect(() => {
        async function fetchData() {
            let res = await Axios.get('/business-list/?format=json');
            let data = await res.data;
            setBusinessList(data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.BusinessesForSale}>
            <NavbarMobile />
            <Navbar />

            <div className={styles.container}>
                <FilterDiv sliderMaxVals={sliderMaxVals}/>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.title}>Businesses For Sale</p>
                        <p className={styles.subtitle}>Explore the extensive range of pre-approved businesses to find the one that suits your requirement.</p>
                    </div>
                    <div className={styles.showcase}>
                        {
                            businessList.map(b => (
                                <BusinessSlide
                                    key={b.id}
                                    desc={b.sale_description}
                                    type={b.company_type}
                                    subtype={b.sub_type}
                                    industry={b.industry}
                                    state={b.state}
                                    authCapital={b.authorised_capital}
                                    paidCapital={b.paidup_capital}
                                    askingPrice="INR 40 lakh"
                                    className={styles.card}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <FilterSortMobile sliderMaxVals={sliderMaxVals} />
            <Footer />
        </div>
    )
}

export default BusinessesForSale;
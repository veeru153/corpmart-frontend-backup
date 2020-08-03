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
    // const [queryParams, setQueryParams] = ({});

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

    const updateQuery = async (param, value) => {
        let params = ['','','','','','','','','','','','','',];
        switch(param) {
            case 'state':
                value.length == 0 ? params[0] = '' : params[0] = `state=${value.join(',')}`;
                break;
            case 'country':
                value.length == 0 ? params[1] = '' : params[1] = `country=${value.join(',')}`;
                break;
            case 'type':
                value.length == 0 ? params[2] = '' : params[2] = `company_type=${value.join(',')}`;
                break;
            case 'subtype':
                value.length == 0 ? params[3] = '' : params[3] = `sub_type=${value.join(',')}`;
                break;
            case 'industry':
                value.length == 0 ? params[4] = '' : params[4] = `industry=${value.join(',')}`;
                break;
            case 'authCapital':
                params[5] = `authorised_capital_min=${value[0]}`;
                params[6] = `authorised_capital_max=${value[1]}`;
                break;
            case 'paidupCapital':
                params[7] = `paidup_capital_min=${value[0]}`;
                params[8] = `paidup_capital_max=${value[1]}`;
                break;
            case 'sellingPrice':
                params[9] = `selling_price_min=${value[0]}`;
                params[10] = `selling_price_max=${value[1]}`;
                break;
            default:
                break;
        }

        console.log(businessList);
        let res = await Axios.get(`/business-list/?format=json&${params.filter(p => p != '').join('&')}`);
        let data = await res.data;
        setBusinessList(data);

    }

    return (
        <div className={styles.BusinessesForSale}>
            <NavbarMobile />
            <Navbar />

            <div className={styles.container}>
                <FilterDiv sliderMaxVals={sliderMaxVals} updateQuery={updateQuery} />
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
            <FilterSortMobile sliderMaxVals={sliderMaxVals} updateQuery={updateQuery} />
            <Footer />
        </div>
    )
}

export default BusinessesForSale;
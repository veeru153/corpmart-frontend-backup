import React, { Component } from 'react';
import styles from './BusinessesForSale.module.css';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import FilterSortMobile from '../../components/FilterSort/FilterSortMobile';
import FilterDiv from '../../components/FilterSort/FilterDiv/FilterDiv';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';


class BusinessesForSale extends Component {
    state = {
        businessList: [],
        sliderMaxVals: [0,0,0],
        queryParams: ['','','','','','','','','','','','','',],
        page: 1,
        filterOps: [
            { name: 'GST No. Availability', checked: false },
            { name: 'Bank Account Availability', checked: false },
        ],
        selectedOps: []
    }

    async componentDidMount() {
        let res = await Axios.get('/max-value?format=json');
        let data = await res.data;

        let res2 = await Axios.get(`/business-list/?format=json&page=${this.state.page}`);
        let data2 = await res2.data.results;

        this.setState({
            sliderMaxVals: [data.max_auth_capital, data.max_paidup_capital, data.max_selling_price],
            businessList: data2
        });
    }

    handleOption = (index) => {
        const tempOps = [...this.state.filterOps];
        tempOps[index] = { ...tempOps[index], checked: !this.state.filterOps[index].checked };
        this.setState({
            filterOps: tempOps
        }, () => {
            if(index == 0) {
                this.updateQuery('gst', this.state.filterOps[0].checked)
            } else {
                this.updateQuery('bank', this.state.filterOps[0].checked)
            }
        })
    }

    updateQuery = async (param, value) => {
        let params = [...this.state.queryParams];
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
            case 'gst':
                params[11] = value ? 'gst=True' : 'gst=False';
                break;
            case 'bank':
                params[12] = value ? 'bank=True' : 'bank=False';
                break;
            default:
                break;
        }

        this.setState({
            queryParams: params
        }, async () => {
            let res = await Axios.get(`/business-list/?format=json&page=${this.state.page}&${params.filter(p => p != '').join('&')}`);
            let data = await res.data.results;
            this.setState({
                businessList: data
            }, () => console.log(this.state.businessList))
        })
    }

    render() {
        return (
            <div className={styles.BusinessesForSale}>
                <NavbarMobile />
                <Navbar />
    
                <div className={styles.container}>
                    <FilterDiv 
                        sliderMaxVals={this.state.sliderMaxVals} 
                        updateQuery={this.updateQuery} 
                        filterOps={this.state.filterOps}
                        handleOption={this.handleOption}
                    />
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.title}>Businesses For Sale</p>
                            <p className={styles.subtitle}>Explore the extensive range of pre-approved businesses to find the one that suits your requirement.</p>
                        </div>
                        <div className={styles.showcase}>
                            {
                                this.state.businessList.map(b => (
                                    <BusinessSlide
                                        key={b.id}
                                        id={b.id}
                                        desc={b.sale_description}
                                        type={b.company_type}
                                        subtype={b.sub_type}
                                        subtypeOther={b.sub_type_others_description}
                                        industry={b.industry}
                                        industryOther={b.industries_others_description}
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
                <FilterSortMobile 
                    sliderMaxVals={this.state.sliderMaxVals} 
                    updateQuery={this.updateQuery}
                    filterOps={this.state.filterOps}
                    handleOption={this.handleOption}
                />
                <Footer />
            </div>
        )
    }
}

export default BusinessesForSale;
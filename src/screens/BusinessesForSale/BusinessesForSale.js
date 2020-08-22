import React, { Component } from 'react';
import styles from './BusinessesForSale.module.css';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import FilterSortMobile from '../../components/FilterSort/FilterSortMobile';
import FilterDiv from '../../components/FilterSort/FilterDiv/FilterDiv';
import SortDropdown from '../../components/FilterSort/SortDropdown/SortDropdown';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';


class BusinessesForSale extends Component {
    state = {
        businessList: [],
        sliderMaxVals: [0, 0, 0],
        queryParams: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        page: 1,
        nextPage: null,
        prevPage: null,
        filterOps: [
            { name: 'GST No. Availability', checked: false },
            { name: 'Bank Account Availability', checked: false },
        ],
        selectedOps: [],
        loaded: false,
    }

    async componentDidMount() {
        window.scrollTo(0,0);
        if(document.location.search.match(/\?search=\S{1,}/gmi)) {
            let params = [...this.state.queryParams];
            params[14] = document.location.search.substring(1);
            this.setState({
                queryParams: params
            })
        }
        let res = await Axios.get('/max-value?format=json');
        let data = await res.data;

        let res2 = await Axios.get(`/business-list/?format=json&page=${this.state.page}&${this.state.queryParams.filter(p => p != '').join('&')}`);
        let data2 = await res2.data;

        this.setState({
            sliderMaxVals: [data.max_auth_capital, data.max_paidup_capital, data.max_selling_price],
            businessList: data2.results,
            nextPage: data2.next,
            prevPage: data2.previous,
            loaded: true,
        });
    }

    handleExploreSearch = async (query) => {
        let params = [...this.state.queryParams];
        params[14] = query ? `search=${query}` : '';
        this.setState({
            queryParams: params
        })
        let res2 = await Axios.get(`/business-list/?format=json&page=${this.state.page}&${this.state.queryParams.filter(p => p != '').join('&')}`);
        let data2 = await res2.data;

        this.setState({
            businessList: data2.results,
            nextPage: data2.next,
            prevPage: data2.prev,
        })
    }

    fetchNewList = async () => {
        let res = await Axios.get(`/business-list/?format=json&page=${this.state.page}&${this.state.queryParams.filter(p => p != '').join('&')}`);
        let data = await res.data;
        this.setState({
            businessList: data.results,
            nextPage: data.next,
            prevPage: data.previous,
        })
    }

    handleOption = (index) => {
        const tempOps = [...this.state.filterOps];
        tempOps[index] = { ...tempOps[index], checked: !this.state.filterOps[index].checked };
        this.setState({
            filterOps: tempOps
        }, () => {
            if (index == 0) {
                this.updateQuery('gst', this.state.filterOps[0].checked)
            } else {
                this.updateQuery('bank', this.state.filterOps[1].checked)
            }
        })
    }

    handlePageChange = async (type) => {
        switch (type) {
            case 'next':
                if(this.state.nextPage == null) return;
                this.setState((prevState) => ({
                    page: prevState.page + 1
                }), this.fetchNewList)
                break;
            case 'prev':
                if(this.state.prevPage == null) return;
                this.setState((prevState) => ({
                    page: prevState.page - 1
                }), this.fetchNewList)
                break;
            default:
                break;
        }
    }

    updateQuery = async (param, value) => {
        let params = [...this.state.queryParams];
        switch (param) {
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
                params[11] = value ? 'gst=True' : '';
                break;
            case 'bank':
                params[12] = value ? 'bank=True' : '';
                break;
            case 'sort':
                if (value == 0) {
                    params[13] = '';
                } else {
                    params[13] = `sort_by=${value}`;
                }
            default:
                break;
        }

        this.setState({
            queryParams: params
        }, async () => {
            let res = await Axios.get(`/business-list/?format=json&page=${this.state.page}&${params.filter(p => p != '').join('&')}`);
            let data = await res.data;
            this.setState({
                businessList: data.results,
                nextPage: data.next,
                prevPage: data.previous,
            })
        })
    }

    render() {
        return (
            <div className={styles.BusinessesForSale}>
                <NavbarMobile explorePage handleExploreSearch={this.handleExploreSearch}/>
                <Navbar explorePage handleExploreSearch={this.handleExploreSearch}/>

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
                        <div className={styles.sortDropdownContainer}>
                            <SortDropdown
                                updateQuery={this.updateQuery}
                                currVal={this.state.queryParams[13]}
                            />
                        </div>
                        <div className={styles.showcase}>
                            { this.state.loaded ? this.state.businessList.length != 0 ? 
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
                                        authCapital={b.authorised_capital ?? 0}
                                        paidCapital={b.paidup_capital ?? 0}
                                        askingPrice={b.admin_defined_selling_price ?? 0}
                                        className={styles.card}
                                    />
                                )) :
                                <p className={styles.subtitle} style={{ color: 'red' }}>No matching results.</p>
                                : <div className={styles.loading}>
                                    <Spinner />
                                    <p className={styles.subtitle}>Loading...</p>
                                </div>
                            }
                        </div>
                        <div style={{ margin: '44px auto' }}>
                            <Button
                                label="<< Previous"
                                type={this.state.prevPage == null ? "#DADEE4" : "#FFFFFF"}
                                color={this.state.prevPage == null ? "#676767" : "#000000"}
                                textStyle={{ padding: '12px 20px' }}
                                style={{ margin: '0 6px' }}
                                disabled={this.state.prevPage}
                                pressed={() => this.handlePageChange('prev')}
                            />
                            <Button
                                label="Next >>"
                                type={this.state.nextPage == null ? "#DADEE4" : "#FFFFFF"}
                                color={this.state.nextPage == null ? "#676767" : "#000000"}
                                textStyle={{ padding: '12px 0', minWidth: 136.77 }}
                                style={{ margin: '0 6px' }}
                                disabled={this.state.nextPage}
                                pressed={() => this.handlePageChange('next')}
                            />
                        </div>
                    </div>
                </div>
                <FilterSortMobile
                    sliderMaxVals={this.state.sliderMaxVals}
                    updateQuery={this.updateQuery}
                    filterOps={this.state.filterOps}
                    handleOption={this.handleOption}
                    queryParams={this.state.queryParams}
                />
                <Footer />
            </div>
        )
    }
}

export default BusinessesForSale;
import React, { Component } from 'react';
import styles from './UserDashboard.module.css';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import Footer from '../Landing/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import DashboardNavMobile from '../../components/DashboardNav/DashboardNavMobile';
import Axios from '../../axios';
import Cookies from 'universal-cookie';
import Spinner from '../../components/UI/Spinner/Spinner';
import SortDropdown from './SortDropdown/SortDropdown';

class UserDashboard extends Component {
    state = {
        currPanel: 'yourListings',
        businessList: [],
        loading: true,
        sortQuery: 0,
    }
    
    getBusinesses = async (request) => {
        const cookies = new Cookies();
        let endpoint = request == 'yourListings' ? 'user-business' : 'view-history';
        let res = await Axios.get(`/${endpoint}/?format=json`, {
            headers: {
                'Authorization': `Token ${cookies.get('userToken')}`
            }
        });
        let tempList = await res.data;
        this.setState({
            businessList: tempList,
            loading: false,
        })
    }

    componentDidMount() {
        const cookies = new Cookies();
        let token = cookies.get('userToken');
        if(!token) this.props.history.push('/');
        document.title = "User Dashboard - CorpMart - One Stop Solution for Business Acquisition";
        document.querySelector('#meta-desc').setAttribute('content', "Trusted platform for acquiring pre-verified businesses, selling businesses at a profit across India within few clicks.");
        window.scrollTo(0,0);
        this.getBusinesses(this.state.currPanel);
    }

    changePanel = (panel) => {
        this.setState({
            currPanel: panel
        }, () => this.getBusinesses(this.state.currPanel))
    }

    handleSort = async (query) => {
        this.setState({ loading: true, sortQuery: query, })

        const cookies = new Cookies();
        let endpoint = this.state.currPanel == 'yourListings' ? 'user-business' : 'view-history';
        let sortQuery = query == 0 ? "" : `&sort_by=${query}`
        try {
            let res = await Axios.get(`/${endpoint}/?format=json${sortQuery}`, {
                headers: {
                    'Authorization': `Token ${cookies.get('userToken')}`
                }
            });
            let tempList = await res.data;
            this.setState({
                businessList: tempList,
                loading: false,
            })
        } catch (e) { console.log(e.response); }
    }

    render() {
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
                            <Button 
                                type="blue" 
                                label="Add Listing" 
                                textStyle={{ padding: '12px 20px' }} 
                                pressed={() => this.props.history.push('/list-your-business')}
                            />
                        </div>
                        <div
                            className={styles.sidebarOptions}
                            style={{ justifyContent: 'flexStart', alignItems: 'left', margin: '0 30px' }}
                        >
                            <p
                                className={styles.sidebarOptionsText}
                                style={{ 
                                    fontWeight: this.state.currPanel == 'yourListings' ? 'normal' : '300',
                                    color: this.state.currPanel == 'yourListings' ? '#4AB9CE' : 'inherit',
                                 }}
                                onClick={() => this.changePanel('yourListings')}
                            >Your Listing</p>
                            <p
                                className={styles.sidebarOptionsText}
                                style={{ 
                                    fontWeight: this.state.currPanel == 'recentlyViewed' ? 'normal' : '300',
                                    color: this.state.currPanel == 'recentlyViewed' ? '#4AB9CE' : 'inherit',
                                 }}
                                onClick={() => this.changePanel('recentlyViewed')}
                            >Recently Viewed</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.title}>My Dashboard</p>
                            <p className={styles.subtitle}>From here you can manage your business listings and balancesheet requests.</p>
                        </div>
                        <div className={styles.sortDropdownContainer}>
                            <SortDropdown
                                updateQuery={this.handleSort}
                                currVal={this.state.sortQuery}
                            />
                        </div>
                        <div className={styles.showcase}>
                            {this.state.loading
                                ? <div className={styles.loading}><Spinner /></div>
                                : 
                                this.state.businessList.map(b => (
                                <BusinessSlide
                                    key={!b.viewed_at ? b.id : b.business.id}
                                    id={!b.viewed_at ? b.id : b.business.id}
                                    desc={ !b.viewed_at ? b.sale_description : b.business.sale_description}
                                    type={ !b.viewed_at ? b.company_type : b.business.company_type}
                                    subtype={ !b.viewed_at ? b.sub_type : b.business.sub_type}
                                    industry={ !b.viewed_at ? b.industry : b.business.industry}
                                    state={ !b.viewed_at ? b.state : b.business.state}
                                    authCapital={ !b.viewed_at ? b.authorised_capital ?? 0 : b.business.authorised_capital ?? 0}
                                    paidCapital={!b.viewed_at ? b.paidup_capital ?? 0 : b.business.paidup_capital ?? 0}
                                    askingPrice={!b.viewed_at ? b.admin_defined_selling_price ?? 0 : b.business.admin_defined_selling_price ?? 0}
                                    className={styles.card}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <DashboardNavMobile
                    changePanel={this.changePanel} 
                    handleSort={this.handleSort}
                    selectedSort={this.state.sortQuery}
                />
                <Footer />
            </div>
        )
    }

}

export default UserDashboard;
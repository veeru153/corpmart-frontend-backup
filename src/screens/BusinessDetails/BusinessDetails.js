import React, { Component } from 'react';
import styles from './BusinessDetails.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import Button from '../../components/UI/Button/Button';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';
import Cookies from 'universal-cookie';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

class BusinessDetails extends Component {
    state = {
        loggedIng: false,
        id: '',
        desc: '',
        type: '',
        subtype: '',
        industry: '',
        yearOfIncorporation: '',
        state: '',
        authCapital: 0,
        paidupCapital: 0,
        askingPrice: 0,
        gst: false,
        bankAcc: false,
        ieCode: false,
        otherLicenses: false,
        balancesheet: false,
        balancesheetId: null,
        other: {},
        error: false,
        errorMsg: '',
    }

    async componentDidMount() {
        const cookies = new Cookies();
        const token = cookies.get('userToken');
        const { match: { params } } = this.props;
        const { id } = params;
        try {
            let res;
            if (token) {
                res = await Axios.get(`/business-detail/?format=json&business_id=${id}`, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
            } else {
                res = await Axios.get(`/business-detail/?format=json&business_id=${id}`);
            }
            let data = await res.data[0];
            this.setState((prevState) => ({
                ...prevState,
                loggedIn: token ? true : false,
                id: id,
                desc: data.sale_description,
                type: data.company_type,
                subtype: data.sub_type,
                industry: data.industry,
                yearOfIncorporation: data.year_of_incorporation,
                state: data.state,
                authCapital: data.authorised_capital,
                paidupCapital: data.paidup_capital,
                gst: data.has_gst_number,
                bankAcc: data.has_bank_account,
                ieCode: data.has_import_export_code,
                otherLicenses: data.has_other_license,
                balancesheet: data.balancesheet_available,
                balancesheetId: data.balancesheet_id,
            }))
        } catch (e) { console.log(e.response); }
    }

    fetchBalancesheet = async () => {
        const cookies = new Cookies();
        const token = cookies.get('userToken');
        const id = this.state.id;
        try {
            let res = await Axios.get(`/balancesheet/?balancesheet_id=${id}`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            let link = await res.data[0].file;
            window.open(link, '_blank');
        } catch (e) { console.log(e.response); }
    }

    postContact = async () => {
        const cookies = new Cookies();
        const token = cookies.get('userToken');
        const id = this.state.id;
        try {
            if(token) {
                let res = await Axios.post(`contact-request`, {
                    "business": id
                }, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
            } else {
                this.props.history.push('/login');
            }
        } catch (e) { 
            console.log(e.response); 
            if(e.response.data["non_field_errors"][0].includes('unique field')) {
                this.setState({
                    error: true,
                    errorMsg: "Already Contacted"
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <NavbarMobile />
                <div className={styles.BusinessDetails}>
                    <div className={styles.selectedBusiness}>
                        <div className={styles.detailsCard}>
                            <p className={styles.businessDesc}>{this.state.desc}</p>
                            <div className={styles.businessInfo}>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>Type</div>
                                    <div className={styles.businessInfoValue}>{this.state.type}</div>
                                </div>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>Sub Type</div>
                                    <div className={styles.businessInfoValue}>{this.state.subtype}</div>
                                </div>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>Industry</div>
                                    <div className={styles.businessInfoValue} style={{ textTransform: 'capitalize' }}>{this.state.industry.toLowerCase()}</div>
                                </div>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>State</div>
                                    <div className={styles.businessInfoValue}>{this.state.state}</div>
                                </div>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>Authorised Capital</div>
                                    <div className={styles.businessInfoValue}>{this.state.authCapital.toString()}</div>
                                </div>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>Paid-Up Capital</div>
                                    <div className={styles.businessInfoValue}>{this.state.paidupCapital.toString()}</div>
                                </div>
                                <div className={styles.businessInfoRow}>
                                    <div className={styles.businessInfoLabel}>Asking Price</div>
                                    <div className={styles.businessInfoValue} style={{ fontWeight: 'normal' }}>{this.state.askingPrice.toString()}</div>
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.gst
                                        ? <>
                                            <CheckCircleIcon style={{ fontSize: 16, color: '#55B546' }} />
                                            <p className={styles.regAvailable}>GST no. available</p>
                                        </>
                                        : <>
                                            <CancelRoundedIcon style={{ fontSize: 16, color: '#FF3232' }} />
                                            <p className={styles.regNotAvailable}>GST no. not available</p>
                                        </>
                                    }
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.bankAcc
                                        ? <>
                                            <CheckCircleIcon style={{ fontSize: 16, color: '#55B546' }} />
                                            <p className={styles.regAvailable}>Bank account available</p>
                                        </>
                                        : <>
                                            <CancelRoundedIcon style={{ fontSize: 16, color: '#FF3232' }} />
                                            <p className={styles.regNotAvailable}>Bank account not available</p>
                                        </>
                                    }
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.ieCode
                                        ? <>
                                            <CheckCircleIcon style={{ fontSize: 16, color: '#55B546' }} />
                                            <p className={styles.regAvailable}>Import/Export code available</p>
                                        </>
                                        : <>
                                            <CancelRoundedIcon style={{ fontSize: 16, color: '#FF3232' }} />
                                            <p className={styles.regNotAvailable}>Import/Export code not available</p>
                                        </>
                                    }
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.otherLicenses
                                        ? <>
                                            <CheckCircleIcon style={{ fontSize: 16, color: '#55B546' }} />
                                            <p className={styles.regAvailable}>Other licenses available</p>
                                        </>
                                        : <>
                                            <CancelRoundedIcon style={{ fontSize: 16, color: '#FF3232' }} />
                                            <p className={styles.regNotAvailable}>No other licenses available</p>
                                        </>
                                    }
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.balancesheet
                                        ? <>
                                            <CheckCircleIcon style={{ fontSize: 16, color: '#55B546' }} />
                                            <p className={styles.regAvailable}>Balancesheet available</p>
                                        </>
                                        : <>
                                            <CancelRoundedIcon style={{ fontSize: 16, color: '#FF3232' }} />
                                            <p className={styles.regNotAvailable}>Balancesheet not available</p>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.balancesheet}>
                            <div className={styles.bsDiv1}>
                                <p>Balancesheet of this business is available</p>
                                <div className={styles.bsImg}></div>
                                <Button
                                    label="View"
                                    type={this.state.balancesheet ? "orange" : "#DADEE4"}
                                    color={this.state.balancesheet ? "white" : "#676767"}
                                    style={{ padding: '12px 16px' }}
                                    textStyle={{ margin: 0 }}
                                    pressed={this.fetchBalancesheet}
                                    disabled={!this.state.balancesheet}
                                />
                            </div>
                            <div className={styles.bsDiv2}>
                                <p>Interseted in acquiring this business?</p>
                                {this.state.error && this.state.errorMsg == "Already Contacted"
                                ?   <p style={{ color: 'red'}}>We have already received your Contact Request</p>
                                :   null}
                                <p></p>
                                <Button
                                    label="contact"
                                    type="orange"
                                    style={{ padding: '12px 16px' }}
                                    textStyle={{ margin: 0 }}
                                    pressed={this.postContact}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.otherBusinesses}>
                        <div className={styles.header}>
                            <p className={styles.title}>Other Businesses for sale</p>
                        </div>
                        <BusinessSlide
                            key={this.state.id}
                            id={this.state.id}
                            desc={this.state.sale_description}
                            type={this.state.company_type}
                            subtype={this.state.sub_type}
                            industry={this.state.industry}
                            state={this.state.state}
                            authCapital={this.state.authorised_capital ?? 0}
                            paidCapital={this.state.paidup_capital ?? 0}
                            askingPrice={this.state.askingPrice ?? 0}
                            className={styles.card}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BusinessDetails;
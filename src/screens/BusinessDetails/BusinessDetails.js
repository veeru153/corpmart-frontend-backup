import React, { Component } from 'react';
import styles from './BusinessDetails.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import BusinessSlide from '../../components/BusinessSlide/BusinessSlide';
import Button from '../../components/UI/Button/Button';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';

class BusinessDetails extends Component {
    state = {
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
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const { id } = params;
        console.log(id);
        let res = await Axios.get(`https://salty-inlet-27527.herokuapp.com/api/v1/business-detail/?format=json&business_id=2`);
        let data = await res.data[0]
        this.setState((prevState) => ({
            ...prevState,
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
                                        ? <p className={styles.regAvailable}>GST no. available</p>
                                        : <p className={styles.regNotAvailable}>GST no. not available</p>}
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.bankAcc
                                        ? <p className={styles.regAvailable}>Bank account available</p>
                                        : <p className={styles.regNotAvailable}>Bank account not available</p>}
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.ieCode
                                        ? <p className={styles.regAvailable}>Import/Export code available</p>
                                        : <p className={styles.regNotAvailable}>Import/Export code not available</p>}
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.otherLicenses
                                        ? <p className={styles.regAvailable}>Other licenses available</p>
                                        : <p className={styles.regNotAvailable}>No other licenses available</p>}
                                </div>
                                <div className={styles.businessRegRow}>
                                    {this.state.balancesheet
                                        ? <p className={styles.regAvailable}>Balancesheet available</p>
                                        : <p className={styles.regNotAvailable}>Balancesheet not available</p>}
                                </div>
                            </div>
                        </div>
                        <div className={styles.balancesheet}>
                            <div className={styles.bsDiv1}>
                                <p>Balancesheet of this business is available</p>
                                <div className={styles.bsImg}></div>
                                <Button
                                    label="View"
                                    type="orange"
                                    style={{ padding: '12px 16px' }}
                                    textStyle={{ margin: 0 }}
                                />
                            </div>
                            <div className={styles.bsDiv2}>
                                <p>Interseted in acquiring this business?</p>
                                <Button
                                    label="contact"
                                    type="orange"
                                    style={{ padding: '12px 16px' }}
                                    textStyle={{ margin: 0 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.otherBusinesses}>
                        <div className={styles.header}>
                            <p className={styles.title}>Other Businesses for sale</p>
                        </div>
                        <BusinessSlide 
                            key="{b.id}"
                            id="{b.id}"
                            desc="{b.sale_description}"
                            type="{b.company_type}"
                            subtype="{b.sub_type}"
                            industry="{b.industry}"
                            state="{b.state}"
                            authCapital="{b.authorised_capital}"
                            paidCapital="{b.paidup_capital}"
                            askingPrice="INR 40 lakh"
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
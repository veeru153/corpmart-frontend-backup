import React, { Component } from 'react';
import styles from './BusinessShowcase.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from '../../../components/UI/Button/Button';
import BusinessSlide from '../../../components/BusinessSlide/BusinessSlide';
import { Link } from 'react-router-dom';
import Axios from '../../../axios';
import Carousel from 'react-elastic-carousel';

class BusinessForSale extends Component {
    state = {
        businessCards: [],
        itemsToShow: 1,
        carouselWidth: '100%'
    }

    async componentDidMount() {
        try {
            let res = await Axios.get('/business-list/?format=json&page=1');
            let data = await res.data;
            this.setState({
                businessCards: data.results,
            })
        } catch (e) { console.log(e.response); }

        if (window.innerWidth >= 1024) {
            this.setState({
                itemsToShow: 2,
                carouselWidth: '60%',
            })
        } else if (window.innerWidth >= 1360) {
            this.setState({
                itemsToShow: 2,
                carouselWidth: '50%',
            })
        }
    }

    render() {
        return (
            <div className={styles.BusinessShowcase}>
                <div className={styles.header}>
                    <p className={styles.title}>Businesses for Sale</p>
                    <p className={styles.subtitle}>Explore the extensive range of options across various industries.</p>
                </div>
                <Carousel
                        className={styles.carousel}
                        style={{ width: this.state.carouselWidth }}
                        itemsToShow={this.state.itemsToShow}
                        enableAutoPlay
                        renderPagination={() => <div></div>}
                        showArrows={false}
                    >
                    {
                                this.state.businessCards.map(b => (
                                    <div style={{  padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'items', width: '100%' }}>
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
                                    </div>
                                ))
                            }
                </Carousel>
                <div className={styles.btnContainer}>
                    <Link to="/explore">
                        <Button 
                            label="View More" 
                            type="orange" 
                            style={{ padding: '12px 56px' }} 
                            textStyle={{ margin: 0 }}
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default BusinessForSale;
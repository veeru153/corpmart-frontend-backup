import React, { Component } from 'react';
import styles from './Testimonials.module.css';
import Button from '../../../components/UI/Button/Button';
import TestimonialSlide from '../../../components/TestimonialSlide/TestimonialSlide';
import { Link } from 'react-router-dom';
import Axios from '../../../axios';
import Carousel from 'react-elastic-carousel';

class Testimonials extends Component {
    state = {
        testimonialCards: [],
        itemsToShow: 1,
        carouselWidth: '100%'
    }

    async componentDidMount() {
        try {
            let res = await Axios.get('/testimonial/');
            let data = await res.data;
            this.setState({
                testimonialCards: data,
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
            <div className={styles.Testimonials}>
                <div className={styles.header}>
                    <p className={styles.title}>Testimonials</p>
                    <p className={styles.subtitle}>Here's what our happy clients have to say about their experience.</p>
                </div>
                <Carousel
                    className={styles.carousel}
                    style={{ width: this.state.carouselWidth }}
                    itemsToShow={this.state.itemsToShow}
                    enableAutoPlay
                    renderPagination={() => <div></div>}
                    showArrows={false}
                >
                    {this.state.testimonialCards.map(card => (
                        <TestimonialSlide
                            key={card.id}
                            imgUrl={card.picture}
                            name={card.name}
                            meta={card.designation}
                            testimonialText={card.text}
                        />
                    ))}
                </Carousel>
                <div className={styles.btnContainer}>
                    <Link to="/testimonials">
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

export default Testimonials;
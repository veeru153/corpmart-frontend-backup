import React, { Component } from 'react';
import styles from './Testimonials.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import TestimonialSlide from '../../components/TestimonialSlide/TestimonialSlide';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';

class Testimonials extends Component {
    state = {
        testimonialCards: []
    }

    async componentDidMount() {
        document.title = "Testimonials - CorpMart - One Stop Solution for Business Acquisition";
        window.scrollTo(0,0);
        let res = await Axios.get('/testimonial/');
        let data = await res.data;
        this.setState({
            testimonialCards: data
        })
    }

    render() {
        return (
            <div>
                <NavbarMobile />
                <Navbar />
                <div className={styles.Testimonials}>
                    <div className={styles.header}>
                        <p className={styles.title}>Testimonials</p>
                        <p className={styles.subtitle}>Here's what our happy clients have to say about their experience</p>
                    </div>
                    <div className={styles.carousel}>
                        {this.state.testimonialCards.map(card => (
                            <>
                                <TestimonialSlide
                                    key={card.id}
                                    imgUrl={card.picture}
                                    name={card.name}
                                    meta={card.designation}
                                    testimonialText={card.text}
                                />
                                <TestimonialSlide
                                    key={card.id}
                                    imgUrl={card.picture}
                                    name={card.name}
                                    meta={card.designation}
                                    testimonialText={card.text}
                                />
                            </>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Testimonials;
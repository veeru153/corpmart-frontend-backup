import React from 'react';
import styles from './Testimonials.module.css';
import Button from '../../../components/UI/Button/Button';
import TestimonialSlide from './TestimonialSlide/TestimonialSlide';

const Testimonials = () => {
    return (
        <div className={styles.Testimonials}>
            <div className={styles.header}>
                <p className={styles.title}>Testimonials</p>
                <p className={styles.subtitle}>Here's what our happy clients have to say about their experience</p>
            </div>
            <div className={styles.carousel}>
                <TestimonialSlide />
            </div>
            <div className={styles.btnContainer}>
                <Button 
                    label="View More" 
                    type="orange" 
                    style={{ padding: '12px 56px' }} 
                    textStyle={{ margin: 0 }}
                />
            </div>
        </div>
    )
}

export default Testimonials;
import React from 'react';
import styles from './Testimonials.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import TestimonialSlide from '../../components/TestimonialSlide/TestimonialSlide';

const Testimonials = () => {

    const dummyBlogText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem sem, tempus in ipsum non, convallis ullamcorper leo. Maecenas tincidunt laoreet enim, a commodo lorem facilisis id. Praesent nec imperdiet lectus. Nulla suscipit accumsan dignissim. Aliquam malesuada vel lorem in sollicitudin. Ut gravida eu ante eu dignissim. Cras fermentum tellus eu dignissim tempus. Nulla lobortis non magna ut dapibus. Sed sollicitudin eros non mauris porta, eu mollis magna pretium. Donec eget metus mauris. Morbi et ornare ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum neque. Morbi sit amet gravida mauris. Mauris ut velit pharetra, malesuada elit ac, euismod risus. Cras varius sit amet massa id auctor.";

    return (
        <div className={styles.Testimonials}>
            <NavbarMobile />
            <Navbar />
            <div className={styles.header}>
                <p className={styles.title}>Testimonials</p>
                <p className={styles.subtitle}>Here's what our happy clients have to say about their experience</p>
            </div>
            <div className={styles.carousel}>
                <TestimonialSlide 
                    // img
                    name="Shubham Ahujha"
                    meta="Something idk"
                    testimonialText={dummyBlogText}
                />
                <TestimonialSlide 
                    // img
                    name="Shubham Ahujha"
                    meta="Something idk"
                    testimonialText={dummyBlogText}
                />
                <TestimonialSlide 
                    // img
                    name="Shubham Ahujha"
                    meta="Something idk"
                    testimonialText={dummyBlogText}
                />
            </div>
        </div>
    )
}

export default Testimonials;
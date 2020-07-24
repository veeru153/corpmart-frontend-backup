import React from 'react';
import styles from './Landing.module.css';
import Main from './Main/Main';
import WhyCorpmart from './WhyCorpmart/WhyCorpmart';
import BusinessShowcase from './BusinessShowcase/BusinessShowcase';
import Testimonials from './Testimonials/Testimonials';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <NavbarMobile />
            <Navbar />
            <Main />
            <WhyCorpmart />
            <BusinessShowcase />
            <Testimonials />
            <Blogs />
            <Footer />
        </div>
    )
}

export default Landing;
import React from 'react';
import styles from './Landing.module.css';
import Main from './Main/Main';
import WhyCorpmart from './WhyCorpmart/WhyCorpmart';
import BusinessShowcase from './BusinessShowcase/BusinessShowcase';
import Testimonials from './Testimonials/Testimonials';
import Blogs from './Blogs/Blogs';
import CorpmartInMedia from './CorpmartInMedia/CorpmartInMedia';
import Footer from './Footer/Footer';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import MyChatbot from '../../components/MyChatbot/MyChatbot';

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <NavbarMobile dynamic/>
            <Navbar dynamic/>
            <Main />
            <WhyCorpmart />
            <BusinessShowcase />
            <Testimonials />
            <Blogs />
            <CorpmartInMedia />
            <Footer />
            <MyChatbot />
        </div>
    )
}

export default Landing;
import React from 'react';
import styles from './Landing.module.css';
import Main from './Main/Main';
import WhyCorpmart from './WhyCorpmart/WhyCorpmart';
import BusinessShowcase from './BusinessShowcase/BusinessShowcase';
import Testimonials from './Testimonials/Testimonials';

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <Main />
            <WhyCorpmart />
            <BusinessShowcase />
            <Testimonials />
        </div>
    )
}

export default Landing;
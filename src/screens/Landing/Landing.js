import React from 'react';
import styles from './Landing.module.css';
import Main from './Main/Main';
import WhyCorpmart from './WhyCorpmart/WhyCorpmart';
import BusinessShowcase from './BusinessShowcase/BusinessShowcase';

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <Main />
            <WhyCorpmart />
            <BusinessShowcase />
        </div>
    )
}

export default Landing;
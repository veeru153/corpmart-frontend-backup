import React from 'react';
import styles from './Landing.module.css';
import Main from './Main/Main';
import WhyCorpmart from './WhyCorpmart/WhyCorpmart';
import BusinessForSale from './BusinessForSale/BusinessForSale';

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <Main />
            <WhyCorpmart />
            <BusinessForSale />
        </div>
    )
}

export default Landing;
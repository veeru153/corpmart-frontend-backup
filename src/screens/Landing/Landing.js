import React from 'react';
import styles from './Landing.module.css';
import Main from './Main/Main';
import WhyCorpmart from './WhyCorpmart/WhyCorpmart';

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <Main />
            <WhyCorpmart />
        </div>
    )
}

export default Landing;
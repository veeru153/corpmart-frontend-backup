import React from 'react';
import styles from './WhyCorpmart.module.css';
import frames from './frames';

const WhyCorpmart = () => {
    return (
        <div className={styles.WhyCorpmart}>
            <div className={styles.whyText}>
                <p className={styles.title}>Why CorpMart?</p>
                <p className={styles.subTitle}>With years of experience, CorpMart has successfully provided a symbiotic online platform to people looking to acquire or sell a business.</p>
            </div>
            <div className={styles.frames}>
                {frames.map(frame => (
                    <div className={styles.frame}>
                        <div className={styles.frameImgContainer}>
                            <img src={frame.img} className={styles.frameImg} alt={frame.title} />
                        </div>
                        <div className={styles.frameTitle}>
                            <p>{frame.title}</p>
                        </div>
                        <div className={styles.frameDesc}>
                            <p>{frame.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyCorpmart;
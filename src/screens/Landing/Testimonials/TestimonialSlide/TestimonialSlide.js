import React from 'react';
import styles from './TestimonialSlide.module.css';

const TestimonialSlide = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.author}>
                <div className={styles.authorImg}></div>
                <div className={styles.authorInfo}>
                    <p className={styles.authorName}>Shubham Ahuja</p>
                    <p className={styles.authorMeta}>Something idk</p>
                </div>
            </div>
            <div className={styles.blogPreview}>
                <p className={styles.blogText}>Best Online M&A Experience. Great Reliable Site. Best Experience Ever. I have found that Smergers has a good verification process. They don't indulge into getting more customers by loose verification process. Their portal is very good with all features. It is a great site for M&A. They have only serious investors & sellers there. As their could have been the most of the...</p>
            </div>
        </div>
    )
}

export default TestimonialSlide;
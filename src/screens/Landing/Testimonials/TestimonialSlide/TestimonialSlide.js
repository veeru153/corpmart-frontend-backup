import React from 'react';
import styles from './TestimonialSlide.module.css';

const TestimonialSlide = (props) => {
    const { name, meta, blogText } = props
    return (
        <div className={styles.slide}>
            <div className={styles.author}>
                <div className={styles.authorImg}></div>
                <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{name}</p>
                    <p className={styles.authorMeta}>{meta}</p>
                </div>
            </div>
            <div className={styles.blogPreview}>
                <p className={styles.blogText}>{blogText}</p>
            </div>
        </div>
    )
}

export default TestimonialSlide;
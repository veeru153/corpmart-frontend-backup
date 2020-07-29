import React from 'react';
import styles from './BlogSlide.module.css';

const BlogSlide = (props) => {
    const { title, date, author, blogText } = props;
    return (
        <div className={styles.slide}>
            {/* <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.meta}>
                    <p className={styles.date}>{date}</p>
                    <p className={styles.author}>By - {author}</p>
                </div>
            </div>
            <div className={styles.blogPreview}>
                <p className={styles.blogText}>{blogText}</p>
            </div> */}
            <div className={styles.imgPreview}></div>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.meta}>
                    <p className={styles.date}>{date}</p>
                    <p className={styles.author}>By - {author}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogSlide;
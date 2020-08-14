import React from 'react';
import styles from './BlogSlide.module.css';

const BlogSlide = (props) => {
    const { title, date, author, imgUrl } = props;
    return (
        <div className={styles.slide}>
            <div className={styles.imgPreview}>
                {!imgUrl || imgUrl.length == 0
                ?  <div className={styles.defaultImg}></div> 
                :  <img src={imgUrl} className={styles.image} />}
            </div>
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
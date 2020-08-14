import React from 'react';
import styles from './BlogExpanded.module.css';

const BlogExpanded = (props) => {
    if(!props.location.pathname.match(/\/blog\/.*/)) props.history.push('/blogs/');

    const { id, title, date, author, blogText, imgUrl } = props.location.state;
    return (
        <div className={styles.BlogExpanded}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.meta}>
                    <p className={styles.date}>{date}</p>
                    <p className={styles.author}>By - {author}</p>
                </div>
            </div>
            <div className={styles.text}>{blogText}</div>
            {!imgUrl || imgUrl.length == 0
                ? null
                : <div className={styles.image}><img src={imgUrl} alt="Blog Image" /></div>}
        </div>
    )
}

export default BlogExpanded;
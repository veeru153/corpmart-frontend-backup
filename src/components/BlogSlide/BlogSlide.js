import React from 'react';
import styles from './BlogSlide.module.css';
import { Link } from 'react-router-dom';

const BlogSlide = (props) => {
    const { id, title, date, author, imgUrl, blogText } = props;
    return (
        <Link 
            to={{
                pathname: `/blog/${id}`,
                state: {
                    id: id,
                    title: title,
                    date: date,
                    author: author,
                    imgUrl: imgUrl,
                    blogText: blogText
                }
            }} 
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <div className={styles.slide}>
                <div className={styles.imgPreview}>
                    {!imgUrl || imgUrl.length == 0
                        ? <div className={styles.defaultImg}></div>
                        : <img src={imgUrl} className={styles.image} />}
                </div>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.meta}>
                        <p className={styles.date}>{date}</p>
                        <p className={styles.author}>By - {author}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogSlide;
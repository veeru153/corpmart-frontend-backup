import React from 'react';
import styles from './BlogExpanded.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Footer from '../Landing/Footer/Footer';

const BlogExpanded = (props) => {
    if (!props.location.pathname.match(/\/blog\/.*/)) props.history.push('/blogs/');

    const { id, title, date, author, blogText, imgUrl } = props.location.state;
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <div className={styles.BlogExpanded}>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.meta}>
                        <p className={styles.author}>By - {author}</p>
                        <p className={styles.date}>{date}</p>
                    </div>
                </div>
                {!imgUrl || imgUrl.length == 0
                ? null
                : <div className={styles.image}><img src={imgUrl} alt="Blog Image" /></div>}
                <div className={styles.text}>{blogText}</div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogExpanded;
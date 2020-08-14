import React, { Component } from 'react';
import styles from './Blogs.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import BlogSlide from '../../components/BlogSlide/BlogSlide';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';
import moment from 'moment';

class Blogs extends Component {
    state = {
        blogCards: []
    }

    async componentDidMount() {
        let res = await Axios.get('/blog/');
        let data = await res.data;
        this.setState({
            blogCards: data
        })
    }

    render() {
        return (
            <div>
                <NavbarMobile />
                <Navbar />
                <div className={styles.Blogs}>
                    <div className={styles.header}>
                        <p className={styles.title}>Blogs</p>
                        <p className={styles.subtitle}>Read our weekly dose of business advice and empower yourself with the right tools!</p>
                    </div>
                    <div className={styles.carousel}>
                        {this.state.blogCards.map(card => (
                            <BlogSlide 
                                key={card.id}
                                title={card.blog_title}
                                date={moment(card.created_at).format("MMM DD, Y")}
                                author={card.posted_by}
                                blogText={card.blog_text}
                                imgUrl={card.picture}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Blogs;
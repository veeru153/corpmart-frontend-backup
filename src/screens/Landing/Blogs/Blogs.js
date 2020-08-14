import React, { Component } from 'react';
import styles from './Blogs.module.css';
import Button from '../../../components/UI/Button/Button';
import BlogSlide from '../../../components/BlogSlide/BlogSlide';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Axios from '../../../axios';

class Blogs extends Component {
    state = {
        blogCards: []
    }

    async componentDidMount() {
        try {
            let res = await Axios.get('/blog/');
            let data = await res.data;
            this.setState({
                blogCards: data
            })
        } catch (e) { console.log(e.response); }
    }

    render() {
        return (
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
                <div className={styles.btnContainer}>
                    <Link to="/blogs">
                        <Button 
                            label="View More" 
                            type="orange" 
                            style={{ padding: '12px 56px' }} 
                            textStyle={{ margin: 0 }}
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Blogs;
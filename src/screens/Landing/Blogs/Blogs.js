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
            let res = await Axios.get('/blog');
            let data = await res.data;
            this.setState({
                blogCard: data
            })
        } catch (e) { console.log(e.response)}
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
                        />
                    ))}
                    <BlogSlide 
                            title='Points to be noted while filling a form while listing your business."'
                            date='May 23'
                            author='Ashu Batra'
                            blogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem sem, tempus in ipsum non, convallis ullamcorper leo. Maecenas tincidunt laoreet enim, a commodo lorem facilisis id. Praesent nec imperdiet lectus. Nulla suscipit accumsan dignissim. Aliquam malesuada vel lorem in sollicitudin. Ut gravida eu ante eu dignissim. Cras fermentum tellus eu dignissim tempus. Nulla lobortis non magna ut dapibus. Sed sollicitudin eros non mauris porta, eu mollis magna pretium. Donec eget metus mauris. Morbi et ornare ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum neque. Morbi sit amet gravida mauris. Mauris ut velit pharetra, malesuada elit ac, euismod risus. Cras varius sit amet massa id auctor.'
                        />
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
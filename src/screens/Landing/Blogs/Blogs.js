import React, { Component } from 'react';
import styles from './Blogs.module.css';
import Button from '../../../components/UI/Button/Button';
import BlogSlide from '../../../components/BlogSlide/BlogSlide';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Axios from '../../../axios';
import Carousel from 'react-elastic-carousel';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Blogs extends Component {
    state = {
        blogCards: [],
        itemsToShow: 1,
        carouselWidth: '100%',
        loading: true,
    }

    async componentDidMount() {
        try {
            let res = await Axios.get('/blog/');
            let data = await res.data;
            this.setState({
                blogCards: data.slice(0, 8),
                loading: false,
            })
        } catch (e) { console.log(e.response); }

        if (window.innerWidth >= 1024) {
            this.setState({
                itemsToShow: 2,
                carouselWidth: '60%',
            })
        } else if (window.innerWidth >= 1360) {
            this.setState({
                itemsToShow: 2,
                carouselWidth: '50%',
            })
        }
    }

    render() {
        return (
            <div className={styles.Blogs}>
                <div className={styles.header}>
                    <p className={styles.title}>Blogs</p>
                    <p className={styles.subtitle}>Read our weekly dose of business advice and empower yourself with the right tools!</p>
                </div>
                {this.state.loading 
                    ?  <Spinner />
                    :  <Carousel
                            className={styles.carousel}
                            style={{ width: this.state.carouselWidth }}
                            itemsToShow={this.state.itemsToShow}
                            enableAutoPlay
                            renderPagination={() => <div></div>}
                            showArrows={false}
                        >
                            {this.state.blogCards.map(card => (
                                <BlogSlide
                                    key={card.id}
                                    id={card.id}
                                    title={card.blog_title}
                                    date={moment(card.created_at).format("MMM DD, Y")}
                                    author={card.posted_by}
                                    blogText={card.blog_text}
                                    imgUrl={card.picture}
                                />
                            ))}
                        </Carousel>
                }
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
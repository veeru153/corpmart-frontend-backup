import React, { Component } from 'react';
import styles from './BlogExpanded.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Footer from '../Landing/Footer/Footer';
import Axios from '../../axios';
import moment from 'moment';

class BlogExpanded extends Component {
    state = {
        id: '',
        title: '',
        date: '',
        author: '',
        blogText: '',
        imgUrl: '',
    }

    async componentDidMount() {
        if (!this.props.location.pathname.match(/\/blog\/.*/)) this.props.history.push('/blogs/');
        window.scrollTo(0,0);
        if(this.props.location.state != undefined) {
            this.setState({
                id: this.props.location.state.id,
                title: this.props.location.state.title,
                date: this.props.location.state.date,
                author: this.props.location.state.author,
                blogText: this.props.location.state.blogText,
                imgUrl: this.props.location.state.imgUrl,
            })
        } else {
            let id = window.location.pathname.split('/')[2];
            try {
                let res = await Axios.get(`/blog/${id}`);
                let data = res.data;
                this.setState({
                    id: data.id,
                    title: data.blog_title,
                    date: moment(data.created_at).format("MMM DD, Y"),
                    author: data.posted_by,
                    blogText: data.blog_text,
                    imgUrl: data.picture,
                })
            } catch (e) { console.log(e.response); }
        }
    }

    // const { id, title, date, author, blogText, imgUrl } = props.location.state;

    render() {
        return (
            <div>
                <Navbar />
                <NavbarMobile />
                <div className={styles.BlogExpanded}>
                    <div className={styles.header}>
                        <p className={styles.title}>{this.state.title}</p>
                        <div className={styles.meta}>
                            <p className={styles.author}>By - {this.state.author}</p>
                            <p className={styles.date}>{this.state.date}</p>
                        </div>
                    </div>
                    {!this.state.imgUrl || this.state.imgUrl.length == 0
                    ? null
                    : <div className={styles.image}><img src={this.state.imgUrl} alt="Blog Image" /></div>}
                    <div className={styles.text}>{this.state.blogText}</div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogExpanded;
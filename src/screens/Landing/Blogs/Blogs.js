import React from 'react';
import styles from './Blogs.module.css';
import Button from '../../../components/UI/Button/Button';
import BlogSlide from '../../../components/BlogSlide/BlogSlide';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem sem, tempus in ipsum non, convallis ullamcorper leo. Maecenas tincidunt laoreet enim, a commodo lorem facilisis id. Praesent nec imperdiet lectus. Nulla suscipit accumsan dignissim. Aliquam malesuada vel lorem in sollicitudin. Ut gravida eu ante eu dignissim. Cras fermentum tellus eu dignissim tempus. Nulla lobortis non magna ut dapibus. Sed sollicitudin eros non mauris porta, eu mollis magna pretium. Donec eget metus mauris. Morbi et ornare ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum neque. Morbi sit amet gravida mauris. Mauris ut velit pharetra, malesuada elit ac, euismod risus. Cras varius sit amet massa id auctor."

    return (
        <div className={styles.Blogs}>
            <div className={styles.header}>
                <p className={styles.title}>Blogs</p>
                <p className={styles.subtitle}>Read our weekly dose of business advice and empower yourself with the right tools!</p>
            </div>
            <div className={styles.carousel}>
                <BlogSlide 
                    title="Points to be noted while filling a form while listing your business."
                    date="May 23"
                    author="Ashu Batra"
                    blogText={dummyText}
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

export default Blogs;
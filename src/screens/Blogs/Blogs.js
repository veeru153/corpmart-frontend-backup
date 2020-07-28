import React from 'react';
import styles from './Blogs.module.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import BlogSlide from '../../components/BlogSlide/BlogSlide';
import Footer from '../Landing/Footer/Footer';

const Blogs = () => {

    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem sem, tempus in ipsum non, convallis ullamcorper leo. Maecenas tincidunt laoreet enim, a commodo lorem facilisis id. Praesent nec imperdiet lectus. Nulla suscipit accumsan dignissim. Aliquam malesuada vel lorem in sollicitudin. Ut gravida eu ante eu dignissim. Cras fermentum tellus eu dignissim tempus. Nulla lobortis non magna ut dapibus. Sed sollicitudin eros non mauris porta, eu mollis magna pretium. Donec eget metus mauris. Morbi et ornare ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum neque. Morbi sit amet gravida mauris. Mauris ut velit pharetra, malesuada elit ac, euismod risus. Cras varius sit amet massa id auctor.";

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
                    <BlogSlide
                        title="Points to be noted while filling a form while listing your business."
                        date="May 23"
                        author="Ashu Batra"
                        blogText={dummyText}
                    />
                    <BlogSlide
                        title="Points to be noted while filling a form while listing your business."
                        date="May 23"
                        author="Ashu Batra"
                        blogText={dummyText}
                    />
                    <BlogSlide
                        title="Points to be noted while filling a form while listing your business."
                        date="May 23"
                        author="Ashu Batra"
                        blogText={dummyText}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs;
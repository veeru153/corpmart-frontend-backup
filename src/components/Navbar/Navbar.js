import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [transparent, setTransparent] = useState(true);
    const { dynamic } = props;

    const handleScroll = () => {
        if (window.scrollY > 64) {
            setTransparent(false);
        } else {
            setTransparent(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    return (
        <div
            className={styles.navbarContainer}
            style={{ backgroundColor: transparent && dynamic ? 'transparent' : 'white' }}
        >
            <div
                className={styles.Navbar}
                style={{ color: transparent && dynamic ? 'white' : 'black' }}
            >
                <div className={[styles.navBtn, styles.homeBtn].join(' ')}>
                    <Link to="/">Home</Link>
                </div>
                <div className={styles.navBtn}>
                    <Link to="/explore">Businesses for Sale</Link>
                </div>
                <div className={styles.navBtn}>Search</div>
                <div className={styles.navBtn}>
                    <Link to="/login">Log in</Link>
                </div>
                <div className={styles.navBtn}>
                    <Link to="/signup">
                        <Button
                            label="Sign up"
                            type={transparent && dynamic ? "white" : "blue"}
                            color={transparent && dynamic ? "black" : "white"}
                            className={styles.signupBtn}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
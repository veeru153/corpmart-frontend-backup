import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    const [transparent, setTransparent] = useState(true);
    const { dynamic } = props;

    const handleScroll = () => {
        if(window.scrollY > 64) {
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
            style={{ backgroundColor: transparent ? 'transparent' : 'white' }}
        >
            <div 
                className={styles.Navbar}
                style={{ color: transparent && dynamic ? 'white' : 'black' }}
            >
                <div className={[styles.navBtn, styles.homeBtn].join(' ')}>Home</div>
                <div className={styles.navBtn}>Businesses for Sale</div>
                <div className={styles.navBtn}>Search</div>
                <div className={styles.navBtn}>Log in</div>
                <div className={styles.navBtn}>
                    <Button 
                        label="Sign up" 
                        type={transparent && dynamic ? "white" : "blue"} 
                        color={transparent && dynamic ? "black" : "white"}
                        className={styles.signupBtn}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
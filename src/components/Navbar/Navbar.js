import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import Cookies from 'universal-cookie';
import { handleLogout, validateToken } from '../util';

const Navbar = (props) => {
    const [transparent, setTransparent] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const { dynamic } = props;
    const cookies = new Cookies();

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

    useEffect(() => {
        async function validateSession() {
            let validity = await validateToken();
            if(validity == 200) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }
        validateSession();
    }, [])

    return (
        <div
            className={styles.navbarContainer}
            style={{ 
                backgroundColor: transparent && dynamic ? 'transparent' : 'white',
                boxShadow: transparent && dynamic ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.25)',
            }}
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
                <div 
                    className={[
                        styles.navBtn, 
                        styles.searchBar,
                        transparent && dynamic ? styles.searchBarWhite : styles.searchBarBlack
                    ].join(' ')}
                >
                    <input 
                        id="search"
                        placeholder="ex. businesses for sale"
                    />
                    <Search 
                        color={transparent && dynamic ? "white" : "black"} 
                        size={28} 
                        style={{ padding: '8px', transition: 'all 0.4s ease-in-out', flex: 1 }} 
                    />
                </div>
                <div className={styles.navBtn}>
                    {
                        loggedIn
                        ? <Link to="/dashboard">My Dashboard</Link>
                        : <Link to="/login">Log in</Link>
                    }
                </div>
                <div className={styles.navBtn}>
                    {
                        loggedIn
                        ? <Button
                                label="Log Out"
                                type={"transparent"}
                                color={transparent && dynamic ? "white" : "#484848"}
                                className={styles.signupBtn}
                                pressed={handleLogout}
                            />
                        : <Link to="/signup">
                            <Button
                                label="Sign up"
                                type={transparent && dynamic ? "white" : "blue"}
                                color={transparent && dynamic ? "black" : "white"}
                                className={styles.signupBtn}
                            />
                          </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;
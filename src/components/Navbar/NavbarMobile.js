import React, { useEffect, useState } from 'react';
import styles from './NavbarMobile.module.css';
import { Menu, Search } from 'react-feather';
import { Link } from 'react-router-dom';

const NavbarMobile = (props) => {
    const [transparent, setTransparent] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const { dynamic } = props;

    document.body.style.overflowY = expanded ? "hidden" : "scroll";

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
        <>
            <div 
                className={styles.Navbar} 
                style={{ 
                    backgroundColor: transparent && dynamic ? 'rgba(0,0,0,0)' : 'white',
                    boxShadow: transparent && dynamic ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.25)',
                }}
            >
                <button className={styles.navBtn} onClick={() => setExpanded(true)}>
                    <Menu 
                        color={transparent && dynamic ? "white" : "black"}
                        size={28} 
                        style={{ padding: '20px 18px 16px 18px', transition: 'all 0.4s ease-in-out' }}
                    />
                </button>
                <div 
                    className={[
                        styles.searchBar, 
                        transparent && dynamic ? styles.searchBarWhite : styles.searchBarBlack
                    ].join(' ')}
                    style={{ opacity: showSearchBar ? '100%' : '0%' }}
                >
                    <input 
                        id="search"
                        placeholder="ex. businesses for sale"
                        style={{ display: showSearchBar ? 'block' : 'none' }}
                    />
                </div> {/* Search Bar */}
                <div className={styles.navBtn}>
                    <Search 
                        color={transparent && dynamic ? "white" : "black"} 
                        size={28} 
                        style={{ padding: '20px 18px 16px 18px', transition: 'all 0.4s ease-in-out' }}
                        onClick={() => setShowSearchBar(!showSearchBar)} 
                    />
                </div>
            </div>
            <div 
                className={styles.navbarExpand} 
                style={{ width: expanded ? '100%' : '0' }}
                onClick={() => setExpanded(false)}
            >
                <div 
                    className={styles.navExpContents}
                    style={{ 
                        width: expanded ? 'calc(75% - 40px)' : '0',
                        padding: expanded ? '20px 20px' : '20px 0'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <p className={styles.navName}>Shubham Ahuja</p>
                    <Link to="/dashboard" className={styles.navLink}><p>My Dashboard</p></Link>
                    <Link to="/" className={styles.navLink}><p>Home</p></Link>
                    <Link to="/explore" className={styles.navLink}><p>Businesses for Sale</p></Link>
                    <Link to="/faq" className={styles.navLink}><p>FAQs</p></Link>
                    <Link to="/contact-us" className={styles.navLink}><p>Contact Us</p></Link>
                    <p>Logout</p>
                    <Link to="/login" className={styles.navLink}><p>Login</p></Link>
                    <Link to="/signup" className={styles.navLink}><p>Sign up</p></Link>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile;
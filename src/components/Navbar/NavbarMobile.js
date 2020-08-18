import React, { useEffect, useState } from 'react';
import styles from './NavbarMobile.module.css';
import { Menu, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { handleLogout, validateToken } from '../util';

const NavbarMobile = (props) => {
    const [transparent, setTransparent] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const { dynamic } = props;
    const [user, setUser] = useState({})

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

    useEffect(() => {
        async function validateSession() {
            let validity = await validateToken();
            if(validity && validity.status == 200) {
                setUser(validity.data);
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }
        validateSession();
    }, [])

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
                {/* Search Bar */}
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
                        autoComplete="off"
                    />
                </div>
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
                    { 
                        loggedIn
                        ? <>
                            <p className={styles.navName}>{user.first_name} {user.last_name}</p>
                            <Link to="/dashboard" className={styles.navLink}><p>My Dashboard</p></Link>
                          </> 
                        : null
                    }
                    <Link to="/" className={styles.navLink}><p>Home</p></Link>
                    <Link to="/explore" className={styles.navLink}><p>Businesses for Sale</p></Link>
                    <Link to="/testimonials" className={styles.navLink}><p>Testimonials</p></Link>
                    <Link to="/blogs" className={styles.navLink}><p>Blogs</p></Link>
                    <Link to="/faq" className={styles.navLink}><p>FAQs</p></Link>
                    <Link to="/contact-us" className={styles.navLink}><p>Contact Us</p></Link>
                    {
                        loggedIn
                        ? <div onClick={handleLogout} className={styles.navLink}><p>Logout</p></div>
                        : <>
                            <Link to="/login" className={styles.navLink}><p>Login</p></Link>
                            <Link to="/signup" className={styles.navLink}><p>Sign up</p></Link>
                          </>
                    }
                </div>
            </div>
        </>
    )
}

export default NavbarMobile;
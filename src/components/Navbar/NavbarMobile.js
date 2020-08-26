import React, { useEffect, useState } from 'react';
import styles from './NavbarMobile.module.css';
import { Menu, Search } from 'react-feather';
import { Link, withRouter } from 'react-router-dom';
import { handleLogout, validateToken } from '../util';
import { Formik } from 'formik';

import logoWhite from '../../assets/images/CorpMart-logo-white.png';
import logoWhiteMini from '../../assets/images/CorpMart-white.png';
import logo from '../../assets/images/CorpMart-logo.png';
import logoMini from '../../assets/images/CorpMart-icon.png';

// [LOW] TODO: Make Navbar slide inwards (remove black background when navbar is entirely hidden)

const NavbarMobile = (props) => {
    const [transparent, setTransparent] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const { dynamic } = props;
    const [user, setUser] = useState({})

    document.body.style.overflowY = expanded ? "hidden" : "scroll";

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
            if (validity && validity.status == 200) {
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
                {!showSearchBar
                    ? <div className={styles.logoContainer}>
                        {transparent && dynamic
                            ? <img src={logoWhite} alt="CorpMart Logo" />
                            : <img src={logo} alt="CorpMart Logo" />
                        }
                    </div>
                    : <div
                    className={[
                        styles.searchBar,
                        transparent && dynamic ? styles.searchBarWhite : styles.searchBarBlack
                    ].join(' ')}
                >
                    <Formik
                        initialValues={{
                            query: document.location.search.match(/\?search=\S{1,}/gmi)
                                ? document.location.search.substring(8)
                                : null
                        }}
                        onSubmit={(values) => {
                            if (values.query.length == 0) return;
                            if (props.explorePage) {
                                window.history.pushState('', '', `/explore/?search=${values.query}`);
                                props.handleExploreSearch(values.query);
                            } else {
                                console.log('pls')
                                props.history.push(`/explore/?search=${encodeURIComponent(values.query)}`);
                            }
                        }}
                    >{(props) => (
                        <form
                            onSubmit={props.handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    e.target.blur();
                                    props.handleSubmit()
                                };
                            }}
                        >
                            <input
                                id="search"
                                placeholder="ex. businesses for sale"
                                autoComplete="off"
                                value={props.values.query}
                                onChange={props.handleChange('query')}
                            />
                        </form>
                    )}
                    </Formik>
                </div>}
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
                        position: 'absolute',
                        left: expanded ? 0 : '-100%',
                        width: 'calc(75% - 40px)',
                        padding: '20px 20px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.logoDrawer}>
                        <img src={logo} alt="CorpMart Logo" />
                    </div>
                    {
                        loggedIn
                            ? <>
                                <p className={styles.navName}>{user.first_name} {user.last_name}</p>
                                <Link to="/dashboard" className={styles.navLink}><p>My Dashboard</p></Link>
                                <Link to="/list-your-business" className={styles.navLink}><p>Add Listing</p></Link>
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

export default withRouter(NavbarMobile);
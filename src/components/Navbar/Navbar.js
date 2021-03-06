import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';
import { Link, withRouter } from 'react-router-dom';
import { Search } from 'react-feather';
import { handleLogout, validateToken } from '../util';
import { Formik } from 'formik';

import logoWhite from '../../assets/images/CorpMart-logo-white.png';
import logoWhiteMini from '../../assets/images/CorpMart-white.png';
import logo from '../../assets/images/CorpMart-logo.png';
import logoMini from '../../assets/images/CorpMart-icon.png';

const Navbar = (props) => {
    const [transparent, setTransparent] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
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

    useEffect(() => {
        async function validateSession() {
            let validity = await validateToken();
            if (validity && validity.status == 200) {
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
                <div className={[styles.navBtn, styles.logo].join(' ')}>
                    <Link to="/">
                        {transparent && dynamic
                            ?  <img src={logoWhite} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
                            :  <img src={logo} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
                        }
                    </Link>
                </div>
                <div className={[styles.navBtn, styles.homeBtn].join(' ')}>
                    <Link to="/" className={styles.logoMini}>
                        {transparent && dynamic
                            ?  <img src={logoWhiteMini} />
                            :  <img src={logoMini} />
                        }
                    </Link>
                    <Link to="/" className={styles.homeLink}>Home</Link>
                </div>
                <div className={styles.navBtn}>
                    {/* <Link to="/explore">Businesses for Sale</Link> */}
                    <div style={{ cursor: 'pointer' }} 
                        onClick={() => {
                            let reload = window.location.pathname == '/explore' ? true : false;
                            props.history.push('/explore');
                            reload && window.location.reload();
                        }}>Businesses for Sale</div>
                </div>
                <Formik
                    initialValues={{ 
                        query: document.location.search.match(/\?search=\S{1,}/gmi) 
                                ? document.location.search.substring(8)
                                : ""
                    }}
                    onSubmit={(values) => {
                        if(values.query.length == 0 && !props.explorePage) return;
                        if(props.explorePage) {
                            values.query.length != 0
                                ? window.history.pushState('', '', `/explore/?search=${values.query}`)
                                : window.history.pushState('', '', `/explore`);
                            props.handleExploreSearch(values.query);
                        } else {
                            props.history.push(`/explore/?search=${encodeURIComponent(values.query)}`);
                        }
                    }}
                >{(props) => (
                    <form
                        className={[
                            styles.navBtn,
                            styles.searchBar,
                            transparent && dynamic ? styles.searchBarWhite : styles.searchBarBlack
                        ].join(' ')}
                        onSubmit={props.handleSubmit}
                        onKeyDown={(e) => {
                            if(e.key == 'Enter') props.handleSubmit();
                        }}
                    >
                        <input
                            id="search"
                            placeholder="ex. businesses for sale"
                            autoComplete="off"
                            value={props.values.query}
                            onChange={props.handleChange('query')}
                        />
                        <Search
                            color={transparent && dynamic ? "white" : "black"}
                            size={28}
                            style={{ padding: '8px', transition: 'all 0.4s ease-in-out', flex: 1 }}
                        />
                    </form>
                )}

                </Formik>
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

export default withRouter(Navbar);
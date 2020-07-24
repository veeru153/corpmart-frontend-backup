import React, { useEffect, useState } from 'react';
import styles from './NavbarMobile.module.css';
import { Menu, Search } from 'react-feather'

const NavbarMobile = () => {
    const [transparent, setTransparent] = useState(true);
    const [expanded, setExpanded] = useState(false);

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
                style={{ backgroundColor: transparent ? 'rgba(0,0,0,0)' : 'white'}}
            >
                <button className={styles.navBtn} onClick={() => setExpanded(true)}>
                    <Menu 
                        color={transparent ? "white" : "black"}
                        size={28} 
                        style={{ padding: '20px 18px 16px 18px', transition: 'all 0.4s ease-in-out' }}
                    />
                </button>
                <div></div> {/* Search Bar */}
                <div className={styles.navBtn}>
                    <Search 
                        color={transparent ? "white" : "black"} 
                        size={28} 
                        style={{ padding: '20px 18px 16px 18px', transition: 'all 0.4s ease-in-out' }} 
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
                    <p>My Dashboard</p>
                    <p>Home</p>
                    <p>Businesses for Sale</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Logout</p>
                    {/* <p>Login</p>
                    <p>Sign up</p> */}
                </div>
            </div>
        </>
    )
}

export default NavbarMobile;
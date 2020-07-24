import React, { useEffect, useState } from 'react';
import styles from './NavbarMobile.module.css';
import { Menu, Search } from 'react-feather'

const NavbarMobile = () => {
    const [transparent, setTransparent] = useState(true);

    const handleScroll = () => {
        if(window.scrollY > window.screen.height*0.8 - 32) {
            setTransparent(false);
        } else {
            setTransparent(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log(transparent);
    })

    return (
        <>
            <div 
                className={styles.Navbar} 
                style={{ backgroundColor: transparent ? 'rgba(0,0,0,0)' : 'white'}}
            >
                <button className={styles.navBtn}>
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
        </>
    )
}

export default NavbarMobile;
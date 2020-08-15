import React, { useEffect } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';

const styles = {
    Admin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
    }
}

const Admin = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href ='https://corpmart.el.r.appspot.com/admin';
        }, 2500)
    }, [])
    return (
        <div style={styles.Admin}>
            <Spinner />
            <h1>Redirecting to Admin Portal</h1>
        </div>
    )
}

export default Admin;
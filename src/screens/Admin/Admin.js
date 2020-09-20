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
    document.querySelector('#meta-desc').setAttribute('content', "Trusted platform for acquiring pre-verified businesses, selling businesses at a profit across India within few clicks.");
    useEffect(() => {
        setTimeout(() => {
            window.location.href ='https://db.corpmart.in/admin/';
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
import React from 'react';
import './App.css';

import Landing from './screens/Landing/Landing';
import BusinessesForSale from './screens/BusinessesForSale/BusinessesForSale';
import Testimonials from './screens/Testimonials/Testimonials';
import Blogs from './screens/Blogs/Blogs';
import ListingForm from './screens/ListingForm/ListingForm';
import Verification from './screens/Verification/Verification';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

function App() {
    return (
        <div className="App">
            {/* <Landing /> */}
            {/* <BusinessesForSale /> */}
            {/* <Testimonials /> */}
            {/* <Blogs /> */}
            {/* <ListingForm /> */}
            {/* <Verification /> */}
            {/* <Login /> */}
            <Signup />
        </div>
    );
}

export default App;

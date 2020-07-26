import React from 'react';
import './App.css';

import Landing from './screens/Landing/Landing';
import BusinessesForSale from './screens/BusinessesForSale/BusinessesForSale';
import Testimonials from './screens/Testimonials/Testimonials';
import Blogs from './screens/Blogs/Blogs';
import ListingForm from './screens/ListingForm/ListingForm';
import Verification from './screens/Verification/Verification';

function App() {
    return (
        <div className="App">
            {/* <Landing /> */}
            {/* <BusinessesForSale /> */}
            {/* <Testimonials /> */}
            {/* <Blogs /> */}
            {/* <ListingForm /> */}
            <Verification />
        </div>
    );
}

export default App;

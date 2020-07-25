import React from 'react';
import './App.css';

import Landing from './screens/Landing/Landing';
import BusinessesForSale from './screens/BusinessesForSale/BusinessesForSale';
import Testimonials from './screens/Testimonials/Testimonials';
import Blogs from './screens/Blogs/Blogs';
import ListingForm from './screens/ListingForm/ListingForm';

function App() {
    return (
        <div className="App">
            {/* <Landing /> */}
            {/* <BusinessesForSale /> */}
            {/* <Testimonials /> */}
            {/* <Blogs /> */}
            <ListingForm />
        </div>
    );
}

export default App;

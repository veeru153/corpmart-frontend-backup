import React from 'react';
// import Landing from './screens/Landing/Landing';
// import BusinessesForSale from './screens/BusinessesForSale/BusinessesForSale';
// import BusinessDetails from './screens/BusinessDetails/BusinessDetails';
// import Testimonials from './screens/Testimonials/Testimonials';
// import Blogs from './screens/Blogs/Blogs';
// import BlogExpanded from './screens/BlogExpanded/BlogExpanded';
// import ListingForm from './screens/ListingForm/ListingForm';
// import AdditionalForm from './screens/ListingForm/AdditionalForm';
// import Verification from './screens/Verification/Verification';
// import Login from './screens/Login/Login';
// import Signup from './screens/Signup/Signup';
// import RegistrationSuccess from './screens/RegistrationSuccess/RegistrationSuccess';
// import ContactUs from './screens/ContactUs/ContactUs';
// import UserDashboard from './screens/UserDashboard/UserDashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Admin from './screens/Admin/Admin';

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" />
            <Route path="/explore" />
            <Route path="/business-details/:id" />
            <Route path="/testimonials" />
            <Route path="/blogs" />
            <Route path="/blog/:id" />
            <Route path="/list-your-business" />
            <Route path="/additional-data" />
            <Route path="/preview" />
            <Route path="/verification" />
            <Route path="/login" />
            <Route path="/signup" />
            <Route path="/welcome" />
            <Route path="/contact-us" />
            <Route path="/dashboard" />
            <Route exact path="/admin" />
        </Switch>
    </BrowserRouter>
);

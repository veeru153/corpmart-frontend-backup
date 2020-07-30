import React from 'react';
import './App.css';

import Landing from './screens/Landing/Landing';
import BusinessesForSale from './screens/BusinessesForSale/BusinessesForSale';
import BusinessDetails from './screens/BusinessDetails/BusinessDetails';
import Testimonials from './screens/Testimonials/Testimonials';
import Blogs from './screens/Blogs/Blogs';
import ListingForm from './screens/ListingForm/ListingForm';
import Verification from './screens/Verification/Verification';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import RegistrationSuccess from './screens/RegistrationSuccess/RegistrationSuccess';
import ContactUs from './screens/ContactUs/ContactUs';
import UserDashboard from './screens/UserDashboard/UserDashboard';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Route exact path="/" component={Landing} />
                    <Route path="/explore" component={BusinessesForSale} />
                    <Route path="/business" component={BusinessDetails} />
                    <Route path="/testimonials" component={Testimonials} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/list-your-business" component={ListingForm} />
                    <Route path="/verification" component={Verification} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/welcome" component={RegistrationSuccess} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/dashboard" component={UserDashboard} />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

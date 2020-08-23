import React from 'react';
import './App.css';

import Landing from './screens/Landing/Landing';
import BusinessesForSale from './screens/BusinessesForSale/BusinessesForSale';
import BusinessDetails from './screens/BusinessDetails/BusinessDetails';
import Testimonials from './screens/Testimonials/Testimonials';
import Blogs from './screens/Blogs/Blogs';
import BlogExpanded from './screens/BlogExpanded/BlogExpanded';
import ListingForm from './screens/ListingForm/ListingForm';
import AdditionalForm from './screens/ListingForm/AdditionalForm';
import Verification from './screens/Verification/Verification';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import RegistrationSuccess from './screens/RegistrationSuccess/RegistrationSuccess';
import ContactUs from './screens/ContactUs/ContactUs';
import UserDashboard from './screens/UserDashboard/UserDashboard';
import TnC from './screens/TnC/TnC';
import FAQ from './screens/FAQ/FAQ';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './screens/Admin/Admin';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Route exact path="/" component={Landing} />
                    <Route path="/explore" component={BusinessesForSale} />
                    <Route path="/business-details/:id" render={(props) => <BusinessDetails {...props} />} />
                    <Route path="/testimonials" component={Testimonials} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/blog/:id" component={BlogExpanded} />
                    <Route path="/list-your-business" component={ListingForm} />
                    <Route path="/additional-data" component={AdditionalForm} />
                    <Route path="/preview" component={ListingForm} />
                    <Route path="/verification" component={Verification} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/success" component={RegistrationSuccess} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/dashboard" component={UserDashboard} />
                    <Route path="/terms-of-service" component={TnC} />
                    <Route path="/faq" component={FAQ} />
                    <Route exact path="/admin" component={Admin}/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

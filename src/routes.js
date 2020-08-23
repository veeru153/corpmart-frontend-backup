import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

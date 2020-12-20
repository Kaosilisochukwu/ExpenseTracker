import React, { useState } from 'react';
import { Home } from './Home';
import { NavMenu } from './NavMenu';
import Register from './Register';
import Login from './Login';
import Expenses from './Expenses';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Protected from './Protected';

export const Layout = ()  => {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null)

  

    return (
        <Router>
            <NavMenu isLoggedIn={isLoggedIn} setlogin={setIsLoggedIn}/>
                <Switch>
                    <Route path="/login">
                        <Login setlogin={setIsLoggedIn} />
                    </Route>
                    <Route path="/register">
                        <Register />
                </Route>
                <Protected path="/expenses" component={Expenses} isLoggedIn={isLoggedIn} />
                    <Route path="*" >
                        <Home />
                    </Route>
                </Switch>
            </Router>
    );
}



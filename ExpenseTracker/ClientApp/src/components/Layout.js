import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Home } from './Home';
import { NavMenu } from './NavMenu';
import styled from 'styled-components'
import Register from './Register';
import Login from './Login';
import Trying from './Try';
import Expenses from './Expenses';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Layout = ()  => {

    const [isLoggedIn, setIsLoggedIn] = useState()

    const handleLogin = () => {

    }

    const handleLogout = () => {

    }

    return (
        <Router>
            <NavMenu isLoggedIn={isLoggedIn} setlogin={setIsLoggedIn}/>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login setlogin={setIsLoggedIn} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/expenses">
                        <Expenses />
                    </Route>
                </Switch>
            </Router>
    );
}



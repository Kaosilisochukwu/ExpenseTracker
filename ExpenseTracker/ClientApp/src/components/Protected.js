import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const Protected = ({ component: Component, isLoggedIn, ...rest }) => {


    return (
        <Route {...rest} render = {(props) => (
            isLoggedIn
                ? <Component {...props} />
                : <Redirect to="/login" />
         )} />
    )
}

export default Protected;

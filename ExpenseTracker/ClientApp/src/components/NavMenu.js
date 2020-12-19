import React, { useEffect, useState } from 'react';
//import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'
import './NavMenu.css';

export const NavMenu = ({ isLoggedIn, setlogin }) => {

    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem("token")
        setlogin(false);
        history.push("/login")
    }

    return(
        isLoggedIn ? 
            <Header>
                <Link to="/" className="home">Home</Link>             
                < ul className="auth-links">
                    <li>
                        <Link to="/" className="text-light home" > Logout</Link>
                    </li>
                </ul>
            </Header>
            
    : 
        <Header>
            <Link className="home">Home</Link>
            < ul className="auth-links">
                <li>
                    <Link to="/register" className="text-light home">Register</Link>
                </li>
                <li className="pl-5">
                    <Link to="/login" className="text-light home">Login</Link>
                </li>
            </ul>
          </Header>
    )
}

const Header = styled.header`
    background-color: blue;
    padding: 1em 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .home{
        color: white;
        text-decoration: none;
        background: none;
    }
    .auth-links{
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: 0;
        flex-basis: 75%;
        justify-content: flex-end;
    }
`

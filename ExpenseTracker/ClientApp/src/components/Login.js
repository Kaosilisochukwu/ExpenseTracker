import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Input from './Input'



const Login = () => {
    return (
        <>
            <SignIn>
                <h1>Login</h1>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Link className="home-btn">Login</Link>
                <p>Don't have an account?  <Link style={{ color: "#0A05FF" }}>Login</Link></p>
            </SignIn>
        </>
        )
}

export default Login;

const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    color: white;
    padding-top: 20vh;
    background-color: rgba(4, 59, 255, 0.48);
    height: 95vh;

    .home-btn{
        align-self: center;
        border: none;
        background-color: #0A05FF;
        border-radius: 6px;
        margin-top:2em;
        padding: 1.5em;
        color: white;
        line-height: 0;
        width: 33%;
        text-align: center;
        text-decoration: none;
    }
    .home-btn:hover{
        background-color: #0804C7;
    }
    p{
        color: white;
    }
`
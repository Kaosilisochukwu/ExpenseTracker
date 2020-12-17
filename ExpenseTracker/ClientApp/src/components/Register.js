import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Register = () => {
    return (
        <RegisterStyle>
            <h1>Register</h1>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <p style={{ width: "33%" }}>password upto 6 characters must contain alpahbets
            both upper and lower cases a number and a non
            alpha-numeric character</p>
            <Input placeholder="Confirm Password" />
            <Link className="home-btn">Register</Link>
            <p className="reg-link">Already have an account? <Link style={{ color: "white" }}>Login</Link></p>
        </RegisterStyle>
        )
}

export default Register;
const RegisterStyle = styled.div`
    color: white;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    }
    .home-btn:hover{
        background-color: #0804C7;
    }
    p{
        width: 33%;
        line-height: 1rem;
    }
    .reg-link{
        color: white;
    }
`
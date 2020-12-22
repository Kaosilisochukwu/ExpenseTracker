import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'



const Login = ({ setlogin }) => {

    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            "Email": email,
            "Password": password
        }
        setlogin(true)
        login(data)
    }

    const login = async data => {
        const response = await fetch("api/user/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            console.log(response)
            const data = await response.json()
            localStorage.setItem("token", data.token)
            history.push("/expenses")
        } else {
            console.log(response)
        }
    }

    return (
        <>
            <SignIn>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input placeholder="Email" onChange={handleEmail} />
                    <input placeholder="Password" onChange={handlePassword} />
                    <button className="home-btn" type="submit">Login</button>
                    <p>Don't have an account?  <Link to="/register" style={{ color: "#0A05FF" }}>Register</Link></p>
                </form>
            </SignIn>
        </>
        )
}

export default Login;

const SignIn = styled.div`
    color: white;
    padding-top: 2rem;
    background-color: rgba(4, 59, 255, 0.48);
    min-height: 95vh;
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
 input{
        background-color: white;
        width: 33%;
        line-height: 0;
        height: 35px;
        outline: none;
        border-radius: 6px;
        border: none;
        padding-left: 15px;
        margin-top: 1rem;
}
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
        color: white;
    }
`
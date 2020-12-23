import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLasttName = (e) => {
        setLastName(e.target.value);
    }
    const handlePhone = e => {
        setPhoneNumber(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value);  
    }

    const submitRegistration = async data => {
        const response = await fetch("api/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            alert("cool")
            console.log(response)
            const data = await response.json()
            console.log(data)
        } else {
            alert("not cool")
            console.log(response)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(firstName)
        if (password === confirmPassword) {

            const formValues = {
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "UserName": username,
                "Password": password,
                "ConfirmPassword": confirmPassword,
                "PhoneNumber": phoneNumber
            }
            submitRegistration(formValues);
        }
    
    }

    return (
        <RegisterStyle>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input placeholder="First Name" onChange={handleFirstName} required />
                <input placeholder="Last Name" onChange={handleLasttName} required />
                <input placeholder="Email" onChange={handleEmail} required type="email" />
                <input placeholder="Phone Number" onChange={handlePhone} required />
                <input placeholder="Username" onChange={handleUsername} required />
                <input placeholder="Password" type="password" onChange={handlePassword} type="password" required />
                <p style={{ width: "33%" }}>password upto 8 characters must contain alpahbets
                both upper and lower cases a number and a non
                alpha-numeric character</p>
                <input placeholder="Confirm Password" type="password" onChange={handleConfirm} type="password" required/>
                <button className="home-btn" type="submit" >Register</button>
                <p className="reg-link">Already have an account? <Link to="/login" style={{ color: "#0804C7" }}>Login</Link></p>
            </form>
        </RegisterStyle>
        )
}

export default Register;
const RegisterStyle = styled.div`
    color: white;
    padding-top: 2rem;
    background-color: rgba(4, 59, 255, 0.48);
    min-height: 95vh;
    form{
    display: flex;
    align-items: center;
    flex-direction: column;
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
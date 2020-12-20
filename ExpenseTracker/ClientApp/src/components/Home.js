import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
        <HomePage>
            <img src="images/pexels-karolina-grabowska-4475523.jpg" alt="background" />
            <h1 className="head-primary">Expense Tracker</h1>
            <h3 className="head-secondary">Personal & Community Finance and Expense Tracking app.</h3>
            <h5 className="home-paragraph">Keep track of your personal or business finances and mantain a control on your expenses, income and budget.
                 Unlimited accounts and categories powered by AJAX to provide a better user experience.</h5>
            <Link to="/register" className="home-btn">Gets Started</Link>
        </HomePage>
    );
}



const HomePage = styled.div`
    color: white;
    align-text: center;
    line-height:85px;
    display: flex;
    flex-direction: column;
    height: 95vh;
    background-color: rgba(4, 59, 255, 0.48);
    position: relative;
    img{
        position: absolute;
        width: 100%;
        height: 95vh;
        z-index: -2;
    }
 
    .head-primary{
        font-weight: 800;
        text-align: center;
        font-size: 5.5rem;
    }
    .head-secondary{
        font-weight: 600;
        font-size: 2.5rem;
        text-align:center;
        line-height: 2.5rem;
    }
    .home-paragraph{
        font-weight: 500;
        font-size: 1.5rem;
        text-align:center;
        line-height: 2.5rem;
        margin-top: 1.5em;
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
    }
    .home-btn:hover{
        background-color: #0804C7;
    }
`

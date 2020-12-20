import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Expenses = () => {

    const [vat, setVat] = useState(0);
    const [rate, setRate] = useState(1);
    const [expenses, setExpenses] = useState([]);

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [VAT, setVAT] = useState(0);
    const [transctionDate, setTransctionDate] = useState(new Date())
    const [currency, setCurrency] = useState("GBP")




    const getExpenses = async () => {
        const response = await fetch("api/expenses", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        })
        if (response.ok) {
            alert("cool")
            console.log(response)
            const data = await response.json()
            console.log(data)
            setExpenses(data)
        } else {
            alert("not cool")
            console.log(response)
        }
    }

    const addExpense = async data => {
        const response = await fetch("api/expenses", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            alert("cool")
            console.log(response)
            const data = await response.json()
            console.log(data)
            setExpenses(data)
        } else {
            alert("not cool")
            console.log(response)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        alert(localStorage.getItem("token"))
        const data = {
            "Description": description,
            "Amount": currency === "EUR" ? amount * rate : amount,
            "VAT": currency === "EUR" ? VAT * rate : VAT,
            "Date": transctionDate
        }
        await addExpense(data)

    }

    const handleDescription = e => {
        setDescription(e.target.value);
    }

    const handleAmount = e => {
        let currentVat = e.target.value ? (parseFloat(e.target.value) * 0.2).toFixed(2) : 0;
        setVat(currentVat);
        setAmount(e.target.value)
    }

    const handleVAT = e => {
        setVAT(e.target.value);
    }


    const handleDate = e => {
        setTransctionDate(e.target.value);
    }
    const handleCurrency = e => {
        setCurrency(e.target.value)
    }

    useEffect(() => {
        (async () => {
            if (localStorage.getItem("token")) {
                await getExpenses();
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.rates.GBP)
                        setRate(data.rates.GBP)
                    })
            }
        })()
    }, [])

    return (
       
        <ExpensesStyle>
            <form onSubmit={handleSubmit} >
                <h4>Add an Expense</h4>
                <div className="expense-input">
                    <input className="amount" type="number" placeholder="Amount" required onChange={handleAmount} />
                    <label>select currency:
                        <select className="currency" onChange={handleCurrency} defaultValue="EUR">
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </label>
                    <label>VAT:
                        <input onChange={handleVAT} className="vat" type="text" disabled value={vat} required style={{ marginLeft: "10px" }} />
                    </label>
                    <input className="date" type="date" placeholder="Date" required onChange={handleDate} />
                    <input className="description" type="textarea" placeholder="Description" required onChange={handleDescription} />
                    <button className="save" type= "submit"  >Save Expense</button>
                </div>
            </form>
            <div className="">
                <h1>Tabe of Expenses</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">VAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, i) => {
                            return (
                                <tr key={ i }>
                                    <th scope="row">{expense.Date}</th>
                                    <td>{expense.Description}</td>
                                    <td>{expense.Amount}</td>
                                    <td>@{expense.VAT}</td>
                                </tr>
                                )
                        })}
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ExpensesStyle>
        )
}

export default Expenses;

const ExpensesStyle = styled.div`
    text-align: center;
    padding: 2rem 4rem;
    input, .currency{
        margin: 0 2rem 2rem 0;
        flex-basis: 25%;
    }
    .currency{
        line-height: 0;
        flex-basis:10%;
        height: 35px;
        margin-left: 1rem;
    }
    .vat{
        flex-basis: 5%;
    }
    .expense-input{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .description{
        min-width: 75%;
    }
    .save{
        line-height: 0;
        padding: .5rem;
        border-radius: 6px;
        background-color: #0A05FF;
        height: 35px;
        color: white;
        border: none;
    }
    .save:hover{
        background-color: #0804C7;
        border:none
    }
  .save:active{
        background-color: #0804C7;
        border:none
    }
    
`

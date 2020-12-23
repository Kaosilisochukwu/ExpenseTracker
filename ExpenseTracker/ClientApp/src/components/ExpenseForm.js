import React from 'react'


const ExpenseForm = ({ handleSubmit, handleDescription, handleAmount, handleDate, handleCurrency, vat }) => {
    return (
            <form onSubmit={handleSubmit} >
                <h4>Add an Expense</h4>
                <div className="expense-input" id="form-div">
                    <div>
                        <input className="amount" type="number" placeholder="Amount" required onChange={handleAmount} />
                        <p className="text-danger" id="amount-err"></p>
                    </div>
                    <label>select currency:
                                <select className="currency" onChange={handleCurrency} defaultValue="EUR">
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </label>
                    <label>VAT:
                                <input className="vat" type="text" disabled value={vat} required style={{ marginLeft: "10px" }} />
                    </label>
                    <input className="date" type="date" placeholder="Date" required onChange={handleDate} />
                <input className="description" type="textarea" placeholder="Description" required onChange={handleDescription} />
                <button className="save" type="submit" > Save Expense</button>
                </div>
            </form>
        )
}

export default ExpenseForm;
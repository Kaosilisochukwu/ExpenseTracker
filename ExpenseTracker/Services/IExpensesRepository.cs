using ExpenseTracker.DTOs;
using ExpenseTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseTracker.Services
{
    public interface IExpensesRepository
    {
        Task<IEnumerable<Expense>> GetExpenses();
        Task<Expense> GetExpenseById(int expenseId);
        Task<IEnumerable<Expense>> GetExpensesByUserId(string userId);
        Task<int> SaveTransaction(Expense transaction);
    }
}

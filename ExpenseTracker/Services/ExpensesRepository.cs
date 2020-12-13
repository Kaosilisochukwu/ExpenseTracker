using ExpenseTracker.Context;
using ExpenseTracker.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseTracker.Services
{
    public class ExpensesRepository : IExpensesRepository
    {
        private readonly AppDbContext _context;

        public ExpensesRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Expense> GetExpenseById(int expenseId)
        {
            return await _context.Expenses.FirstOrDefaultAsync(expense => expense.Id == expenseId);
        }

        public async Task<IEnumerable<Expense>> GetExpenses()
        {
            return await _context.Expenses.ToListAsync();
        }

        public async Task<IEnumerable<Expense>> GetExpensesByUserId(string userId)
        {
            return await _context.Expenses.Where(expense => expense.UserId == userId).ToListAsync();
        }

        public async Task<int> SaveTransaction(Expense expense)
        {
            var numOfAffectedRows = 0;
            var go = _context.Expenses.Add(expense);
            if(go.State == EntityState.Added)
            {
                numOfAffectedRows = await _context.SaveChangesAsync();
            }
            return numOfAffectedRows;
        }
    }
}

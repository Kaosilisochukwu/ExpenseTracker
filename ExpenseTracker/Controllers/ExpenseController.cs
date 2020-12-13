using ExpenseTracker.DTOs;
using ExpenseTracker.Models;
using ExpenseTracker.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ExpenseTracker.Controllers
{
    [ApiController]
    [Route("api/expenses")]
    [Authorize]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpensesRepository _expenseRepo;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ExpenseController(IExpensesRepository expenseRepo, IHttpContextAccessor httpContextAccessor)
        {
            _expenseRepo = expenseRepo;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost]
        public async Task<ActionResult> AddExpense(ExpenseToRegisterDTO expenseToRegister)
        {
            if (ModelState.IsValid)
            {
                var expense = new Expense
                {
                    Description = expenseToRegister.Description,
                    VAT = expenseToRegister.VAT,
                    Amount = expenseToRegister.Amount,
                    Date = DateTime.Now,
                    UserId = expenseToRegister.UserId
                };
                var rowsAffected = await _expenseRepo.SaveTransaction(expense);
                if (rowsAffected > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("{userId}")]
        public async Task<ActionResult> GetExpensesAsync(string userId)
        {
            try
            {
                var whatever = _httpContextAccessor.HttpContext.Request;
                var currnetUserId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                if (userId != currnetUserId)
                    return Unauthorized();
                var expenses = await _expenseRepo.GetExpensesByUserId(userId);
                if (expenses == null || expenses.Count() < 1)
                {
                    return NotFound();
                }
                return Ok(expenses);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{expenseId:int}")]
        [HttpGet]
        public async Task<ActionResult> GetExpenseAsync(int expenseId)
        {
            try
            {

                var expense = await _expenseRepo.GetExpenseById(expenseId);
                var whatever = _httpContextAccessor.HttpContext.Request;
                var currnetUserId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                if (currnetUserId != expense.UserId)
                    return Unauthorized();
                if(expense == null)
                {
                    return NotFound();
                }
                return Ok(expense);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

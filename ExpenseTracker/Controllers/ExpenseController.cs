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

        [Route("", Name = "AddExpenses")]
        [HttpPost]
        public async Task<ActionResult> AddExpense(ExpenseToRegisterDTO expenseToRegister)
        {
            if (ModelState.IsValid)
            {
                var whatever = _httpContextAccessor.HttpContext.Request;
                var currnetUserId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                var expense = new Expense
                {
                    Description = expenseToRegister.Description,
                    VAT = expenseToRegister.VAT,
                    Amount = expenseToRegister.Amount,
                    Date = expenseToRegister.Date,
                    UserId = currnetUserId
                };
                var rowsAffected = await _expenseRepo.SaveTransaction(expense);
                if (rowsAffected > 0)
                {
                    return Created("AddExpenses", expense);
                }
            }
            return BadRequest();
        }


        public async Task<ActionResult> GetExpensesAsync()
        {
            try
            {
                var whatever = _httpContextAccessor.HttpContext.Request;
                var currnetUserId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                //if (userId != currnetUserId)
                //    return Unauthorized();
                var expenses = await _expenseRepo.GetExpensesByUserId(currnetUserId);
                if (expenses == null)
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

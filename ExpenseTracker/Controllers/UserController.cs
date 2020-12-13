using ExpenseTracker.DTOs;
using ExpenseTracker.Models;
using ExpenseTracker.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace ExpenseTracker.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signManager;
        private readonly IConfiguration _config;

        public UserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signManager, IConfiguration config) 
        {
            _userManager = userManager;
            _signManager = signManager;
            _config = config;
        }

        [Route("signup", Name = "signup")]
        [HttpPost]
        public async Task<ActionResult> SignUp(UserToRegisterDTO userToRegister)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    FirstName = userToRegister.FirstName,
                    LastName = userToRegister.LastName,
                    Email = userToRegister.Email,
                    UserName = userToRegister.UserName,
                    PhoneNumber = userToRegister.PhoneNumber
                };
                var signupResult = await _userManager.CreateAsync(user, userToRegister.PassWord);
                if (signupResult.Succeeded)
                {
                    return Created("signup", user);
                }
                return BadRequest();
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("signin")]
        public async Task<ActionResult> SignIn(UserToSignInDTO userToSignIn)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.Users.FirstOrDefaultAsync(user => user.Email == userToSignIn.Email);
                if(user == null)
                {
                    return BadRequest();
                }
                var signinResult = await _signManager.PasswordSignInAsync(user, userToSignIn.Password, userToSignIn.RememberMe, false);
                if (signinResult.Succeeded)
                {
                    var token = TokenConfiguration.GenerateToken(user, _config);
                    return Ok(token);
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("signout")]
        public async Task<ActionResult> Signout()
        {
            await _signManager.SignOutAsync();
            return Ok();
        }
    }
}

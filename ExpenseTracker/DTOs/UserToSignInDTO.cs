using System.ComponentModel.DataAnnotations;

namespace ExpenseTracker.DTOs
{
    public class UserToSignInDTO
    {
        [Required(ErrorMessage = "Please Enter your Email")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Please enter a valid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please Enter your Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}

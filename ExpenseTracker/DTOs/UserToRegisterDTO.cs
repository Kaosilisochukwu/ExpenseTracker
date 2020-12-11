using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseTracker.DTOs
{
    public class UserToRegisterDTO
    {
        [Required(ErrorMessage = "The FirstName Field is Required")]
        [MinLength(2, ErrorMessage = "First Name must not be less that two characters")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name field is Required")]
        [MinLength(2, ErrorMessage = "First Name must not be less that two characters")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email field is required")]
        [EmailAddressAttribute(ErrorMessage = "Must be a valid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "User Name is required")]
        [MinLength(5, ErrorMessage = "User Name must not be less that 5 characters")]
        [MaxLength(10, ErrorMessage = "User Name must not be more that 10 characters")]
        public string UserName { get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Password field is required")]
        public string PassWord { get; set; }

        [Required(ErrorMessage = "Confirm Password field is required")]
        [DataType(DataType.Password)]
        [Compare("PassWord", ErrorMessage = "Confirm Password field must match the Password Field")]
        public string ConfirmPassword { get; set; }

        [Required(ErrorMessage = "Phone number is required")]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
    }
}

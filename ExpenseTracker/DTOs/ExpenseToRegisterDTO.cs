using System;
using System.ComponentModel.DataAnnotations;

namespace ExpenseTracker.DTOs
{
    public class ExpenseToRegisterDTO
    {
        [Required(ErrorMessage = "Please add a description for this expense")]
       // [Range(3, 50, ErrorMessage = "Description must be from 3 to 50 characters")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Please add an amount for this expense")]
        public decimal Amount { get; set; }

        [Required(ErrorMessage = "Vat field is required")]
        public decimal VAT { get; set; }

        [Required(ErrorMessage = "Date field is required")]
        public DateTime Date { get; set; }

        //[Required(ErrorMessage = "User Id is required")]
        //public string UserId { get; set; }
    }
}

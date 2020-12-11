using System;
using System.ComponentModel.DataAnnotations;

namespace ExpenseTracker.Models
{
    public class Expense
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Please give a brief description of this transaction")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Please give the amount of this transaction")]
        public decimal Amount { get; set; }

        [Required(ErrorMessage = "Please add the vat for this tranaction")]
        public decimal VAT { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;

        [Required(ErrorMessage = "Every transaction must have a user Id")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}

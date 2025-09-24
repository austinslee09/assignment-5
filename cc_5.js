let workers=[
    {Name:"Dave", hourlyRate:40.00, hoursWorked:30},
    {Name:"Terry", hourlyRate:25.50, hoursWorked:25},                       
    {Name:"Larry", hourlyRate:10.00, hoursWorked:41},
]
//array complete for 3 employees

function calculateBasePay(hourlyRate, hoursWorked) {
  if (hoursWorked<=40) {
 return hourlyRate*hoursWorked;
  }
}

// function for regular pay
function calculateOvertimePay(hourlyRate, hoursWorked){
    if (hoursWorked>40){
    return(hoursWorked-40 *1.5)+(hourlyRate*hoursWorked);}
}
console.log(calculateBasePay(workers[1].hourlyRate, workers[1].hoursWorked));
// function for overtime pay
function calculateTaxes(grossPay){
return grossPay*.15
}
function processPayroll(employee){
  return {names:Name, }
}

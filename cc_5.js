let workers=[
    {Name:"Dave", hourlyRate:40.00, hoursWorked:30},
    {Name:"Terry", hourlyRate:25.50, hoursWorked:25},                       
    {Name:"Larry", hourlyRate:10.00, hoursWorked:40},
]
//array complete for 3 employees

function calculateBasePay(hourlyRate, hoursWorked) {
  if (hours<=40) {
 return hourlyRate*hoursWorked;
  }
}
console.log(multiply(workers[0].hourlyRate, workers[0].hoursWorked));
// function for regular pay
function calculateOvertimePay(hourlyRate, hoursWorked){
    if (hours>40){
    return(hourlyRate-40 *1.5)+(hourlyRate*hoursWorked);}
}

// function for overtime pay
function calculateTaxes(grossPay){
return grossPay*.15
}
function processPayroll(employee){
  return {names:Name, }
}

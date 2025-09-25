let workers=[
    {Name:"Dave", hourlyRate:40.00, hoursWorked:30},
    {Name:"Terry", hourlyRate:25.50, hoursWorked:25},                       
    {Name:"Larry", hourlyRate:10.00, hoursWorked:41},
]
//array complete for 3 employees

function calculateBasePay(hourlyRate, hoursWorked) {
 
 return hourlyRate* Math.min(hoursWorked,40);
  
}

// function for regular pay
function calculateOvertimePay(hourlyRate, hoursWorked){
    return Math.max(hoursWorked-40,0)*hourlyRate*1.5;
}

// function for overtime pay
function calculateTaxes(grossPay){
return grossPay*.15
}


function processPayroll(employee){
  const basePay=;
  const overtime=;
  const grossPay= basePat+overtime;
  const netPay=;
  return{
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}
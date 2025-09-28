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
return grossPay*.85
}

// calculating pay with taxes taken out

function processPayroll(employee){
  const basePay=calculateBasePay(hourlyRate, hoursWorked);
  const overtime= calculateOvertimePay(hourlyRate, hoursWorked);
  const grossPay= basePay+overtime;
  const netPay= grossPay *.85;
  return{
    name: Name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}
// Object with pay and names completed

for (const worker of workers) {
    const result = processPayroll(worker);
    console.log(`Payroll for ${result.name}:`);
    console.log(`Base: $${result.basePay.toFixed(2)}, 
    Overtime: $${result.overtimePay.toFixed(2)},
     Gross: $${result.grossPay.toFixed(2)}, 
     Net: $${result.netPay.toFixed(2)}`);
}
 //loops of payroll and name

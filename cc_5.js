let workers=[
    {name:"Dave", hourlyRate:40.00, hoursWorked:30},
    {name:"Terry", hourlyRate:25.50, hoursWorked:25},                       
    {name:"Larry", hourlyRate:10.00, hoursWorked:40},
]
//array complete for 3 employees

function calculateBasePay(rate, hours) {
  if (hours<=40) {
 return rate*hours;
  }else(40<hours);
  {
 return(rate*hours)+(hours>40 *1.5);
  }   
}
function calculateOvertimePay(rate, hours){}
function calculateOvertimePay(rate, hours){}
console.log()
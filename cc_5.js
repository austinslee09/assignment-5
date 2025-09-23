let workers=[
    {name:"Dave", hourlyRate:40.00, hoursWorked:30},
    {name:"Terry", hourlyRate:25.50, hoursWorked:25},                       
    {name:"Larry", hourlyRate:10.00, hoursWorked:40},
]
//array complete for 3 employees
let hours= 40
function calculateBasePay(rate, hours) {
  if (hours<=40) {
 return rate*hours;
  }
}
// function for regular pay
function calculateOvertimePay(rate, hours){
    if (hours>40){
    return(rate*hours)+(hours-40 *1.5);}
}
// function for overtime pay
function calculateTaxes(grossPay){

}
console.log()
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const samples = input.split("\n");

const employeeData = [];

for (let i = 0; i <= samples.length; i++) {
  employeeData[i] = parseFloat(samples.shift());
}

const employeeDataDescription = {
  employeeNumber: employeeData[0],
  hoursWorkedInAMonth: employeeData[1],
  amountReceivedPerHour: employeeData[2]
}

const employeesNumber = employeeDataDescription.employeeNumber;
const hoursWorkedInAMonth = employeeDataDescription.hoursWorkedInAMonth;
const amountReceivedPerHour = employeeDataDescription.amountReceivedPerHour;

const calculateSalary = (hoursWorkedInAMonth, amountReceivedPerHour) => {
  return hoursWorkedInAMonth * amountReceivedPerHour;
}

const salary = calculateSalary(hoursWorkedInAMonth, amountReceivedPerHour);

console.log(`NUMBER = ${employeesNumber}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);

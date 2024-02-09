const input = require("fs").readFileSync("./dev/stdin", "utf8");
const samples = input.split("\n");

const sellerName = samples.shift();
const sellerReceives = 15 / 100;
const sellerData = [];

for (let i = 0; i <= samples.length; i++) {
  sellerData[i] = parseFloat(samples.shift());
}

const sellerDataDescription = {
  fixedSalary: sellerData[0],
  saleTotalMadeByInTheMonth: sellerData[1]
}

const fixedSalary = sellerDataDescription.fixedSalary;
const saleTotalMadeByInTheMonth = sellerDataDescription.saleTotalMadeByInTheMonth;

const calculateSalaryWithBonus = (saleTotalMadeByInTheMonth, sellerReceives, fixedSalary) => {
  return (saleTotalMadeByInTheMonth * sellerReceives) + fixedSalary;
}

const salaryWithBonus = calculateSalaryWithBonus(saleTotalMadeByInTheMonth, sellerReceives, fixedSalary);

console.log(`TOTAL = R$ ${salaryWithBonus.toFixed(2)}`);

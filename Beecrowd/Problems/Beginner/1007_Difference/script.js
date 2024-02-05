const input = require("fs").readFileSync("./dev/stdin", "utf8");
const samples = input.split("\n");

const [valueA, valueB, valueC, valueD] = samples;

const calculateDifference = (valueA, valueB, valueC, valueD) => {
  return ((valueA * valueB) - (valueC * valueD));
}

const result = calculateDifference(valueA, valueB, valueC, valueD);

console.log(`DIFERENCA = ${result}`);

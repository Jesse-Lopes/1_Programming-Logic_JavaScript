const input = require("fs").readFileSync("./dev/stdin", "utf8");
const samples = input.split("\n");

const grades = [];

const gradeWeights = {
  weightA: 3.5,
  weightB: 7.5
}

const gradeA_weight = gradeWeights.weightA;
const gradeB_weight = gradeWeights.weightB;

const calculateWeights = (gradeA_weight, gradeB_weight) => {
  return gradeA_weight + gradeB_weight;
}

const calculateAverage = (grades) => {
  const weightSum = calculateWeights(gradeA_weight, gradeB_weight);

  for (let i = 0; i <= samples.length; i++) {
    grades[i] = parseFloat(samples.shift());
  }

  return ((grades[0] * gradeA_weight) + (grades[1] * gradeB_weight)) / weightSum;
}

const average = calculateAverage(grades);

console.log(`MEDIA = ${average.toFixed(5)}`);

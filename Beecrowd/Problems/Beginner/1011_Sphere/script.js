const input = require("fs").readFileSync("./dev/stdin", "utf8");
const sample = input.split("\n");

const radius = parseInt(sample.shift());
const pi = 3.14159;

const calculateSphereVolume = (radius, pi) => {
  return (4.0 / 3) * pi * Math.pow(radius, 3);
}

const sphereVolume = calculateSphereVolume(radius, pi);

console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);

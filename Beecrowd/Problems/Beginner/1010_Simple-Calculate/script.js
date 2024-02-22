const input = require("fs").readFileSync("./dev/stdin", "utf8");
const samples = input.split("\n");

const productData = [];

for (let i = 0; i <= samples.length; i++) {
  productData[i] = samples.shift().split(" ");
}

const products = {
  product1: {
    product1_code: productData[0][0],
    product1_unit: productData[0][1],
    product1_price: productData[0][2],
  },

  product2: {
    product2_code: productData[1][0],
    product2_unit: productData[1][1],
    product2_price: productData[1][2]
  }
}

const calculatePriceToPay = ({product1: {product1_unit, product1_price}, product2: {product2_unit, product2_price}}) => {
  return ((product1_unit * product1_price) + (product2_unit * product2_price));
}

const priceToPay = calculatePriceToPay(products);

console.log(`VALOR A PAGAR: R$ ${priceToPay.toFixed(2)}`);

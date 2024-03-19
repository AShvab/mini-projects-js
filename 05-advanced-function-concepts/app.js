// pure functions:
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 5));
console.log(add(10, 50));

// impure function:
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 5));

const hobbies = ["sports", "cooking"];
function printHobbies(h) {
  h.push("new hobby");
  console.log(h);
}
printHobbies(hobbies)



// factory functions:
function createTaxCalculator(tax){
    function calculateTax(amount) {
        return amount * tax;
      }
      return calculateTax
}

const calculateVatAmount = createTaxCalculator(0.19)
const calculateIncomeTaxAmount = createTaxCalculator(0.25)

console.log(calculateVatAmount(100))
console.log(calculateVatAmount(200))
// Function Declaration
function square(number) {
  return number * number;
}

console.log(square(4));  // Output: 16

// Function Expression
const squareExpression = function(number) {
  return number * number;
};

console.log(squareExpression(5));  // Output: 25

// Arrow Function
const squareArrow = (number) => {
  return number * number;
};

// Concise Arrow Function
const conciseSquareArrow = number => number * number;

console.log(squareArrow(6));       // Output: 36
console.log(conciseSquareArrow(7));  // Output: 49

// Function with Multiple Parameters
const introduce = (firstName, lastName) => {
  return `My name is ${firstName} ${lastName}.`;
};

console.log(introduce("Mindula", "Dilthushan"));  // Output: My name is Mindula Dilthushan

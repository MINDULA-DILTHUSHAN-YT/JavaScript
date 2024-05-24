// Declaring variables
var greeting = "Hello";
let age = 25;
const pi = 3.14159;

// Changing the value of 'greeting'
greeting = "Hi";

// Working with different data types
let isStudent = true;
let favoriteFoods = ["Pizza", "Burger", "Pasta"];
let person = {
  firstName: "Mindula",
  lastName: "Dilthushan",
  age: 28
};
let salary = null;
let job;  // undefined

// Outputting values to the console
console.log(greeting);          // Hi
console.log(age);               // 25
console.log(pi);                // 3.14159
console.log(isStudent);         // true
console.log(favoriteFoods);     // ["Pizza", "Burger", "Pasta"]
console.log(person);            // { firstName: "Alice", lastName: "Johnson", age: 28 }
console.log(salary);            // null
console.log(job);               // undefined

// Using template literals
console.log(`Hello, my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`);

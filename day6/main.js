function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10));

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
anonymousFun();

(function (n) {
  console.log(n * n);
})(2);

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(greetings());
console.log(greetings("Asabeneh"));

function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear;
  return age;
}

console.log("Age: ", calculateAge(1819));

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
}

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62));

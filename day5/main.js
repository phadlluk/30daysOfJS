console.log("day5");
const arr = [];
const fruitArr = ["Mango", "Apple", "Banana"];
console.log(fruitArr);
console.log(fruitArr[1]);
console.log(fruitArr.length);

const arr1 = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];

console.log(arr1[1]);
console.log(arr1[3].country);
console.log(arr1[2]);

let js = "JavaScript";
console.log(js.split(""));

let word = "He is a boy";
console.log(word.split(" "));
const skills = ["HTML", "CSS", "JS", "React", "Python"];
let w = "SHe-is-a-girl";
console.log(w.split("-"));
console.log(w.split("s"));

console.log(skills[skills.length - 1]);
console.log(skills[0]);
console.log(skills);
skills[2] = "c++";
console.log(skills);

// const newArr = Array(8);

const newArr = Array(8).fill(0);
console.log(newArr);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];

console.log(firstList.concat(secondList));
console.log(secondList.concat(firstList));

const fruits = ["Mango", "Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Pawpaw"));
console.log(fruits.indexOf("Mango")); //0
console.log(fruits.lastIndexOf("Mango")); //3

console.log(fruits.includes("Pawpaw"));
console.log(Array.isArray(fruits));
console.log(fruits.toString());
console.log(fruits.join(" "));
console.log(fruits.slice(0, 2)); //['Mango', 'Apple']
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1));

console.log(fruits.splice(0, 2));
console.log(fruits);

console.log(arr);
arr.push("Hello", 7, 90);
console.log(arr);
arr.pop();
arr.shift();
arr.unshift(4);
console.log(arr); //[4,7]
arr.reverse();
console.log(arr); //[7,4]

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs);

const arrayOfArray = [
  [1, 2, 8],
  [1, 2, 3],
];
console.log(arrayOfArray[0][2]);

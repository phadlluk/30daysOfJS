let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substr(3, 19));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split(","));

// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let word = "30 Days Of JavaScript";
console.log(word.replace("JavaScript", "Python"));
console.log(word.charAt(15));
console.log(word.charCodeAt(11));
console.log(word.indexOf("a"));
console.log(word.lastIndexOf("a"));

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

let theSentence = " 30 Days Of JavaScript ";
console.log(theSentence.trim(" "));
console.log(theSentence.startsWith(" "));
console.log(theSentence.endsWith(" "));
console.log(theSentence.match("a"));

let firstString = "30 Days of";
console.log(firstString.concat(" JavaScript "));
console.log(theSentence.repeat(2));

// Exercise level 2
let statement =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(statement);
let theStatement =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(theStatement);
let num = "10";
let numInt = parseInt(num);
console.log(numInt);

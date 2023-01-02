const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.table(fruits);
// Popping last items out of an array
var pop = fruits.pop();
// console.log("pop:", pop);
// Adding items into of an array
fruits.push("Kiwi");
// console.log("push:", fruits);
// Remove first element
fruits.shift();
// console.log("shift:", fruits);
// The unshift() method adds a new element to an array (at the beginning
fruits.unshift("Lemon");
// console.log("unshift:", fruits);
const courses = ["Javascript", "Python", "Golang", "Kotlin", "Python"];

// For simple
for (var i = 0; i <= courses.length; i++) {
  // console.log(courses[i]);
}

// ForEach
var foreach = courses.forEach(function (course) {
  // console.log(course);
});
// console.log(foreach)

// Every()
var every = courses.every((course) => {
  return course === "Python";
});
// console.log(every);

// some()
var some = courses.some(function (course) {
  return course === "Python";
});
console.log('some', some)

//Find
var find = courses.find(function (course) {
  return course === "Python";
});
console.log('find', find)

//Filter
var filter = courses.filter(function (course) {
  return course === "Python";
});
// console.log(filter)

// map
var map = courses.map(function (course, index) {
  return "Khoa hoc:" + course;
});
// console.log(map)

const courses1 = ["Javascript", "Python", "Golang", "Kotlin", "Python"];

const course2 = [100, 200, 300];

// Spead operator
course3 = [...courses1, ...course2];
// console.log(course3);

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
  func: function () {
    return this.name;
  },
};
// ?.
const dogName = adventurer.cat?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.func?.());
// expected output: undefined

// ES6
// LET
if (true) {
  let a = 40;
  console.log(a); //40
}
//  console.log(a);  undefined

// CONST
const a = 50;
// a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
// b = "Assigning new value"; // shows error.

const LANGUAGES = ["Js", "Ruby", "Python", "Go"];
// LANGUAGES = "Javascript"; // shows error.
LANGUAGES.push("Java"); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']

// Arrrow function
// Old Syntax
function oldOne() {
  console.log("Hello World..!");
}
// New Syntax
var newOne = () => {
  console.log("Hello World..!");
};

let NewOneWithParameters = (a, b) => {
  console.log(a + b); // 30
};
//  NewOneWithParameters(10, 20);

//Default Parameters

let Func = (a, b = 10) => {
  return a + b;
};
Func(20); // 20 + 10 = 30
Func(20, 50); // 20 + 50 = 70

//  For of loop
let arr = [2, 3, 4, 1];
// for .. of: get Value
for (let value of arr) {
  //  console.log(value);
}

// for .. in: get index
for (let index in arr) {
  //  console.log(index);
}

// Spread attributes
let SumElements = (arr) => {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  console.log(sum); // 220.
};
SumElements([10, 20, 40, 60, 90]);

let SumElementsSpeard = (a, b, ...arr) => {
  console.log(`a = ${a}; b = ${b}; arr = ${arr}`);
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  console.log(sum); // 220.
};
SumElementsSpeard(10, 20, 40, 60, 90);

// Destructuring
arr = [1, 2, 3, 4, 5];

var [x, y, ...z] = arr;
console.log(x, y, z);

// Conditional (ternary) operator toán tử 3 ngôi
// amater
let isChecked = true;
if (isChecked) {
  let text_string = "Check is True";
  console.log(text_string);
} else {
  let text_string = "Check is False";
  console.log(text_string);
}
// professtional
let text_string = isChecked == false ? "Check is False" : "Check is True";

console.log(text_string);

// IMPORTANT : OBJECT
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  disPlay: function(){
    return this.firstName + " " + this.lastName 
  }
};

// Get attribute
console.log(person.firstName, 'or', person['firstName'])
console.log(person.disPlay())

// Add attribute
person['old'] = 12
console.log(person.old)

// Using this for object referenes
const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
}
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
}

function sayHi() {
  console.log(`Hello, my name is ${this.name}`)
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is John'
Intern.sayHi(); // Hello, my name is Ben'

// Check commit
// Facebook 2
var database = [
  {
    username: "raja",
    password: "secret"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
  }
];

var newsFeed = [
  {
    username: "Andrei",
    timeline: "So tired from all that learning"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo cool"
  },
  {
    username: "mitch",
    timeline: "Javascript is preety cool"
  }
];

var userNamePrompt = prompt("What is your usernam:");
var passwordPrompt = prompt("What is your password");

// function isUserValid(user, pass) {
//   database.forEach(function(db) {
//     if (user === db.username && pass === db.password) {
//       console.log(db.username);
//       console.log(db.password);
//       return true;
//     }
//   });
//   return false;
// }
function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      // console.log(db.username);
      // console.log(db.password);
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  // console.log(isUserValid(user, pass))
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password!")
  }
}
signIn(userNamePrompt, passwordPrompt);

// Loops
var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

var todosImportat = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healthy!"
];

var todosLength = todos.length;

// for (var i = 0; i < todosLength; i++) {
//   console.log(todos[i], i)
// }

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todosImportat.forEach(logTodos);

// var counterOne = 0;
// while (counterOne > 0) {
//   console.log("while loop:" + counterOne);
//   counterOne--;
// }

// var counterTwo = 0;
// do {
//   console.log("Do while loop:" + counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);



// Scope

// Root or window scope
var fun = 5;

function funFunction() {
  // child scope
  var fun = "hellooo";
  console.log(1, fun);
}

function funerFunction() {
  // child scope
  var fun = "Byee";
  console.log(2, fun);
}

function funestFunction() {
  // child scope
  var fun = "AHHHHH";
  console.log(3, fun)
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);

// switch statements
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward" :
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you ran into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

var directionPrompt = prompt("provide your direction:");

console.log(moveCommand(directionPrompt));

// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// Achieve the same using deconstructuring
const {player, experience} = obj;
let {wizardLevel} = obj;

// Object properties dynamically

const name = 'john snow';

const obj = {
  [name]: 'hello',
  [1 + 2]: 'hihi'
}

// Template string
const name = "Sally";
const age = 34;
const pet = "horse";

// const greeting = "Hello " + name + "you seems to be doing " + greeting + "!";

const greetinBest = `Hello ${name} you seems to be ${age-10}. What a lovely ${pet} you have`;

function greet(name='', age=30, pet='cat') {
  return greetinBest = `Hello ${name} you seems to be ${age-10}. What a lovely ${pet} you have`;
}

// symbols in javascript

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow function

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet)
  }
  return second;
}

const newFunc = first();
newFunc();

// clousers

// Currying
const multiply = (a, b) => a * b;
const curriedMultipy = (a) => (b) => a * b;
const multiplyBy5 = curriedMultipy(5);

// compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

// Arrays
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
  double.push(num * 2);
});

console.log('for each:', double);

// map, filter, reduce
const mapArray = array.map(num => num * 2);

console.log('map:', mapArray);

// filter
const filterArray = array.filter(num => num > 5);

console.log('filter:', filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 10);

console.log('reduce:', reduceArray);
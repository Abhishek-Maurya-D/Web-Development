// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof anotherBalance);
// console.log(typeof balance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(true) // not recommended

// null and undefined
let firstname;
// console.log(firstname);

let lastname = null;
// console.log(lastname);

let first_name = null;
let last_name = undefined;
// console.log(first_name); //null
// console.log(last_name); //undefined

// string
let myString = "Hello!";
let myStringOne = 'Hola';
let username = 'Hitesh';

let oldGreat = myString + " " + 'Abhishek';
// console.log(oldGreat);

let greetMessage = `Hello ${username} !`; // String interpolation
let demoOne = `Value is ${2 * 2}`;

// console.log(greetMessage);
// console.log(demoOne);

// Symbol -  are use to generate unique values
let sm1 = Symbol("Abhishek");
let sm2 = Symbol();

console.log(sm1 == sm2);
console.log(sm1);
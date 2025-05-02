// This is not the standard way of creating a constructors
// function greet(){
//     console.log("Hello, ", name);
// }

// 1.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// }
// let myCar = new Car("Toyota", "Camry");
// // console.log(myCar);
// let myNewCar = new Car("Toyota", "Safari")
//     // console.log(myNewCar);

// 2.
// function Tea(type) {
//     this.type = type;
//     this.describe = function() {
//         return `this is a cup of ${this.type}`
//     }
// }
// let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

// 3.
// function Animal(species) {
//     this.species = species;
// }
// Animal.prototype.sound = function() {
//     return `${this.species} makes a sound`
// }
// let dog = new Animal("Dog")
//     // console.log(dog.sound());
// let cat = new Animal("Cat")
//     // console.log(cat.sound());

// 4
// function Drink(name) {
//     if (!new.target) {
//         throw new Error("Drink must be called with new keyword");
//     }
//     this.name = name;
// }
// let tea = new Drink("tea");
// let coffee = Drink("coffee");


// 6
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     start: function() {
//         return `${this.make} car got started in ${this.year}`;
//     },
// };
// console.log(car.start());

// 7
// function Person(name, age) {
//     this.name = name,
//         this.age = age
// }
// let john = new Person("John", 20);
// console.log(john.name);

// Prototype and Prototype-chain -- main topic L-52 @ 10:48
// 8
// function Animal(type) {
//     this.type = type
// }
// Animal.prototype.speak = function() {
//     return `${this.type} make a sound`
// }
// Array.prototype.hitesh = function() {
//     return `Custom method ${this}`
// }
// let myArray = [1, 2, 3]
// console.log(myArray.hitesh());
// let myNewArray = [1, 2, 3, 4, 5, 6]
// console.log(myNewArray.hitesh());

// 9 
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends Vehicle {
    drive() {
        return `${this.model} : This is an inheritance example`;
    }
}
let myCar = new Car("Tata", "Corolla")
    // console.log(myCar.drive())
    // console.log(myCar.start())

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);

let arr = [1, 2, 3]
    // console.log(typeof arr)


// Encapsulation
class BankAccount {
    #balance = 0;
    deposite(amount) {
        this.#balance = this.#balance + amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}
let Radha = new BankAccount();
// console.log(Radha.#balance);  // Error: Private field '#balance' must be declared in an enclosing class
// console.log(Radha.getBalance());


// Abstraction
class CoffeeMachine {
    start() {
        return 'Starting the coffee machine...';
    }
    brewCoffee() {
        return 'Brewing coffee...';
    }

}
let myCoffeeMachine = new CoffeeMachine();
// console.log(myCoffeeMachine.start());
// console.log(myCoffeeMachine.brewCoffee());



// Polymorphism
class Bird{
    fly() {
        return 'flying...';
    }
}
class Penguin extends Bird {
    fly() {
        return 'Penguins cannot fly!';
    }
}
let myBird = new Bird();
let myPenguin = new Penguin();
// console.log(myBird.fly()); // Output: flying...
// console.log(myPenguin.fly()); // Output: Penguins cannot fly!


// static method
class Calculator {
    static add(a, b) {
        return a + b;
    }
}
let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); // Output: TypeError: miniCalc.add is not a function
// console.log(Calculator.add(2, 3)); // Output: 5


// getters and setters
class Employee {
    #salary;
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary can't be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return `You are not allowed to see salary`;
    }
    set salary(value){
        if(value<0){
            console.error("Invalid Salary")
        }else{
            this._salary = value;
        }
    }
}
let emp = new Employee("Abhishek", -50000);
console.log(emp.salary);
console.log(emp._salary);
emp.salary = -60000;
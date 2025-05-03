const person = {
    name: "Abhishek",
    greet(){
        console.log(`hi, I am ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({name: 'Jann'});
boundGreet();

// interview
// bind, call and apply
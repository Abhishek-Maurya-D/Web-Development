// 1. Write a 'while' loop that calculates the sum of the all numbers for 1 to 5 and stores the result in a variable named 'sum'.

let x = 1;
let sum = 0;
while (x <= 5) {
    sum = sum + x;
    x++;
}
// console.log(sum);



// 2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
let countdown = [];
let i = 5;
while (i > 0) {
    countdown.push(i);
    i--;
}
// console.log(countdown);



// 3. Write a 'do-while' loop that prompts a user to enter their favorite tea type until they enter "Stop".
// Store each tea type in an array named 'teaCollection".

// This is a console program we can run it over there only

// let teaCollection = [];
// let tea;
// do {
//     tea = prompt(`Enter your favorite tea (type "Stop" to finish)`);
//     if (tea === 'Stop') {
//         break;
//     }
//     teaCollection.push(tea);
// } while (tea !== 'Stop');
// console.log(teaCollection);



// 4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'

let total = 0;
let j = 1;
do {
    total += j;
    j++;
} while (j <= 3)
// console.log(total);



// 5. Write a 'for' loop that multiplies each element in the array[2,4,6] by 2 and stores the results in a new array named 'multipliedNumbers'.

let array = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < array.length; i++) {
    multipliedNumbers.push(array[i] * 2);
}
// console.log(multipliedNumbers);



// 6. Write a 'for' loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList'.

let arr = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let j = 0; j < arr.length; j++) {
    cityList.push(arr[j]);
}
console.log(cityList);
// 1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stop the loop when it finds "chai".
// Store all teas before "chai" in a new array named 'selectedTeas'.

let arr1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; arr1[i] != "chai"; i++) {
    selectedTeas.push(arr1[i]);
}
// console.log(selectedTeas);



// 2. Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris"
// Store the other cities in a new array named 'visitedCities'.

let arr2 = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let k = 0; k < arr2.length; k++) {
    if (arr2[k] === "Paris") {
        continue;
    }
    visitedCities.push(arr2[k]);
}
// console.log(visitedCities);



// 3. Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found.
// Store the numbers before '4' in an array named 'smallNumbers'.

let number = [1, 2, 3, 4, 5]
let smallNumbers = [];
for (const num of number) {
    if (num == 4)
        break;
    smallNumbers.push(num);
}
// console.log(smallNumbers);



// 4. Use a for-of loop to iterate through the array '["chai", "green tea", "herbal tea", "black tea"]' and skip "herbal tea".
// Store the other teas in an array named 'preferredTeas'.

let arr4 = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const ele of arr4) {
    if (ele == "herbal tea")
        continue;
    preferredTeas.push(ele);
}
// console.log(preferredTeas);



/* 5. Use a 'for-in' loop to loop through an object containing city populations.
Stop the loop when the populations of "Berlin" is found and store all pervious cities' populations in a new object named 'cityPopulaitons'.

Let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}

let cityPopulaitons = {}
    // console.log(Object.keys(citiesPopulation));
    // console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    // console.log(city);
    // console.log(citiesPopulation[city]);
    if (city == "Berlin") {
        break;
    }
    cityPopulaitons[city] = citiesPopulation[city];
}
// console.log(cityPopulaitons);



// 6. Use a 'for-in' loop to loop through an object containing city populations.
// Skip any city with a population below 3 million and store the rest in a new object named 'largeCities.'

// let worldCities = {
//     "Sydney" : 5000000,
//     "Tokyo" : 9000000,
//     "Berlin" : 3500000,
//     "Paris" : 2200000,
// };

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
};
let largeCities = {};

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city];
}
// console.log(largeCities);



// 7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
// Stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'

let tea = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
tea.forEach(element => {
    if (element === "chai") {
        return;
    }
    availableTeas.push(element);
});
// console.log(availableTeas);



// 8. Write a 'forEach' loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
// Skip "Sydney" and store the other cities in a new array named 'traveledCities'. 

let selfCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
selfCities.forEach(element => {
    if (element === "Sydney") {
        return;
    }
    traveledCities.push(element);
});
// console.log(traveledCities);



// 9. Write a 'for' loop that iterates through the array [2, 5, 7, 9].
// Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubleNumbers'.

let nums = [2, 5, 7, 9];
let doubleNumbers = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 7) {
        continue;
    }
    doubleNumbers.push(nums[i] * 2);
}
// console.log(doubleNumbers);



// 10. Use a 'for-of' loop to iterate through the array '["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]'
// and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named 'shortTeas'.

let newTea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of newTea) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);
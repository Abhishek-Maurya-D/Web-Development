// 1. Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea". 
// Access the first element of the array and store it in a variable named 'firstTea'. 

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
// console.log(firstTea);



// 2. Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New York".
// Access the third element in the array and store it in a variable named 'favoriteCity'.

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
// console.log(favoriteCity);



// 3. You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
// Change the second element of the array to "jasmine tea".

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "Jasmine tea";
// console.log(teaTypes);



// 4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney".
// Add "Berlin" to the array using the 'push' method.

let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited.push("Berlin");
// citiesVisited[2] = "Berlin";
citiesVisited[citiesVisited.length] = "Berlin";
// console.log(citiesVisited);



// 5. You have an array named 'teaOrders' with "chai", "iced tea", "matcha", and "earl grey".
// Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.

let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"]
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);



// 6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and 'chai'.
// Create a soft copy of this array named 'softCopyTeas';

let popularTeas = ["Green Tea", "Oolong Tea", "Chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);



// 7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
// Create a hard copy of this array named 'hardCopyCities'.

let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];
let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);
// console.log(topCities);



// 8. You have two arrays: 'europeanCities' containing "Paris" and "Rome" and "asianCities" containing "Tokyo" and "Bangkok".
// Merge these two arrays into a new array named 'worldCities'.

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// there is error which is treating them as a string
// let worldCities = europeanCities + asianCities;
// console.log(worldCities);
// console.log(typeof worldCities);

// there is also an error which created the 2-D(dimensional) array
// let worldCities = [europeanCities, asianCities];
// console.log(worldCities);

let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);



// 9. You have an array named 'teaMenu' containing "masala chai", "oolong tea", "green tea", and "earl grey".
// Find the length of the array and store it in a variable named 'menuLenght'.

let teaMenu = ["Masala Chai", "Oolong Tea", "Green Tea", "Earl Grey"];
let menuLenght = teaMenu.length;
// console.log(menuLenght);



// 10. You have an array named 'cityBucketList' containing "kyoto", "London", "Cape Town", and "Vancouver".
// Check if "London" is in the array and store the result in a variable named "isLondonInList".

let cityBucketList = ["kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
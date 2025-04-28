// 1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stop the loop when it finds "chai".
// Store all teas before "chai" in a new array named 'selectedTeas'.

let arr = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; arr[i] != "chai"; i++) {
    selectedTeas.push(arr[i]);
}
console.log(selectedTeas);
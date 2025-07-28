// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let arrayMerged = [...array1, ...array2];

// Use the Set object to remove duplicates
let uniqueMerged = new Set(arrayMerged);

// Use array destructuring to assign the first three elements to variables
const [first, second, third, ...others] = uniqueMerged;

// Set the value of the output field to be the second element of the unique array
let outputField = document.getElementById("OutputField");
outputField.innerHTML = second;
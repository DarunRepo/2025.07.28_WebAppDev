// Challenge 3 Starter
// Initialise the array
let array1 = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
let resultIncludes = array1.includes(5);

// If true, filter out numbers less than 5
if (resultIncludes) {
    let myFiltered = array1.filter((item) => {if(item > 4) return item;})
    }

// Then square each number in the resulting array

// Output the final array

// Output a message if the number 5 is not in the array

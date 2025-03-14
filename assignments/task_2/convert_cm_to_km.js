// Task Details:
// * Write a code to convert centimeter to kilometer or 
//   vice versa 

// Expected Output:
// * Example : 100000 → “1 km”

// Function to convert centimeters to kilometers
function convertcmTokm (centimeter) {
    return centimeter / 100000;
}

// Function to convert kilometers to centimeters
function convertkmTocm(kilometer) {
    return kilometer * 100000;
}

// Convert 500000 cm to km
let centimeter = 500000;
let kilometer = convertcmTokm(centimeter);
console.log(`${centimeter} cm is equal to ${kilometer} km`)

// Convert 3 km to cm
kilometer = 3;
centimeter = convertkmTocm(kilometer);
console.log(`${kilometer} km is equal to ${centimeter} cm`);

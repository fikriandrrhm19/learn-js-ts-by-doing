// Task Details:
// * Write a code to convert centimeter to kilometer or 
//   vice versa 

// Expected Output:
// * Example : 100000 → “1 km”

// Function to convert centimeters to kilometers
function convertcmTokm(centimeter: number): number {
    return centimeter / 100000;
}

// Function to convert kilometers to centimeters
function convertkmTocm(kilometer: number): number {
    return kilometer * 100000;
}

// Convert 500000 cm to km
let centimeter: number = 500000;
let kilometer: number = convertcmTokm(centimeter);
console.log(`${centimeter} cm is equal to ${kilometer} km`);

// Convert 3 km to cm
kilometer = 3;
centimeter = convertkmTocm(kilometer);
console.log(`${kilometer} km is equal to ${centimeter} cm`);

export {}
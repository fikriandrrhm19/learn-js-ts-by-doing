// Task Details:
// * Write a function that takes an integer n as input and 
//   returns true if n is odd and false if n is even

// Expected Output:
// * Example : 1000 → isEven: true; 1001→ isEven: false

// Function to check if a number is even
function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Example 1: Checking if 1000 is even
let number: number = 1000;
console.log(`Checking if ${number} is even: ${isEven(number)}`);

// Example 2: Checking if 1001 is even
number = 1001;
console.log(`Checking if ${number} is even: ${isEven(number)}`);

// Task Details:
// * Write a program that takes a temperature in Fahrenheit as 
//   input and converts it to Celsius.

// Expected Output:
// * Input: A temperature value in Fahrenheit. 
// * Output: The equivalent temperature in Celsius.

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): string {
    let celsius: number = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(1); 
}

// Example case: Convert 100°F to Celsius
let fahrenheit: number = 100;
let celsius: string = fahrenheitToCelsius(fahrenheit);
console.log(`Temperature input: ${fahrenheit}°F`);
console.log(`Converted temperature: ${celsius}°C`);

// Prompt the user to enter a temperature in Fahrenheit
// Note: This will only work in a browser environment
const userInput: string | null = prompt("Enter temperature in Fahrenheit: ");
if (userInput !== null) {
    fahrenheit = parseFloat(userInput); 
    celsius = fahrenheitToCelsius(fahrenheit);
    console.log(`You entered: ${fahrenheit}°F`);
    console.log(`The equivalent temperature in Celsius is: ${celsius}°C`);
}

export {}
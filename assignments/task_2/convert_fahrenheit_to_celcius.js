
// Task Details:
// * Write a program that takes a temperature in Fahrenheit as 
//   input and converts it to Celsius.

// Expected Output:
// * Input: A temperature value in Fahrenheit. 
// * Output: The equivalent temperature in Celsius.

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(1);
}

// Example case: Convert 100°F to Celsius
let fahrenheit = 100;
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(`Temperature input: ${fahrenheit}°F`);
console.log(`Converted temperature: ${celsius}°C`);

// Prompt the user to enter a temperature in Fahrenheit
// Note: This will only work in a browser console
fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));    
celsius = fahrenheitToCelsius(fahrenheit);      // Convert new input to Celsius
console.log(`You entered: ${fahrenheit}°F`);
console.log(`The equivalent temperature in Celsius is: ${celsius}°C`);
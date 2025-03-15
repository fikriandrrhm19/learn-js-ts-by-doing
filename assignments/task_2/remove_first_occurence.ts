// Task Details:
// * Write a code to remove the first occurrence of 
//   a given “search string” from a string

// Expected Output:
// * Example : string = “Hello world”, search string = “ell”
//   Output: "Ho world"

// Function to remove the first occurrence of a search string
function removeFirstOccurrence(mainStr: string, searchStr: string): string {
    return mainStr.replace(searchStr, "");
}

// Example 1: Removing "ell" from "Hello World!"
let text: string = "Hello World!";
let modifiedText: string = removeFirstOccurrence(text, "ell");
console.log(`Original text: "${text}"`);
console.log(`After removing "ell": "${modifiedText}"`);

// Example 2: Removing first "Andra" from "Fikri Andra Andra Irham"
let fullName: string = "Fikri Andra Andra Irham";
let modifiedFullName: string = removeFirstOccurrence(fullName, "Andra");
console.log(`Original text: "${fullName}"`);
console.log(`After removing first "Andra": "${modifiedFullName}"`);

export {}
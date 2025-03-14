// Task Details:
// * Write a code to remove the first occurrence of 
//   a given “search string” from a string

// Expected Output:
// * Example : string = “Hello world”, search string = “ell”
//   Output: "Ho world"

// Function to remove the first occurrence of a search string
function removeFirstOccurence(mainstr, searchstr){
    return mainstr.replace(searchstr, "");
}

// Example 1: Removing "ell" from "Hello World!"
let text = "Hello World!";
let modifiedText = removeFirstOccurence(text, "ell");
console.log(`Original text: "${text}"`);
console.log(`After removing "ell": "${modifiedText}"`);

// Example 2: Removing first "Andra" from "Fikri Andra Andra Irham"
let fullName = "Fikri Andra Andra Irham";
let modifiedFullName = removeFirstOccurence(fullName,"Andra")
console.log(`Original text: "${fullName}"`);
console.log(`After removing first "Andra": "${modifiedFullName}"`);
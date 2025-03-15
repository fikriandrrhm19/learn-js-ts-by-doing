// Task Details:
// * Write a code to check whether a string is a palindrome or not

// Expected Output:
// * Example : ‘madam’ → palindrome

// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
    let rev: string = str.split("").reverse().join("");
    return rev === str;
}

// Example 1: Check if "madam" is a palindrome
let str1: string = "madam";
console.log(`Is "${str1}" a palindrome? ${isPalindrome(str1) ? "Yes" : "No"}`);

// Example 2: Check if "fikri" is a palindrome
let str2: string = "fikri";
console.log(`Is "${str2}" a palindrome? ${isPalindrome(str2) ? "Yes" : "No"}`);

export {}
# Task 2: Review Git and Create Simple JavaScript Scripts

In this task, I will explore the fundamentals of using Git to efficiently manage code and understand the concept of branching using GitHub Flow. I will initialize a repository, commit changes, and create and manage branches to grasp the commonly used workflow in the industry. Additionally, I will practice writing simple JavaScript and TypeScript scripts to solve various common programming problems.

Before getting started, there are a few things to prepare:

- **Code Editor**: Use an editor such as `Visual Studio Code`, `Sublime Text`, or any other editor that supports JavaScript and Git.
- **Git**: Ensure that Git is installed on the system to manage version control and collaborate with GitHub.
- **GitHub Repository**: Set up a GitHub account and create a repository to store and share the completed code.

Once everything is set up, we can dive deeper into exploring Git and JavaScript!

## Exercise 1: Git Basics
<p align="center">
  <img src="https://github.com/user-attachments/assets/ce9a6db6-2c39-4d60-a1f5-9c7ff2072a5a" alt="image">
</p>

This exercise aims to understand the Git workflow for professional code management within an organization or company. The following are the steps I will take:

1. **Repository Initialization**. Create a new directory, initialize Git within it, and configure basic Git settings.
2. **Making Changes and Committing**. Add files to the repository and make modifications. Then, stage the files and create a commit with a descriptive message. Finally, push the changes to GitHub.
3. **Learning the Concept of Branching**. Create a new branch, switch between branches, and apply the GitHub Flow strategy in code management.
4. **Collaborating with Pull Requests**. Create a pull request to propose changes, review the code, and understand the merging process into the main branch.

### 1. Installing Git
Before starting with Git, we need to install it based on the operating system we are using.

#### **Linux**
- **Debian/Ubuntu:**
  ```bash
  sudo apt-get install git
  ```
- **Fedora:**
  ```bash
  sudo yum install git
  ```
Verify the installation:
```bash
git --version
```

#### **Windows**
Download Git from [git-scm.com](https://git-scm.com) and follow the installation process.

#### **MacOS**
Use Homebrew to install Git:
```bash
brew install git
```
Verify the installation:
```bash
git --version
```

### 2. Configuring Git and SSH Key (Optional)
After installing Git, we need to set up the user identity so that every change we make can be attributed to us.

First, configure Git user identity:
```bash
git config --global user.name "Fikri Andra Irham"
git config --global user.email fikri.andrhm@gmail.com
```

For more secure authentication, we can use an SSH key:
```bash
ssh-keygen -t rsa -b 4096 -C "fikri.andrhm@gmail.com"
cat ~/.ssh/id_rsa.pub
```
Add the public key to [GitHub SSH Keys](https://github.com/settings/keys). Add the SSH identity to the agent:
```bash
ssh-add ~/.ssh/id_rsa
```
Test the connection to GitHub:
```bash
ssh -T git@github.com
```

 

### 3. Initializing a Git Repository
Now, we will start working with Git by creating a new repository.

Create a new directory and initialize Git:
```bash
mkdir learn-js-ts-by-doing && cd learn-js-ts-by-doing
git init
```
<p align="center">
  <img src="https://github.com/user-attachments/assets/2e5b94cf-4d73-4502-9114-f6579800395e" alt="image">
  <img src="https://github.com/user-attachments/assets/948588f8-84c8-4f7b-bb28-c711a15a5691" alt="image">
</p>
Add files and make the first commit:

```bash
touch index.js
git add .
git commit -m "<description>"
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/26b1a1ae-776b-4dd5-9dc2-289f49084249" alt="image">
  <img src="https://github.com/user-attachments/assets/294aa580-81f0-4327-a7ee-d07bd9f94484" alt="image">
</p>

Connect the local repository to GitHub:
```bash
git remote add origin git@github.com:fikriandrrhm19/learn-js-ts-by-doing.git
git push -u origin main
```

### 4. Creating and Managing Branches
Branching allows us to work on new features without disrupting the main codebase.

Create a new branch:
```bash
git branch <branch_name>
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/90b379e6-d185-47e5-acae-b06f33d5c60d" alt="image">
  <img src="https://github.com/user-attachments/assets/a9922fc0-fd11-43b0-9daf-5bfa86a1459d" alt="image">
</p>

Switch to the new branch:

```bash
git checkout <branch_name>
```

Make changes in the branch, commit, and push to GitHub:
```bash
git add .
git commit -m "Added feature X"
git push origin <branch_name>
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/a52e43a3-8dec-4214-a539-507a34d6c17b" alt="image">
</p>

Merge the branch into `main`:

```bash
git checkout main
git merge <branch_name>
git push origin main
```

 

## Exercise 2: JavaScript Scripting
<p align="center">
  <img src="https://github.com/user-attachments/assets/965a0212-3e1a-40e7-84b7-18d7eaefba53" alt="image">
</p>

This exercise focuses on developing simple JavaScript scripts to solve common programming problems. Each script is designed to strengthen your understanding of arithmetic operations, string manipulation, and control structures in JavaScript. The tasks include:

1. Converting a temperature from Fahrenheit to Celsius.
2. Converting a value between centimeters and kilometers.
3. Determining whether a given number is odd or even.
4. Removing the first occurrence of a specified substring from a string.
5. Checking if a string is a palindrome.

Below is an explanation of each script along with the expected output.

### 1. Convert Fahrenheit to Celsius (`convert_fahrenheit_to_celcius.js`)
**Code Explanation**:

The `fahrenheitToCelsius(fahrenheit)` function is used to convert temperature from Fahrenheit to Celsius. The conversion formula used: $`Celsius = (Fahrenheit - 32) \times \frac{5}{9}`$

**Output**:
> Temperature input: 100°F
>
> Converted temperature: 37.8°C

![image](https://github.com/user-attachments/assets/179bfa72-fd8c-4a49-bc72-899f60c107c0)

> You entered: 95°F debugger eval code:3:9
>
> The equivalent temperature in Celsius is: 35.0°C

 

### 2. Convert Centimeters to Kilometers (`convert_cm_to_km.js`)
**Code Explanation**:

This script contains two conversion functions:
- `convertCmToKm(centimeter)`: Converts a value from centimeters to kilometers by dividing the number by **100,000**.
- `convertKmToCm(kilometer)`: Converts a value from kilometers to centimeters by multiplying it by **100,000**.

**Output**:
> 500000 cm is equal to 5 km
>
> 3 km is equal to 300000 cm

 

### 3. Check Odd or Even (`check_odd_or_even.js`)
**Code Explanation**:

The `isEven(n)` function is used to check whether a number is even or odd. The script uses the modulus operator `%` to determine the result:

- If `n % 2 == 0`, the number is **even**.
- Otherwise, the number is **odd**.

**Output**:
> Checking if 1000 is even: true
>
> Checking if 1001 is even: false

 

### 4. Remove First Occurrence of a Substring (`remove_first_occurrence.js`)
**Code Explanation**:

The `removeFirstOccurrence(mainStr, searchStr)` function is used to remove only the first occurrence of `searchStr` in `mainStr`. It uses the `.replace(searchStr, "")` method to replace the first found substring with an empty string.

**Output**:
> Original text: "Hello World!"
> 
> After removing "ell": "Ho World!"
> 
> Original text: "Fikri Andra Andra Irham"
> 
> After removing first "Andra": "Fikri  Andra Irham"

### 5. Check Palindrome (`check_palindrome.js`)
**Code Explanation**:

The `isPalindrome(str)` function reverses the string using the `.split("").reverse().join("")` method. If the result matches the original string, then the word is a palindrome.

**Output**:
> Is "madam" a palindrome? Yes
>
> Is "fikri" a palindrome? No


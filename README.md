# Calculator

## Short Description

A basic calculator app with the following functionality:

1. add
2. subtract
3. multiply
4. divide
5. modulo
6. exponent

## Features

Aside from the above this calculator allows the user to use decimals/floating point numbers, delete previous number entries using the delete button, and clear all previous data.

## Challenges

This project was thoroughly enjoyable to make and provided me with an opportunity to cement some core concepts into my mind. I wanted to go out of my way during this project to split as much code as I could into their own functions in order to adhere to the DRY principle (Don't Repeat Yourself) and I feel I did a fairly good job of achieving that here. I also wanted to work on my variable and function naming conventions, so I made sure to give my variables relevant names throughout. The first challenge I had during this project was ensuring the basic operators worked correctly. I achieved this by creating individual functions for add, subtract, multiply and divide and tested them using Chrome developer tools and the console.

Once I had these functions outputting the correct answers, I moved on to creating a new operate function that took two numbers and one of the operator functions as arguments. Initially I used heavily nested if statements as conditionals, but I found this to be difficult to read and ended up using a switch statement instead as I found this much more readable. With this new operate function tested and working, I moved on to creating a basic HTML calculator with buttons for each digit, operator and function key using a both flexbox and grid when adding the CSS. From here I added class names to the button elements and a new function that appended text content to the display when the number buttons were entered, as well as a clear button function that cleared the display when clicked.

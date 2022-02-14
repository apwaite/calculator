# Calculator

## Short Description

A basic calculator app with the following functionality:

1. add
2. subtract
3. multiply
4. divide
5. modulo
6. exponent

[Link to Calculator Page](https://apwaite.github.io/calculator/)

## Features

Aside from the above this calculator allows the user to use decimals/floating point numbers, delete previous number entries using the delete button, and clear all previous data.

## Challenges

This project was thoroughly enjoyable to make and provided me with an opportunity to cement some core programming concepts into my mind. I wanted to go out of my way during this project to split as much recurring code as I could into their own functions in order to adhere to the DRY principle (Don't Repeat Yourself) and I feel I did a fairly good job of achieving that here. I also wanted to work on my variable and function naming conventions, so I made sure to give my variables relevant names throughout. The first challenge I had during this project was ensuring the basic operators worked correctly. I achieved this by creating individual functions for add, subtract, multiply and divide and tested them using Chrome developer tools and the console.

Once I had these functions outputting the correct answers, I moved on to creating a new operate function that took two numbers and one of the operator functions as arguments. Initially I used heavily nested if statements as conditionals, but I found this to be overly verbose and ended up using a switch statement instead as I found this much more readable. With this new operate function tested and working, I moved on to creating a basic HTML calculator with buttons for each digit, operator and function key using both flexbox and grid CSS during creation. From here I added class names to the button elements and a new function that appended text content to the display when the number buttons were entered, as well as a clear button function that cleared the display when clicked.

The next issue was finding a way to store the numbers entered on the screen, clearing the screen and then allowing the second set of numbers to be entered onto the screen. I did this by attaching an on click event listener to each operator button which then executed the addOp function. If the current operator (which by default was null) was not null, it would run the calculate function otherwise it would store the numbers currently entered on the display in a variable, store the operator that had just been entered and clear the display ready for the next set of numbers. With the first set of numbers stored and the display cleared, the user could enter their second set of numbers and press the equals button to run the calculate function. The calculate function would then check to ensure this was valid, the numbers currently on the display stored, the operate functio called and the display updated with this value.

The next challenges involved the implementation of a backspace button that would remove number entries arleady on the display and the addition of floating point numbers In order to remove the previous number I used the slice method, but after creating a function to do this I came across an issue where I would clear all the numbers from the screen, and instead of displaying zero it would leave a blank display which interfered with later calculations. To solve this I added a conditional that determined whether the display length equaled zero, and if this was the case it would set the text content to "0". The addition of floating point numbers was achieved through the creation of an add decimal function that checked whether the display had a "." already, otherwise it would append a "." to the display.

Finally I added both exponent and mod operator buttons as additional functionality. Implementing exponent was fairly straightforward but mod was a challenge as it only seemed to work with positive values. After some investigating I came to the realisation that the "%" operator does not function as modulo like it might in other languages, instead it's a remainder operator so consequently only works on positive values. To overcome this I used a formula I found on MDN that allows the remainder operator to replicate true modulo.

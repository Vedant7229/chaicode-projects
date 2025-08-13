// Challenge 1: You are given a number. You need to determine whether it is even or odd.
// Problem Statement: Write a function that checks if a number is even or odd using an if-else
// statement and returns "Even" or "Odd". 

function checkEvenOdd (num) {
    if (num % 2 === 0) {
return "Even";
} 
    else {
return "Odd";
}
}

// Challenge 2: You are given three numbers. Determine the largest among them.
// Problem Statement:
// Write a function that takes three numbers and returns the largest using if-else.
function findLargest(a, b, c) {

if (a>b) {
    if(a>c){
    return a ;
    }
    else {
    return c;
}
}
else {
if (b>a){
return b;
}
else {
return a
}
}
}

// Challenge 3: You need to determine if a person is eligible to vote (age 18 or above).
// Problem Statement:
// Write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible".

function checkVotingEligibility(age) {

    if(age>=18){
    return ("Eligible");
}   
    else{
    return ("Not Eligible");
}
}

// Challenge 4: Given a student's marks, determine their grade based on this scale: 
// • 90+ → A
// • 80-89 → B
// • 70-79 → C
// • 60-69 → D
// • Below 60 → F
// Given a student's marks, determine their grade based on this scale:
// Problem Statement:
// Write a function that returns the corresponding grade using if-else.

function calculateGrade(marks) {
 
  if (marks >= 90){
    return "A";
  }
  else if(marks >=80 && marks < 90){
    return "B";
  }
  else if (marks >= 70 && marks <80){
    return "C";
  }
  else if (marks >=60 && marks < 70){
    return "D" ;
  }
  else{
    return "F";
  }
}

// Challenge 5: A leap year is divisible by 4, but not by 100 unless also divisible by 400.
// Problem Statement:
// Write a function to check if a year is a leap year.

function isLeapYear(year) {

    if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
  return ("Leap Year")
}
    else {
  return ("Not a Leap Year")
}
}

// Challenge 6: You need to determine what action to take based on traffic light colors:
// • "Red" → Stop
// • "Yellow" → Slow Down
// • "Green" → Go
// • "Blue" → Invalid Color
// Problem Statement:
// Write a function that uses switch-case to return the correct action.

function trafficLightAction(color) {

    switch (color) {

  case "Red" :
  return ("Stop");

  case "Yellow":
  return ("Slow Down");

  case "Green":
  return("Go");

  default :
  return("Invalid Color");
}
}

// Challenge 7: Given a number (1-7), return the corresponding day of the week.
// Problem Statement:
// Write a function that uses switch-case to return the day name for valid inputs otherwise "Invalid
// Day".

function getDayOfWeek(day) {

    switch (day) {

  case 1:
  return("Monday");
  
  case 2:
  return("Tuesday");
  
  case 3:
  return("Wednesday");
  
  case 4:
  return("Thursday");
  
  case 5:
  return("Friday");
  
  case 6:
  return("Saturday");

  case 7:
  return("Sunday");

  default:
  return("Enter a valid Number between 1 to 7");
}
}

// // Challenge 8: Determine if a number is positive, negative, or zero.
// Problem Statement:
// Write a function that uses if-else to classify a number.

function checkNumberType(num) {
    
    if (num > 0) {
    return ("Positive");
}
    else if (num < 0) {
    return ("Negative");
}
    else{
    return ("Zero");
}
}

// Challenge 9: Given a temperature and a scale ("C" or "F"), convert it to the other scale.
// Problem Statement:
// Write a function that uses switch-case to convert temperature.

function convertTemperature(value, scale) {

    switch (scale) {
     case "C":
      return ((value*1.8) + 32);

     case "F":
      return ((value - 32)*0.56);
}
}

// Challenge 10: Create a basic calculator that performs +, - ,*, / based on user input.
// Problem Statement:
// Write a function that uses switch-case to perform arithmetic operations. Handle the edge case
// of "Cannot divide by zero"

function calculator(num1, num2, operator) {
 
switch(operator){

  case "+":
  return (num1 + num2);
  case "-":
  return (num1 - num2);
  case "*":
  return (num1 * num2);
  case "/":
  return (num1 / num2);

  default:
  return("Write proper arithmetic operator");
}

}

// ----------------END OF CONDITIONAL CHALLENGES-------------------
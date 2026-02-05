// Challenge 1
// Problem Statement
// // Imagine you are building an online school management system. Each student has a profile
// // containing their name, age, and grade. You need to store this information in an object format
// // so that it can be accessed easily when required.
// // Challenge
// // Write a function that takes name, age, and grade as parameters and returns a student object
// // containing these properties.
// // Constraints
// // • name should be a string.
// // • age should be a positive integer greater than 5.
// // • grade should be a string like "1Oth", "12th", etc.
// // • return "Invalid input" for wrong inputs.

function createStudentProfile(name, age, grade) {
if (
typeof name !== "string" ||
typeof grade !== "string" ||
typeof age !== "number" ||
age <= 5 ||
name ==="")
{return "Invalid input";
}
return {name, age, grade };
}

// Challenge 2
// Problem Statement
// You are developing a car rental service. Each car has a brand and model, but some cars don't
// have a color assigned yet. You need to add a color property dynamically when a customer
// selects a car.
// Challenge
// Write a function that takes a car object and a color string, then adds the color property to the
// object.
// Constraints
// • car should be a valid object with at least brand and model properties.
// • color should be a non-empty string, otherwise return "Invalid color".

function addCarColor(car, color) {
  // Add color property to the car object

if(
  typeof color !== "string" ||
  typeof car.brand !== "string" ||
  typeof car.model !== "string" ||
   color === ""

){
  return "Invalid color";
}
else {
  car.color = color;
  return car;
}

}

// Challenge 3
// Problem Statement
// You are building an online shopping platform. Some products have discounts, and some don't.
// You need to check whether a product object contains a discount property.
// Challenge
// Write a function that checks if a product object has a discount property and returns true or
// false.
// Constraints
// • product should be a valid object.

function hasDiscount(product) {
  // Check if product has discount property
if(typeof product.discount !== "number"){
 return false;
}
else {
  return true;
}
}

// Challenge 4
// Problem Statement
// For security reasons, when a user logs out, their password should be removed from the user
// object before storing it in logs or analytics.
// Challenge
// Write a function that removes the password property from a user object and returns the
// updated object.
// Constraints
// • user should be a valid object with at least a username and password.
// • If password does not exist, return the object as it is.

function removePassword(user) {
  // Remove password property
  if(typeof user.username !== "string" || typeof user.password !== "string"){
    return "invalid object";
  }
  else if(!user.password){
    return user;
  }
  delete user.password;
  return user; 
}

// Challenge 5
// Problem Statement
// You are analyzing user data in a database. You need to count how many properties exist in a
// user's profile to determine if the profile is complete.
// Challenge
// Write a function that returns the number of properties in an object.
// Constraints
// • user should be a valid object.
// • If the object is empty, return O.

function countProperties(user) {
  // Return the number of properties in user
  return Object.keys(user).length
}

// Challenge 6
// Problem Statement
// You are working on a system that stores user profile information from multiple sources.
// Sometimes, the same user has two different records, and you need to merge them into a
// single object.
// Challenge
// Write a function that takes two objects and merges them into one. If a key exists in both
// objects, the value from the second object should overwrite the value from the first object.
// Constraints
// • Both inputs should be valid objects.
// • If an object is empty, return the other object as it is.
// • If both objects are empty, return 0.

function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a single object
  return {...obj1,...obj2};
}

// Challenge 7
// Problem Statement
// You are working on a system that stores product details in an object. However, for some
// functionalities, the data needs to be in an array format.
// Challenge
// Write a function that converts an object into an array of key-value pairs. Each element in the
// array should be an array where the first item is the key and the second item is the value.
// Constraints
// • The input should be a valid object.
// • If the object is empty, return an empty array.

function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  return Object.entries(obj);
}

// Challenge 8
// Challlenge 9
// Challenge 10

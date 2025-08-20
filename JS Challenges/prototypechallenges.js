// Challenge 1 - Problem statement
// You need to create a constructor function Animal that takes a name parameter. Add a method
// makeSound to its prototype, which always returns "Some generic sound".
// Challenge
// • Implement a constructor function Animal that initializes the name property.
// • Attach a method makeSound to its prototype that returns "Some generic sound".

function Animal(name){
  this.name = name;
}

Animal.prototype.makeSound = function() {
  return ("Some generic sound"); 
  }


// Challenge - 2 
// Problem statement
// You are designing a simple robot system. Each robot has a name and a batteryLevel. The
// robot should have a method charge () that increases the battery level by 20, but it cannot
// exceed 100.
// Challenge
// • Implement a constructor function Robot that initializes name and batteryLevel.
// • Attach a method charge() to its prototype that increases batteryLevel by 20,
// ensuring it does not go above 100.

  function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name;
    this.batteryLevel = batteryLevel;

}
Robot.prototype.charge = function(){
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
  return this.batteryLevel;
}

// Challenge 3
// Problem statement
// You need to create a Counter constructor function that initializes a count property to 0. The
// counter should have two prototype methods:
// • increment) increases the count by 1.
// • decrement () decreases the count by 1.
// Challenge
// • Implement a constructor function Counter that initializes count to e
// • Attach increment () and decrement) methods to the prototype.

// You need to implement the Counter constructor function and its prototype methods
function Counter () {
this.count = 0;
}
// Define increment method on Counter's prototype
Counter.prototype.increment = function (){
this.count += 1;
};

// Define decrement method on Counter's prototype
Counter.prototype.decrement = function() {
this.count -= 1;
};

// Challenge 4
// Problem statement
// Create a Playlist constructor that initializes with an empty songs array. Add a method
// addSong (song) to the prototype that adds a new song to the playlist.
// Challenge
// • Implement a constructor function Playlist that initializes an empty songs array.
// • Attach a method addSong (song) to its prototype that adds the song to the songs array.

function Playlist() {
    
    this.songs=[];
}
Playlist.prototype.addSong = function(song) {
  this.songs.push(song);
}

// Challenge 5
// Problem statement
// Create a Shopping Cart system where items can be added with a price. Implement a method
// get TotalPrice() that calculates the total price of all items in the cart.
// Challenge
// • Implement a constructor function ShoppingCart that initializes an empty items array.
// • Attach addItem (price) to the prototype to add items.
// • Attach getTotalPrice() to calculate the total price of items.

function ShoppingCart() {
    // Initialize items property

  items = [];
  this.items = items;
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price){
  this.items.push(price);
}
// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function(){
  return this.items.reduce((acc,price) => acc+price, 0);
  
}

// Challenge 6
// Problem statement
// Create a BankAccount constructor that initializes:
// • A balance property representing the account balance.
// • A transactions array to log all deposit and withdrawal activities.
// Implement the following methods on the prototype:
// 1. deposit (amount):
// • Increases the balance by the given amount.
// • Adds a transaction log in the format: "Deposited X" (where X is the amount).
// 2. withdraw (amount):
// • Decreases the balance by the given amount.
// • Prevents overdraft (cannot withdraw if balance is insufficient).
// • If withdrawal is successful, log: "Withdrew X".
// • If balance is insufficient, log: "Insufficient balance".
// 3. getTransactionHistory():
// • Returns the list of all transactions as an array of strings in the order they
// occurred.
// Challenge
// • Implement BankAccount constructor with balance and transactions.
// • Attach deposit (amount), withdraw(amount), and getTransactionHistory()
// methods to the prototype.


function BankAccount(balance) {
    // Initialize balance and transactions properties
    this.transactionHistory = [];
     this.balance = balance;
}


// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
this.balance += amount;
this.transactionHistory.push (`Deposited ${amount}`); 
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
if(this.balance < amount ){
  this.transactionHistory.push ("Insufficient balance");
}
else{
this.balance -= amount;
this.transactionHistory.push (`Withdrew ${amount}`);
}
}
// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function(transactions){
  return this.transactionHistory;
}


// Challenge 7
// Problem statement
// Create an Employee constructor that initializes name, position, and salary. Implement:
// • applyBonus (percent): Increases the salary by the given percentage.
// Challenge
// • Implement Employee constructor with name, position, and salary
// • Attach applyBonus (percent) to the prototype to increase salary.

function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.name = name;
    this.position = position;
    this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function(percent){
this.salary = this.salary + this.salary * (percent/100);
}

// Challenge 8
// Problem statement
// Create a Library constructor that initializes a books array. Implement:
// • addBook(book): Adds a book to the books array.
// • findBook(title): Searches for a book by title and returns "Book found" or "Book
// not found".
// Challenge
// • Implement Library constructor with a books array.
// • Attach addBook (book) and findBook(title) methods to the prototype.

function Library() {
    // Initialize books property
    let books = []
    this.books = books;
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book){
 this.books.push(book);
}
// Define findBook method on Library's prototype
Library.prototype.findBook = function(title){
  return this.books.includes(title) ? "Book found" : "Book not found"
  }

  // Challenge 9
//   Problem statement
// You are building a banking system where multiple bank accounts can exist. Each account has
// an accountNumber, holderName, and balance. Implement the following methods:
// • deposit (amount): Adds money to the balance.
// • withdraw(amount): Deducts money but prevents overdraft.
// • transfer (amount, targetAccount): Transfers money from one account to another if
// the balance allows it.
// Challenge
// • Implement BankAccount constructor with accountNumber, holderName, and balance.
// • Attach deposit (amount), withdraw (amount), and transfer (amount,
// targetAccount) methods to the prototype.

function BankAccount(accountNumber, holderName, balance) {
    // Initialize accountNumber, holderName, and balance properties
this.accountNumber = accountNumber;
this.holderName = holderName;
this.balance = balance;
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
  this.balance += amount;
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
  if(this.balance < amount) {
    return "Insufficient Balance"
  }
  else {
    this.balance -= amount;
  }
}

// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer= function(amount,targetAccount){
  this.balance -= amount;
  targetAccount.deposit(amount);
}


// Challenge 10
// Problem statement
// You are developing an online store system where each product has the following properties:
// • name: The name of the product (e.g., "Laptop").
// • price: The price of the product (a positive integer).
// • stock: The available stock (a non-negative integer).
// Your task is to implement the following methods:
// 1. applyDiscount (percent)
// • Reduces the price of the product by the given percentage.
// o The final price should be rounded to the nearest integer (use Math. round).
// • Example: If a product costs $1000 and a 10% discount is applied, the new
// price should be $900.
// 2. purchase(quantity)
// o If the requested quantity is available in stock, reduce the stock accordingly.
// • If not enough stock is available, return "Not enough stock".
// • Example: If 5 items are in stock and the user buys 3, the new stock should be
// 2.
// Challenge
// • Implement the Product constructor with name, price, and stock properties.
// • Attach applyDiscount (percent) and purchase (quantity) methods to the
// prototype (for memory efficiency).
// • Ensure integer values for price after applying a discount.
// • Handle edge cases like zero stock or excessive purchases.

function Product(name, price, stock) {
    // Initialize name, price, and stock properties
    this.name = name;
    this.price = price;
    this.stock = stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function(percent){
  this.price  = Math.round(this.price - this.price * (percent/100));

}
// Define purchase method on Product's prototype
Product.prototype.purchase = function(quantity){
  if(this.stock < quantity){
    return "Not enough stock"
  } 
  else{
    this.stock -= quantity;
    return this.stock;
  }
}
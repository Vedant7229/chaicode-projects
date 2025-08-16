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
function Playlist() {
    
    this.songs=[];
}
Playlist.prototype.addSong = function(song) {
  this.songs.push(song);
}
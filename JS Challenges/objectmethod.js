// Static Methods of Objects

// 1. assign() - copies data from one or more source objects to a target object
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
function assignObjects(target,source) {
    const result = Object.assign(target, source);
    return result;
}

// 2. create() - creates a new object with the specified prototype object and properties
const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();

// 3. 

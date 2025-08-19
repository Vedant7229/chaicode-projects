// Array.prototype.myForEach = function(userFn){

// Types of function
// 1. Function declaration
 function add(a,b){
    return a+b;
 }

//  2. Function Expression
 const subtract = function(a,b){
 return a-b;
 }

//  3. First Class Function

function applyOperation(a,b,operation){
    return operation(a,b)
}

const result = applyOperation(5,4,(x , y) => x/y);

console.log (`The result is ${result}`);

// 4. Closure Function /

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

// 5. Immediately Invoked Function Expression (IIFE)
  (function (a,b,result1){
    return result1 = a+b;
}) (2,3)

console.log(result1)

// Arrow Function
  const add = (a,b) => a+b;
 
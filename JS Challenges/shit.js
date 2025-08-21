// let myArray = [1,2,3,4,5]

// function sumFac(myArray){
//     let sum=0;
//     for(let i=0;i<5;i++){
//         sum = sum + myArray[i];
//     }
//     return sum;
// }
// let result = sumFac(myArray);
// console.log (result);


// ------------------------------
// filter
// return - new array,
// signature - filters out elements based on a condition
// arr = [1,2,3,4,5,6];
// Array.myFilter.prototype = function(useFn) {
//      const result1 = [];
//  for(let i=0; i<this.length; i++){
//     if(useFn(this[i])) {
//         result1.push(this[i]);
//  }
// }
//  return result1;
// }

//  arr.myFilter((e) => e>3);

function checktruthyValue(value){
    if(value){
        console.log ("truthy")
    }
    else{
        console.log("falsy")
    }
}

checktruthyValue([1,2])
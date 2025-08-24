// let myArray = [1,2,3,4,5]

// function sumFac(myArray){
//     let sum=0;
//     for(let i=0;i<5;i++){
//         sum = sum + myArray[i];
//     }
//     // return sum;
// }
// let result = sumFac(myArray);
// // console.log (result);


// // ------------------------------
// // filter
// // return - new array,
// // signature - filters out elements based on a condition
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

// function checktruthyValue(value){
//     if(value){
//         // console.log ("truthy")
//     }
//     else{
//         // console.log("falsy")
//     }
// }

// // checktruthyValue([1,2])

// Task 1 
let tasks = [
    {description: "Write report" , completed: false, priority: 2},
    {description: "Send email" , completed: true, priority: 3},
    {description: "Prepare presentation" , completed: false, priority: 1},
];

let tasksReport = tasks.filter(
    (task) => !task.completed
)
.sort((a,b)=> a.priority - b.priority)
// console.log(tasksReport)

// Task 2

let movieRating = [
    {
        title: "Bahubali", rating: [4,5,5]
    },
    {
        title: "Bahubali-2", rating: [5,5,5]
    },
    {
        title: "Chaavva", rating: [3,4,5]
    },
    
];

let avgRating = movieRating.map((movie) => {
   let total = movie.rating.reduce ((acc,currentValue) => currentValue += acc)
    return total / movie.rating.length ; 

})
// console.log(avgRating)



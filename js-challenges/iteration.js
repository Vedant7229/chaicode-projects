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

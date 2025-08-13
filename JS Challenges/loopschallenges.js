// Challenge 1: You have a pile of gifts, and you want to give each of your friends one gift at a time. You keep
// giving them gifts until they all get one.
// Problem Statement:
// Write a function to distribute gifts to your friends one by one. It should stop once all your
// friends have received a gift.

function distributeGifts(totalGifts, friends) {

    let giftsGiven = 0;
  for(let i=0;i<friends;i++){
    if(totalGifts > 0){
     giftsGiven++;
     totalGifts-- 
    }
  }
  return giftsGiven
}

// // Challenge 2: You have a basket full of apples. You need to count how many apples are in the basket, but you
// don't know the exact number. Each time you pick an apple, you count one. Your task is to count
// how many apples are in the basket.
// Problem Statement:
// Create a function that counts the number of apples in the basket using a loop.

function countApples(basket) {
    let count = 0;
    for(let i = 0; i < basket.length; i++) {
        count++;
    }
    return count;
}

// // Challenge 3: You're packing chocolate bars into gift boxes. Each box needs to have the same number of
// chocolate bars. You need to find out how many boxes of chocolates you'll have after packing
// the bars.
// Problem Statement:
// Create a function that counts how many boxes you need based on the total number of
// chocolate bars and the number of chocolate bars per box, using a loop.

function countChocolateBoxes(totalBars, barsPerBox) {
    let boxes = 0;
    for (let i = 0; i < totalBars; i++ ) {
        totalBars -= barsPerBox;
    }
    return boxes;
}

// // Challenge 4: You're preparing for a picnic and need to fill several water bottles. Each bottle requires a
// different amount of water, but you're going to fill them one by one. How do you track the
// amount of water you're adding to each bottle?
// Problem Statement:
// Create a function that takes an array of water amounts (in liters) for each bottle and adds them
// up. The function should return the total amount of water you've filled in all the bottles.

function totalWater(waterAmounts) {
  let liter = 0;
  for(let i=0;i<waterAmounts.length;i++){
    liter += waterAmounts[i];
  }
  return liter;
}

// Challenge 5: You're tracking the number of steps you take during a workout. Each time you take a step, you
// want to count it. You keep stepping until you've reached a certain number of steps.
// Problem Statement:
// Create a function that uses a loop to count the number of steps during a workout. The loop
// should continue until you reach the target step count.

function countSteps(targetSteps) {
    let steps = 0;
    for(let i = 0;i<targetSteps;i++) {
        steps++;
    }
    return steps;   
}

// // Challenge 7: You have multiple levels of stars to count. Each level contains a certain number of stars. How
// many total stars are there?
// Problem Statement:
// Create a function that takes an array of arrays (representing the number of stars in each level)
// and returns the total number of stars. 

function totalStars(starLevels) {
  let total = 0;
  for( let i = 0;i<starLevels.length;i++){
    total += starLevels[i].length;
  }
  return total;
}


// // Challenge 8: You're shopping for groceries and want to know the total cost of all the items in your cart. You
// have an array of item prices.
// Problem Statement:
// Create a function that takes an array of item prices and returns the total cost.

function totalPrice(prices) {
 let total = 0;
 for(let i =0;i<prices.length;i++){
  total += prices[i];
 }
 return total;
}
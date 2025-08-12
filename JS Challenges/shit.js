let myArray = [1,2,3,4,5]

function sumFac(myArray){
    let sum=0;
    for(let i=0;i<5;i++){
        sum = sum + myArray[i];
    }
    return sum;
}
let result = sumFac(myArray);
console.log (result);
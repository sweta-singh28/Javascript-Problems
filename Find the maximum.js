// Write function that takes array of numbers and returns the maximum number in the array

function findMaxNumber(array){
    if(array.length === 0) {
        return null;
    }

let max = array[0];

for( let i = 1; i < array.length; i++){
if(array[i] > max){
    max = array[i];
      }
   }
   return max;
}


let numbers = [1, 4, 5, 8, 10, 11];
let maxNumber = findMaxNumber(numbers);
console.log("The maximum number is ", maxNumber);
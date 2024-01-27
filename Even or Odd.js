//Write a function that determines if a given number is even or odd

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

console.log(isEvenOrOdd(7));
//Compute the factorial of a number

function factoraialOfaNumber(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factoraialOfaNumber(4));
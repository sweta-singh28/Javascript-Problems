//Reverse a string


//Using built-in js method
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));


//Using loop
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


console.log(reverseString("hello")); 

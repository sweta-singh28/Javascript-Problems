var name = prompt("Enter your name: ");

//isolate the first character
var firstChar = name.slice(0,1);

//turn thr first char to upper case
var firstUppercase = firstChar.toUpperCase();

//isolate rest of the name
var restChar = name.slice(1,10);

//concatenate the firstchar and restchar
alert(firstUppercase + restChar);

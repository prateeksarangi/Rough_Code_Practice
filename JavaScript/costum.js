"use strict";

console.log("Hello World!!");

var i = 9, j = 8;
console.log(i + j);
//Block test
{
    let i = 5;
    var j = 10;
}
console.log(i+j);

//Prompt test
var a = prompt("Enter you name:- ", "Dr Strange");
console.log(a);

//Function call
function Sum(i = 4, j = 9){
    console.log("Hello Chrome");
    var k = i**j;
    console.log("The value of k is " + k + " inside function.");
    return k;
}

var k;
k = Sum(5, 10);
console.log("The value of k is " + k + " outside function.");

var a = 12, b = 8;

//Bitwise operator
console.log(a & b);

//typeof uses
var a = 1001;
console.log(typeof(a));

var b = "Hello";
console.log(typeof b);
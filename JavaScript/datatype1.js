"use strict";

//Regular expression
var re = /(\w+)\s(\w+)/;
var str = "Prateek Sarangi";
var result = str.replace(re, '$2, $1');
console.log(result);

//Array
var ar = [1, 2, 3, 4];
console.log(ar);
for(var i = 0; i < ar.length; i++){
    console.log(ar[i]);
}
//OR
var arr = new Array(100);
for(var i = 0; i < arr.length; i++){
    arr[i] = i**2;
}
arr.push("Hello World");
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr.findIndex((x) => x ==9801));
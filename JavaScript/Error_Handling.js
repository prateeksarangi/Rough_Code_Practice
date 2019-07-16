"use strict"

var num1 = 9;
var num2 = 2;

try{
    if(num2 === 0){
        throw("Not possible");
    }

    else{
        console.log(num1/num2);
    }
}

catch(error){
    console.log(error);
}

finally{
    console.log("This code is immortal");
}
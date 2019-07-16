"use strict"

function ValidationFunc(){
    console.log("It is working");
    var v = document.Form.Username.value;

    console.log(v);
    if(v === "")
        console.log("Empty block");
    else
        console.log("Filled successfully");
}
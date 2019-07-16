"use strict"

class Car{
    constructor(x, y){
        console.log(x+y);
        console.log("This is the constructor");

        this.x = x;
        this.y = y;
    }

    ClassFunction() {
        console.log("I am in ClassFunction");
    }

    static StsticFun(){
        console.log("I am in StaticFun");
    }
}

var obj = new Car(3, 8);
console.log("Value of x " + obj.x);
console.log("Value of y " + obj.y);

obj.ClassFunction();
//Car.ClassFunction(); Doesn't work
Car.StsticFun();

var valid = obj instanceof Car;
console.log(valid);
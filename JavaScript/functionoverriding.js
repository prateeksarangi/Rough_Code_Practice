"use strict"

class Vehicle{
    constructor(x, y){
        console.log(x+y);
        console.log("This is the constructor");

        this.x = x;
        this.y = y;
    }

    VehicleFun(){
        console.log("In the vehicle class");
    }
}

class Car extends Vehicle{
    ClassFunction() {
        console.log("I am in ClassFunction");
    }

    static StsticFun(){
        console.log("I am in StaticFun");
    }

    VehicleFun(){
        super.VehicleFun();
        console.log("In class Car Ha Ha!!");
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

var obj1 = new Car(4, 6);
console.log(obj1.VehicleFun());
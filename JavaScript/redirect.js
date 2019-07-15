function Redirect(){
    window.location = "https://www.google.com/";
}

function Click(){
    //alert("Stop it buddy!!");
    var val = confirm("Are you Batman?");
    console.log(val);
    if(val == true){
        console.log("Hello Batman");
    }

    else{
        console.log("Hello Ironman");
    }
}

void function voidFunc(){
    console.log("Hello!!");
}();

//voidFunc();


function Print(){
    window.print();
}
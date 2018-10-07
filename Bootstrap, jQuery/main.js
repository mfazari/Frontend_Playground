//Variables
var x = document.querySelector("#numero1").value;
var y = document.querySelector("#numero2").value;
var currentoperator;
var output;




//Checks numbers and prints out result
function submitFunction() {

    //document.querySelector("#numero2").value = "42";

    if(isNaN(x) || isNaN(y)  ) {
        document.querySelector("#output").innerHTML = "Invalid input";

    }
    else if(currentoperator == null){
        document.querySelector("#output").innerHTML = "Click on operator before submitting";

    }
    else {
        document.querySelector("#output").innerHTML = output;

    }

}

function Calc(operator){
    currentoperator = operator;
    if(operator == "+"){
        output = document.querySelector("#numero1").value + document.querySelector("#numero2").value;
    }
    else if(operator == "-"){
        output = document.querySelector("#numero1").value - document.querySelector("#numero2").value;
    }
    else if(operator == "/"){
        output = document.querySelector("#numero1").value * document.querySelector("#numero2").value;

    }
    else if(operator == "/"){
        output = document.querySelector("#numero1").value / document.querySelector("#numero2").value;
    }

    else{
        //donothing

    }

}

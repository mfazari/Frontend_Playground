//jQuery
//$(document).ready(function () {
$(function(){
    //Variables
    var currentOperator;
    var output;
    var x;
    var y;

    $(document).on('submit', '#my-form', function () {


        x = $("#numero1").val();
        y = $("#numero2").val();
        output = $("#output").val();


        if (isNaN(x) || isNaN(y)) {
            document.querySelector("#output").innerHTML = "Invalid input";

        }
        else if (currentOperator == null) {
            document.querySelector("#output").innerHTML = "Click on operator before submitting";

        }
        else {
            Calc(currentOperator);
            document.querySelector("#output").innerHTML = output;

        }
        //Console
        console.log(output);

        //stops page from reloading
        return false;
    });


    // Set operator

    //+
    $("#plus").click(function(){

    currentOperator = "+";
    console.log("Operator Set on " + currentOperator)
    });

    //-
    $("#minus").click(function(){

    currentOperator = "-";
    console.log("Operator Set on " + currentOperator)
    });

    //*
    $("#multiply").click(function(){

    currentOperator = "*";
    console.log("Operator Set on " + currentOperator)
    });

    // /
    $("#divide").click(function(){

    currentOperator = "/";
    console.log("Operator Set on " + currentOperator)

    });



// Calculates Result
function Calc(operator) {
    if (operator === "+") {
        //parseInt because else it converts to String
        output = parseInt(x, 10) + parseInt(y, 10);
    }
    else if (operator === "-") {
        output = x - y;
    }
    else if (operator === "/") {
        output = x / y;

    }
    else if (operator === "*") {
        output = x * y;

    }
}

});
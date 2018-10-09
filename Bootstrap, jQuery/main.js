//Variables
var x = $("#numero1").val();
var y = $("#numero2").val();
var output = $("#output").val();
var currentoperator;


//Checks numbers and prints out result
$(document).ready(function () {
    $(document).on('submit', '#my-form', function () {

        if (isNaN(x) || isNaN(y)) {
            document.querySelector("#output").innerHTML = "Invalid input";

        }
        else if (currentoperator == null) {
            document.querySelector("#output").innerHTML = "Click on operator before submitting";

        }
        else {
            Calc(currentoperator);

        }
        //Console
        console.log(output);

        //stops page from reloading
        return false;
    });
});

function setOperator(operator) {

    currentoperator = operator;


};


function Calc(operator) {
    currentoperator = operator;
    if (operator === "+") {
        output = x + y;
    }
    else if (operator === "-") {
        output = x - y;
    }
    else if (operator === "/") {
        output = x / y;

    }
    else if (operator === "*") {
        output = x * y;

    else
        {
            //donothing

        }
        //Console
        console.log(currentoperator);

    }
}

//Variables
let currentOperator;
let output;
let x;
let y;


//Checks numbers and prints out result
$(document).ready(function () {
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
});

function setOperator(operator) {

    currentOperator = operator;
    console.log("Operator Set on " + operator)

};


function Calc(operator) {
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

    }
}

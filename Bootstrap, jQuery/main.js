//Variables
let currentOperator;
let output;


//Checks numbers and prints out result
$(document).ready(function () {
    $(document).on('submit', '#my-form', function () {


        let x = $("#numero1").val();
        let y = $("#numero2").val();
        output = $("#output").val();


        if (isNaN(x) || isNaN(y)) {
            document.querySelector("#output").innerHTML = "Invalid input";

        }
        else if (currentOperator == null) {
            document.querySelector("#output").innerHTML = "Click on operator before submitting";

        }
        else {
            Calc(currentOperator);

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
    //Console
    console.log(currentOperator);
}

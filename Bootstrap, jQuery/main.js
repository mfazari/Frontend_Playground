//Variables
var x = document.querySelector("#numero1").value;
var y = document.querySelector("#numero2").value;
var output;




function myFunction() {

    //document.querySelector("#numero2").value = "42";

    if(isNaN(x || y) || x.length < 1 || y.length < 1 ) {
        document.querySelector("#output").innerHTML = "Invalid input";

    }
}

function Calc(String){


    if(isNaN(x || y) || x.length < 1 || y.length < 1 ) {
        document.querySelector("#output").innerHTML = "Invalid input";

    }
    if(String == "+"){
        x = document.querySelector("#numero2").value + document.querySelector("#numero2").value;

    }
    document.querySelector(String).value = "42";


}

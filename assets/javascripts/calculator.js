$(document).ready(function(){

//creating variables

var firstNumber="";
var isOperatorClicked=false;
var secondNumber="";
var valCalculator="";

// getting user first number

$(".number").click(function(){
        if(isOperatorClicked==false){
            var valNumber=$(this).val();
            firstNumber+= valNumber;
            $("#firstnumber").text(firstNumber);
        }

});

//Set the HTML of the #operator to the text of what was clicked
$(".operator").click(function(){

valCalculator=$(this).val();    
$("#operator").text($(this).text());   // dont forget to put parenthesis infront of text-text()
isOperatorClicked=true;
});

//Set the HTML of the .number to the text of what was clicked

$(".number").click(function(){
        if (isOperatorClicked==true){             //isOperatorClicked variable helps to set the html of the firstnumber , operator and secondnumber in order.
            var valNumber1=$(this).val();
            secondNumber+= valNumber1;
            $("#secondnumber").text(secondNumber);
        }
   

});

$("#equal").click(function(){
    $("#equalsign").text($(this).text());
    switch(valCalculator){

        case "plus":
            $("#result").text(parseInt(firstNumber)+parseInt(secondNumber));
        break;
        case "minus":
            $("#result").text(parseInt(firstNumber)-parseInt(secondNumber));
        break;
        case "times":
            $("#result").text(parseInt(firstNumber)*parseInt(secondNumber));
        break;
        case "divide":
            $("#result").text(parseInt(firstNumber)/parseInt(secondNumber));
        break;
    
    }


});



});




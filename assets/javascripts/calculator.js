$(document).ready(function(){

//creating variables

var firstNumber="";
var isOperatorClicked=false;
var secondNumber="";
var valCalculator="";
var isCalculated=false;

// getting user first number

$(".number").click(function(){
          if(isCalculated){
              return false;
          }

          if( isOperatorClicked){
              return false;
          }

        else {
            var valNumber=$(this).val();
            firstNumber+= valNumber;
            $("#firstnumber").text(firstNumber);
            console.log(parseInt(firstNumber));
        }

});

//Set the HTML of the #operator to the text of what was clicked
$(".operator").click(function(){
    if(!firstNumber || isCalculated){
        return false;
    }
   else {
    valCalculator=$(this).val();    
    $("#operator").text($(this).text());   // dont forget to put parenthesis infront of text-text()
    isOperatorClicked=true;
   
   }
});


//Set the HTML of the .number to the text of what was clicked

$(".number").click(function(){
        if (isOperatorClicked==true && !isCalculated){             //isOperatorClicked variable helps to set the html of the firstnumber , operator and secondnumber in order.
            var valNumber1=$(this).val();
            secondNumber+= valNumber1;
            $("#secondnumber").text(secondNumber);
        }

});

$("#equal").click(function(){

    if(!secondNumber || isCalculated){
        return false;
    }
    else{
        isCalculated=true;
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

        case "power":
        $("#result").text(Math.pow(parseInt(firstNumber), parseInt(secondNumber)));
        console.log(Math.pow(parseInt(firstNumber), parseInt(secondNumber)));
        break;
    }
    }

    $("#clear").click(function(){
        $("#firstnumber").text("");
        $("#secondnumber").text("");
        $("#operator").text("")
        $("#equalsign").text("");
        $("#result").text(""); 
        firstNumber="";
        isOperatorClicked=false;
        isCalculated=false;
        secondNumber="";
        valCalculator="";       

    });


});



});




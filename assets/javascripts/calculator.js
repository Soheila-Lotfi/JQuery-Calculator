$(document).ready(function(){

//creating variables

var firstNumber="";
var isOperatorClicked=false;
var secondNumber="";
var valCalculator="";
var isCalculated=false;           // we use this varaible to make sure whenever the calculation is done, the  use cant enter new number till he pressed clear button to restart the calculator.

// getting user first number


$(".number").click(function(){
          if(isCalculated){
              return false;                    // the function doesnot run when we use return false 
          }

          if( isOperatorClicked){
              return false;
          }

        else {
            var thisVal=$(this).val();
            var currentVal=$("#firstnumber").text();
        
            if (currentVal==="0"){
                firstNumber=thisVal;
            }
            else{
                firstNumber=currentVal+thisVal;
            }
          $("#firstnumber").text(firstNumber);
       
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
            var thisVal=$(this).val();
            var currentVal=$("#secondnumber").text();
             if (currentVal === "0"){
                 secondNumber=thisVal;
             }
             else{
                 secondNumber=currentVal+thisVal;
             }
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
            $("#result").text(parseInt(firstNumber)+parseInt(secondNumber)); //use parseInt to convert string to number
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
        console.log(Math.pow(parseInt(firstNumber), parseInt(secondNumber)));   //use Math.pow to do ^
        break;
    }
    }

    $("#clear").click(function(){
        // $("#firstnumber").text("");
        // $("#secondnumber").text("");
        // $("#operator").text("")
        // $("#equalsign").text("");
        // $("#result").text(""); 

        $("#firstnumber, #secondnumber, #operator, #equalsign,#result").empty();  //use empty method to emty the elements
        firstNumber="";
        isOperatorClicked=false;
        isCalculated=false;
        secondNumber="";
        valCalculator="";       

    });


});



});




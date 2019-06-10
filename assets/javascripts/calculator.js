$(document).ready(function(){

//creating variables

var firstNumber="";


// getting user first number

$(".number").click(function(){

    var valNumber=$(this).val();
    firstNumber+= valNumber;
    $("#firstnumber").text(firstNumber);


});

$(".operator").click(function(){

var valCalculator=$(this).text();    // dont forget to put parenthesis infront of text-text()
$("#operator").text(valCalculator);




})


});




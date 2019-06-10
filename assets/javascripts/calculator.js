$(document).ready(function(){

//creating variables

var firstNumber="";


// getting user input

$(".number").click(function(){

    var valNumber=$(this).val();
    firstNumber+= valNumber;
    $("#firstnumber").text(firstNumber);


})



});




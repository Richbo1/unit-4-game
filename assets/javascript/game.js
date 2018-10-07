

var rNum =  Math.floor(Math.random() * 101) + 20;
console.log(rNum) 
var yourNum = 0;
parseInt(yourNum)
var wins=0;
console.log(wins)
var losses=0;
console.log(losses)

var crystals = ["crystal1","crystal2","crystal3","crystal4",]


//DECALRES the random number variable
function RndNum() {
div1 = $("#randomNumber")
div1.text("Random Number: "+rNum)
}

function generateNumber(){
    $("#crystaldiv").empty()
    for(i=0;i<crystals.length;i++){
        var cstNum = Math.floor(Math.random() * 12) + 1;
        crystal=$("<div>");
        
        crystal.addClass("crystal");
        crystal.attr("id",crystals[i])
        crystal.attr("data-myval",cstNum)
        console.log(cstNum)
        $("#crystaldiv").append(crystal)
    }
}

$(document).on('click',".crystal", function(){

a = $(this).attr('data-myval')
parseInt(yourNum)
yourNum =yourNum +parseInt(a)
console.log(yourNum)
$("#yourNum").empty()
$("#yourNum").append("count: "+yourNum)

if(yourNum==rNum){
    alert("you win")
    wins++
    toString(wins)
    console.log(wins)
    $("#wins").empty()
    $("#wins").append("Wins: "+wins)

    rNum =  Math.floor(Math.random() * 101) + 20;
    yourNum = 0;
    $("#yourNum")
    $("#yourNum").html("Count: 0")
    generateNumber()
    RndNum()
}
else if(yourNum>rNum){
    alert("you lose")
    losses++
    toString(losses)
    console.log(losses)
    $("#losses").empty()
    $("#losses").append("Losses: "+losses)

    rNum =  Math.floor(Math.random() * 101) + 20;
    yourNum = 0;
    $("#yourNum").empty
    $("#yourNum").html("Count: 0")
    generateNumber()
    RndNum()
}
});





generateNumber()
RndNum()
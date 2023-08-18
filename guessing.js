var numOfWon=0;
var numOfLost=0;
for(var i=1; i<=5; i++){
    var guessNumber= parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber= Math.floor(Math.random() * 6)+1;
    if(guessNumber==randomNumber){
        numOfWon++;
        console.log("you have won");
    }else{
        console.log("You have lost. Random number was : " + randomNumber);
        numOfLost++;
    } 
}
document.write("Number of Won = " + numOfWon + "<br>");
document.write("Number of Lost = " + numOfLost);

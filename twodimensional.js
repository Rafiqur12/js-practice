
function highestScorer(playersInfo) {
    

    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    for (var x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]) {
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }

    }
    return highestScorer;
}
var playersInfo = [["Rafiqur", 95], ["Rahman", 30], ["Ra", 36], ["Rahm", 40], ["Rah", 50]];

console.log(playersInfo);
var name = highestScorer(playersInfo);
console.log("Highest Score is : " + name);
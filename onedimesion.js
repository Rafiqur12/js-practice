console.clear();
function highestScore(scores){
var max= scores[0];
for(var x=1; x<scores.length;x++)
if(max<scores[x]){
    max=scores[x];
}
return max;
}
let scores=[23,24,2,44,27];
var maxScore = highestScore(scores);
console.log(maxScore);
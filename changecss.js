// Changes CSS Style 

// var myVar = document.querySelector("#paraId");
// function addStyle(){
//     // var myVar = document.querySelector("#paraId");
//     // myVar.style.color="red";
//     // myVar.style.fontSize="3rem";
//     myVar.classList.add("para-style");
// }
// function removeStyle(){
//     // var myVar = document.querySelector("#paraId");
//     // myVar.style.color="red";
//     // myVar.style.fontSize="3rem";
//     myVar.classList.remove("para-style");
// }

// Event Listener
document.querySelector("button").addEventListener("click",myFunction);

function myFunction(){
    alert("Hello");
}

// or 
var myVar=document.querySelector("p");
myVar.addEventListener("mouseover",function(){
    myVar.classList.add("my-style");
})
myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("my-style");
})
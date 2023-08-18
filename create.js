// adding and connecting new Element in html 
var heading3=document.createElement("h1");
var text=document.createTextNode("I am Rafiqur");
heading3.appendChild(text);
var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

// Removing Element 
var heading2=document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);
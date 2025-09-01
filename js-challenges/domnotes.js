// Node COllection , HTML Collection and Array are diffrent

document.getElementById("btn") 
// Extracts info from that particular id 
document.getElementsByClassName("btn").span
// Extracts info from that particular class and dot helps to extract infro from that attribute(not for all atributes)
document.getElementsById("btn").getAttribute("class") 
// Helps to extract data from a particular attribute
document.getElementsById("btn").setAttribute("class", "value for that attribute")
// Helps to set data into a particular attribute, always overrides if conent present beforehand
document.getElementsById("btn").style.backgroundcolor = "red";
// going into deep layer step by step
document.getElementsById("btn").textContent  
document.getElementsById("btn").innerText  
document.getElementsById("btn").innerHTML
// Difference btw textcontent and innerText
// textcontent shows full content whether it is hidden according to property
// innerText shows only visible HTML page contents
// innerHTML shows full HTML code
document.querySelector("uses css selector")
example : document.querySelector("#heading") /*# for id and . for class*/ 
example : document.querySelector(".class1") 


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

// In array you can directly add property but in node list you have to specify index everytime
const myH1 = document.querySelectorAll("h1")
myH1[0].style.color = "red" /*this will as we have specified index and this is nodelist*/
myH1.style.color = "red" /*if this was array, this is fine but bcoz it is nodelist this will show error*/

// HTML collection is also different it dont have basic array properties also like foreach

// Coverting nodelist or htmlcollection in array
const class1 = document.getElementsByClassName("class1")
Array.from(class1) /*now this converted into array*/

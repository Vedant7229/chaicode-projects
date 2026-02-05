function changeFontColor (color){
    const changeColor = document.querySelector("h1")
    changeColor.style.color = (color) 
}
function colorChange(){

    document.getElementById("btn-red").addEventListener("click", function(){ changeFontColor("rgba(249, 75, 75, 0.664)")})
    document.getElementById("btn-green").addEventListener("click", function(){ changeFontColor("rgb(23, 122, 20)")})
    document.getElementById("btn-blue").addEventListener("click", function(){ changeFontColor("rgba(47, 92, 241, 0.925)")})
    document.getElementById("btn-purple").addEventListener("click", function(){ changeFontColor("rgb(111, 54, 202)")})
    document.getElementById("btn-reset").addEventListener("click", function(){ changeFontColor("rgb(67, 61, 61)")})
    
    
}
colorChange();      


    function changeBackgroundColor(color){
        const myBackgroundColor = document.getElementsByTagName("body")[0];
        // myBackgroundColor.style.backgroundColor = color;
        
    }
    
    function changeFontColor(color){
        const myFontColor = document.body;
        // myFontColor.style.color = color;
    }
    function onBulb(){
        const onBulb = document.getElementById("bulbOn")
        onBulb.style.backgroundColor = "#EEBC0F"
        onBulb.style.boxShadow = "0 0 30px 15px rgba(240, 205, 11,0.4)"
        myBackgroundColor.style.backgroundColor = "#2C2C2C"
        myFontColor.style.color = "white"
    }

    function offBulb(){
      const bulb = document.getElementById("bulbOn");
      bulb.style.backgroundColor = "gray";
      bulb.style.boxShadow = "none"; 
      myBackgroundColor.style.backgroundColor = "white"
      myFontColor.style.color = "black"
    }
    

    function changeButton(){
        const changeButton = document.getElementById("mainButton")
        mainButton.addEventListener("click", function(){
          if (mainButton.innerText === "Turn On"){
            mainButton.innerText = "Turn Off"    
            onBulb();
        }  
          else
            {
            mainButton.innerText = "Turn On"
                offBulb();
        }
        })

    }

    
    const mainButton = document.getElementById("mainButton")
    mainButton.addEventListener("click", function(){
        // changeBackgroundColor("#2C2C2C");
        // changeFontColor("white");
        changeButton()
        // onBulb()
        // offBulb()
    })

 
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
screenValue = "0";
    for(item of buttons){
        item.addEventListener("click", (e)=>{
            buttonText = e.target.innerText;
            if(buttonText == "X"){
                buttonText = "*";
                screen.value +=  buttonText;
            }
            else if(buttonText = "C"){
                screen.value = "";
            }
        })
    }
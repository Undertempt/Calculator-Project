const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

for(let i=0; i<buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button"); //creates new button in memory for each i 
    button.innerText = value; //sets the visible label for the button to the value of i

    //styling the 0 button differently from the others
    if(value == "0"){
        //ensures the 0 button is more than twice as large as other buttons
        //0 button is more than twice as large as the other (80+80=160) in order to account for the space in between each button 
        button.style.width = "200px";
        //makes it so the 0 button has a span length 2 tiems as long as the others
        button.style.gridColumn = "span 2";
    }
    //changes the color of the button if it is a button included in the rightSymbols array
    //the value parameter within the if statement checks to see if the current value is within the array
    if (rightSymbols.includes(value)){
        button.style.backgroundColor = "#FF9500";

    }
    //changes the background color and color of the text within the button if it is in the topSymbols array
    //the value parameter within the if statement checks to see if the current value is within the array
    else if(topSymbols.includes(value)){
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    //adds the button to the calculator
    document.getElementById("buttons").appendChild(button);
}


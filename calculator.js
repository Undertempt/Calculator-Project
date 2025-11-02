const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

//Connects display referenced in this js file to the actual display created in the index file
const display = document.getElementById("display");

//sets default values for A+B, A*B, A-B, A/B
let A = 0;
let operator = null;
let B = null;

//Function used to clear the screen
function clearAll(){
    A = 0;
    operator = null;
    B = null;
}
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

    //Processes a function if a click occurs
    button.addEventListener("click", function(){
        //creates functionality for symbols within the rightSymbols array
        if(rightSymbols.includes(value)){
            //Here is where the calculator is told what to do for what operator
            if(value == "="){
                //checks to ensure A has a value
                if(A != null){
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if(operator == "÷"){
                        display.value = numA/numB;
                    }
                    else if(operator == "×"){
                        display.value = numA*numB;
                    }
                    else if(operator == "-"){
                        display.value = numA-numB;
                    }
                    else if(operator == "+"){
                        display.value = numA+numB;
                    }
                    clearAll();
                }

            }
            else{
                operator = value;
                A = display.value;
                display.value = "";
            }
        }
        //creates functionality for symbols within the topSymbols array
        else if(topSymbols.includes(value)){
            //refers to the function above to clear the display
            if (value == "AC"){
                clearAll();
                display.value = "";
            }
            else if (value == "+/-"){
                if(display.value != "" && display.value != "0"){
                    //checks for a "-" at space 0 and slices the existing - off iof the +/- button is pressed
                    if(display.value[0] == "-"){
                        display.value = display.value.slice(1);
                    }
                    //if no - is present and the button is clicked, it adds a - to the beginning of the value
                    else{
                        display.value = "-" + display.value;
                    }
                }
            }
            else if (value == "%"){
                display.value = Number(display.value)/100;
            }
        }
        //creates functionality for symbols not within either array, which includes numbers or "."
        else{
            if(value == "."){
                //Checks to ensure a "." is not already on the display
                if(!display.value.includes(value)){
                    display.value += value;
                }
            }
            //Having 0s at the beginning of a # is pointless, this fixes that issue
            else if(display.value == "0"){
                display.value = value;
            }
            //Adds #s that are clicked to the display
            else{
                display.value += value;
            }
        }
    });

    //adds the button to the calculator
    document.getElementById("buttons").appendChild(button);
}


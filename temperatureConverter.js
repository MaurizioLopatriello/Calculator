//temperature converter
const displayTemp = document.getElementById("displayTemp");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let click = true;
let temp;


toFahrenheit.addEventListener("click", (event) => {
    toFahrenheit.checked = click;
    click = !click;
});

toCelsius.addEventListener("click",(event) =>{
    toCelsius.checked =click;
    click = !click;
});


function convert(){

    if(toFahrenheit.checked){
        temp = Number(displayTemp.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F°";
    }
    else if(toCelsius.checked){
        temp = Number(displayTemp.value);
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1) + "C°";
    }
    else{
        result.textContent = "Select a unit ";
    }
}
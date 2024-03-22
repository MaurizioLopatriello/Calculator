
//spread operator
let numbers = [1,2,3,4,5];
let newNumbers = [...numbers];
let maximum = Math.max(...numbers);
//console.log(maximum);
//console.log(newNumbers);

//rest operator

function openFridge(...foods){
    //console.log(foods);
}
let food1 = "a";
let food2 = "b";
let food3 = "c";
let food4 = "d";
let food5 = "e";

openFridge(food1,food2,food3,food4,food5);

//DiceRoller
function rollDice(){

    const inputDice = document.getElementById("inputDice").value;
    const resultDice = document.getElementById("resultDice");
    const diceImage = document.getElementById("diceImage");
    const values =[];
    const image = [];

        for( i=0; i < inputDice; i++){
        const value = Math.floor(Math.random()*6)+1;
            values.push(value);
            image.push(`<img src = "dice.png/${value}.png">`);
        }
        resultDice.textContent = `${values.join(', ')}`;
        diceImage.innerHTML = image.join(' ,');
}






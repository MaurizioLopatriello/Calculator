//number guesser
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum - minNum +1) + minNum);

let attempts = 0;
let guess;
let running = true;

let showNum = document.getElementById("showNun");
let textNun = document.getElementById("myH1");

showNum.onclick = function(){
    //console.log(typeof answer)
    textNun.innerHTML = `${answer}`;
}

function isEven(number){
    return number % 2 == 0 ? true : false;
}

//console.log(answer);
//console.log(isEven(answer));

while(running){
   guess =  window.prompt(`Take a guess between ${minNum} and ${maxNum}`)
   
   if(guess === null){
    running = false
   
    }else{

        if(isNaN(guess)) {
            window.alert("Insert a number")

        }else if(guess < minNum || guess > maxNum){
            window.alert("Between 1 and 100 dumb!")
        
        }else{
            attempts++
            
            if(guess >= minNum && guess < answer){
                window.alert("Too low ! Try again")
            
            }else if(guess <= maxNum && guess > answer){
                window.alert("Too high ! Try again")

            }else{
                window.alert(`Congrats! The number was ${answer} and you needed ${attempts} attempts`)
                running = false
            }
        }
    }
}
const lowerBtn = document.getElementById("toLowercase");
const upperBtn = document.getElementById("toUpperCase");
const numberBtn = document.getElementById("addnumbers");
const symbolBtn = document.getElementById("addSymbols");
var numberChars = document.getElementById("numberChars");
const passwordTxt = document.getElementById("passwordH1");


function generatePassword(){

    const includeLowerCase = "abcdefghilmnopqrstuvzwyjkx"
    const includeupperCase = "ABCDEFGHILMNOPQRSTUVZWYJKX"
    const includeNumbers = "1234567890"
    const includeSymbols ="!£$%&/()=?-_@+*"

    let allowChars = "";
    let password = "";

    allowChars += lowerBtn.checked ? includeLowerCase : ""; 
    allowChars += upperBtn.checked ? includeupperCase : ""; 
    allowChars += numberBtn.checked ? includeNumbers  : ""; 
    allowChars += symbolBtn.checked ? includeSymbols : ""; 
    
    
    if(numberChars.value <= 0){
        window.alert("Password length must be at least 1 ");
    }
    if(allowChars.length === 0){
        window.alert("At least 1 set of character need to be selected");
    }
    numberChars.value = Number(numberChars.value);
    for(i = 0; i < numberChars.value; i++){
        const randomNumbers = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomNumbers];  
    }
    passwordTxt.textContent = password;
     
}

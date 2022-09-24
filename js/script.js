const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let pwFieldOne = document.querySelector("#password-one")
let pwFieldTwo = document.querySelector("#password-two")

let randomNumberOne
let randomNumberTwo

let newPasswordOne = ""
let newPasswordTwo = ""

function generatePassword(){

    let passwordLength = document.querySelector("#length-input").value

    newPasswordOne = ""
    newPasswordTwo = ""
    
    
    for (let i = 0; i < passwordLength; i++) {
        randomNumberOne = Math.floor(Math.random() * characters.length)
        randomNumberTwo = Math.floor(Math.random() * characters.length)

        newPasswordOne += characters[randomNumberOne]
        newPasswordTwo += characters[randomNumberTwo]

    }
    
    pwFieldOne.textContent = newPasswordOne
    pwFieldTwo.textContent = newPasswordTwo
}
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let mainBtn = document.getElementById("btn")
function pass(){
    let password1=""
    let password2=""
    for(let i=0;i<8;i++){
        const ans = Math.floor(Math.random()*characters.length)
        password1 += characters[ans]
    }
    for(let i=0;i<8;i++){
        const ans = Math.floor(Math.random()*characters.length)
        password2 += characters[ans]
    }
    document.getElementById("first").textContent = password1;
    document.getElementById("second").textContent = password2;
    
}

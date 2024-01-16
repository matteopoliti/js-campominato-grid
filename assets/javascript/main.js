/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const grigliaHtml = document.getElementById('griglia');
const buttonHtml = document.getElementById('button');
const difficultyHtml = document.getElementById('difficulty');


buttonHtml.addEventListener("click", function (){
    document.querySelector(".d_none").classList.remove("d_none")
    if(difficultyHtml.value == "Beginner"){

        for (let i = 1; i <= 100; i++) {
            
            createBox("box-beginner", i)
        
        }
    }else if(difficultyHtml.value == "Standard"){
        
        for (let i = 1; i <= 81; i++) {
            
            createBox("box-standard", i)
        
        }
    }else if(difficultyHtml.value == "Hard"){
        
        for (let i = 1; i <= 49; i++) {
            
            createBox("box-hard", i)
        
        }
    }
})

function createBox(boxClass, index) {
    let box = document.createElement("div");
    box.classList.add(boxClass);
    box.innerHTML = `<span>${index}</span>`;
    
    box.addEventListener("click", function () {
        this.classList.toggle("blue");
        console.log(index);
    });

    grigliaHtml.append(box);
}
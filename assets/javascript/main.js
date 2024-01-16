/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const grigliaHtml = document.getElementById('griglia');
const buttonHtml = document.getElementById('button');


buttonHtml.addEventListener("click", function (){
    document.querySelector(".container").classList.remove("d_none")
})
for (let i = 1; i <= 100; i++) {
    
    let box = document.createElement("div")

    box.classList.add("box")

    box.innerHTML = `<span>${i}</span>`

    box.addEventListener("click", function () {
    

        this.classList.toggle("blue")
        console.log(i)

    })

    grigliaHtml.append(box)

}

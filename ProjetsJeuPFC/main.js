
let gagner = 0;
let perdu = 0;
const choix = ["Pierre","Feuille","Ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const Pierre = document.getElementById("Pierre");
const Feuille = document.getElementById("Feuille");
const Ciseaux = document.getElementById("Ciseaux");
function runGame(userChoice){
    const choixOrdinateur = choix[Math.floor(Math.random() * choix.length)]
    switch(userChoice + "-" + choixOrdinateur){
        case "Pierre-Feuille":
        case "Feuille-Ciseaux":
        case "Ciseaux-Pierre":
            perdu +=1;
            gameStatus.innerHTML= `Moi: ${userChoice} | C: ${choixOrdinateur} -> C a gagner `
            break;
    
        case "Pierre-Ciseaux":
        case "Feuille-Pierre":
        case "Ciseaux-Feuille":
            gagner +=1;
            gameStatus.innerHTML= `Moi: ${userChoice} | C: ${choixOrdinateur} -> Moi a gagner `
            break;
        case "Pierre-Pierre":
        case "Feuille-Feuille":
        case "Ciseaux-Ciseaux":
            //on n'a pas besoin d'accrémenter vue que y'a une egalité ici//
            gameStatus.innerHTML= `Moi: ${userChoice} | C: ${choixOrdinateur} -> Egaliter `
            break;
        
    }
    gameScore.innerHTML = `Moi ${gagner} | ${perdu}`;
}


Pierre.addEventListener("click",()=>runGame("Pierre"));
Feuille.addEventListener("click",()=>runGame("Feuille"));
Ciseaux.addEventListener("click",()=>runGame("Ciseaux"));

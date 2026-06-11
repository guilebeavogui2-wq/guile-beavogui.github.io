let Valeur = 0
let varTitre = document.querySelector(".titre")
let boutonplus = document.querySelector(".btnplus")
let boutonMoins = document.querySelector(".btnMoins")
let boutonAnnules= document.querySelector(".btnAnnules")

boutonplus.addEventListener("click", function(){
Valeur = Valeur+1
varTitre.textContent = Valeur
});
boutonMoins.addEventListener("click", function(){
Valeur = Valeur-1
varTitre.textContent = Valeur
});
boutonAnnules.addEventListener("click", function(){
Valeur = Valeur*0
varTitre.textContent = Valeur
});

const r = document.getElementById("resultado");

if(game.getResult()) {
    r.innerHTML = "Aprovado"
    console.log(game.replys);
} else {
    r.innerHTML = "Reprovado"
    console.log(game.replys);
}
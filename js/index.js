// instanciando classe quiz Quiz.js
const game = new Quiz();

/* 
adiciona atributo data-number nos elementos p de cada alternativa

ex.: data-number="1"
*/

//obter elemento question pelo id;
const question = document.getElementById("question");
const example = document.getElementById("example");
//obter todos os elementos choice-text pelo nome da classe
const choices = Array.from(document.getElementsByClassName("choice-text"));
//obter elemento do botao avancar
const btnAvancar = document.getElementById("btn-next");

//inicia quiz
game.startQuiz();

//obtem a primeira pergunta
let cq = game.getNewQuestion();

//exibe a primeira pergunta ao carregar a pagina game.html
question.innerText = cq.question;
example.innerText = cq.example;

// evento onclick do botacao avancar
btnAvancar.addEventListener("click", () => {
    //obtem uma nova pergunta
    cq = game.getNewQuestion();
    // se a funcao getNewQuestion retornar a string FIM redireciona para a pagina result.html, caso contrario exibe a nova pergunta
    if (cq === "FIM") {
        window.location.replace("result.html");
    } else {
        question.innerText = cq.question;
        example.innerText = cq.example;
  }
});

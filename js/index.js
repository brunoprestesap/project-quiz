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

let cq = game.getNewQuestion();
question.innerText = cq.question;
example.innerText = cq.example;

btnAvancar.addEventListener("click", () => {
    console.log("cq");
  if (cq === "FIM") {
    window.location.replace("result.html");
  } else {
    cq = game.getNewQuestion();
    question.innerText = cq.question;
    example.innerText = cq.example;
  }
});

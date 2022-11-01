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
const choices = Array.from(document.getElementsByClassName("choice-container"));
//obter elemento do botao avancar
const btnAvancar = document.getElementById("btn-next");

//inicia quiz
game.startQuiz();

//obtem a primeira pergunta
let cq = game.getNewQuestion();

//exibe a primeira pergunta ao carregar a pagina game.html
question.innerText = cq.question;
example.innerText = cq.example;

// evento onclick do botao avancar
btnAvancar.addEventListener("click", () => {
    //obter todos os elementos com classe alert
  const alert = document.getElementsByClassName("alert");
    //obter todos as respostas selecionadas atras do nome da classe
  const choiceClicked = document.getElementsByClassName("choice-clicked");

    //se houve uma resposta selecionada avança pra proxima pergunta e armazena a resposta no array
  if (choiceClicked.length) {
    //armazena a reposta no array da propriedade replys da classe quiz
    game.replys.push(choiceClicked[0].children[1].innerHTML);
    //remove a classe choice-clicked do container da resposta selecionada
    choiceClicked[0].classList.remove("choice-clicked");

    //obtem uma nova pergunta
    cq = game.getNewQuestion();
    // se a funcao getNewQuestion retornar a string FIM redireciona para a pagina result.html, caso contrario exibe a nova pergunta
    if (cq === "FIM") {
        //redireciona pra pagina result
      window.location.replace("result.html");
    } else {
        // atribui a nova questao na pagina
      question.innerText = cq.question;
      example.innerText = cq.example;
      //limpa o element alert caso esteja preenchido
      alert[0].innerHTML = "";
    }
  } else {
    //emite alerta caso nao tenha selecionado uma resposta
    alert[0].innerHTML = "Você precisa selecionar uma resposta";
  }
});


// percorre todos as respostas a fim de verificar a reposta selecionada
choices.forEach((e) => {
    //evento click da resposta selecionada
  e.addEventListener("click", () => {
    //obtem a resposta selecionada
    const choiceClicked = document.getElementsByClassName("choice-clicked");

    //se houve outra resposta selecionada remove a classe choice-clicked
    if (choiceClicked.length) {
      choiceClicked[0].classList.remove("choice-clicked");
    }

    //atribui a classe choice-clicked ao novo elemento marcado
    e.classList.add("choice-clicked");
  });
});

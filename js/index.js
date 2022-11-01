// instanciando classe quiz Quiz.js
const game = new Quiz();

//obtendo elementos da página game
const question = document.getElementById("question");
const example = document.getElementById("example");
const choices = Array.from(document.getElementsByClassName("choice-container"));
const btnAvancar = document.getElementById("btn-next");
const alert = document.getElementById("alert");
const choiceClicked = document.getElementsByClassName("choice-clicked");
const divResultado = document.getElementById("resultado");
const divGame = document.getElementById("game");
const divBtnNext = document.getElementById("btnNext");
const pResultado = document.getElementById("p-resultado");


//Inicia o quiz e exibe a primeira pergunta no html
  game.startQuiz();
  let cq = game.getNewQuestion();
  if(cq.question != undefined){
    question.innerHTML = cq.question;
    example.innerHTML = cq.example;
    console.log(cq.question);
  }


// evento onclick do botao avancar
btnAvancar.addEventListener("click", () => {
  if (choiceClicked.length) {
    game.replys.push(choiceClicked[0].children[1].innerHTML);
    console.log(game.replys);
    choiceClicked[0].classList.remove("choice-clicked");

    let ncq = game.getNewQuestion();
    console.log(ncq.question);

    if(ncq.question != undefined){
      question.innerText = ncq.question;
      example.innerText = ncq.example;
      alert.innerHTML = "";
    } else if(ncq == "FIM"){
      divResultado.classList.remove("hide");
      divResultado.classList.add("show");
      
      divGame.classList.add("hide");
      divBtnNext.classList.add("hide");

      if(game.getResult()){
        pResultado.innerHTML = "Pela avaliação das suas respostas, há chances de que você tenha défict de atenção (TDA). Procure um profissional para a realização do diagnóstico"
      } else {
        pResultado.innerHTML = "Pela avaliação das suas respostas, não há indicação de que você tenha défict de atenção (TDA)."
      }
    }
    
  } else {
    alert.innerHTML = "Você precisa selecionar uma resposta";
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
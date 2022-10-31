class Quiz {
  constructor() {
    this.questions = [
      {
        question:
          "Você costuma não prestar atenção em detalhes ou comete erros por descuido em trabalhos escolares, no trabalho ou durante outras atividade?",
        example:
          "Exemplo: negligencia ou deixa de passar detalhes, o trabalho é impreciso"
      },
      {
        question:
          "Você tem dificuldade de manter a atenção em tarefas ou atividades lúdicas?",
        example:
          "Exemplo: dificuldade em manter o foco durante aulas, conversas ou leituras prolongadas"
      },
      {
        question:
          "Você parece não escutar quando alguém te dirige a palavra pessoalmente?",
        example:
          "Exemplo: parece estar com a cabeça longe, mesmo na ausência de qualquer distração óbvia"
      },
      {
        question:
          "Você não segue orientações até o fim e não consegue terminar trabalhos escolares, tarefas ou deveres no local de trabalho?",
        example:
          "Exemplo: Começa as tarefas, mas rapidaente perde o foco e facilmente perde o rumo"
      },
      {
        question: "Você tem dificuldade em organizar tarefas e atividades?",
        example:"Exemplo: dificuldade em organizar tarefas sequencias, dificuldade em manter materiais e objetos pessoais em ordem, trabalho desogarnizado e desleixado, mau gerenciamento de tempo, dificuldade em cumprir prazos"
      },
      {
        question: "Você evita, não gosta ou reluta em se envolver em tarefas que exijam esforço mental prolongado?",
        example: "Exemplo: Trabalhos escolares ou lições de casa, preparo de relatórios, preenchimento de formulários e revisão de trabalhos longos."
      },
      {
        question: "Você perde coisas necessárias para tarefas ou atividades?",
        example:"Exemplo: materias escolares, lapis, livros, instrumetos, carteira, chaves, documentos, óculos, celular"
      },
      {
        question: "Você é facilmente distraído por estímulos externos, ou mesmo pensamentos não relacionaddos?",
        example: ""
      },
      {
        question: "Você é esquecido em relação a atividades cotidianas?",
        example:"Exemplo: realizar tarefas, pagar contas, retornar ligações, manter horários agendados"
      }
    ];
    this.replys = [];
  }

  // function para iniciar o quiz
  startQuiz = () => {
    //inicializa a variavel que irá contar as questoes exibidas
    questionCounter = 0;
    //copia a array do construtor da class Quiz
    //com as questoes disponiveis para a variavel availableQuestions
    availableQuestions = [...this.questions];
    // obtem uma nova questao
    // this.getNewQuestion();
  };

  //funcao para obter uma nova questao
  getNewQuestion = () => {   
    if(questionCounter < 9) {
        currentQuestion = availableQuestions[questionCounter];
        console.log(questionCounter, currentQuestion.question);
        questionCounter += 1;
        return currentQuestion;
    } else {
        questionCounter += 1;
        return "FIM";
    }
  };
}

//armazena a questão atual
let currentQuestion = {};
//aceitando resposta
let acceptingAnswers = true;
//contador de questões
let questionCounter = 0;
//array de questoes disponiveis
let availableQuestions = [];
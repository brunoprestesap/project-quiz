class Quiz {
    constructor() {
        this.questions = [
            {
                question: 'Primeira questao',
                context: 'Contexto da primeira pergunta'
            },
            {
                question: 'Segunda questao',
                context: 'Contexto da segunda pergunta'
            },
            {
                question: 'Terceira questao',
                context: 'Contexto da terceira pergunta'
            },
            {
                question: 'Quarta questao',
                context: 'Contexto da quarta pergunta'
            },
            {
                question: 'Quinta questao',
                context: 'Contexto da quinta pergunta'
            },
        ];
        this.replys = [];
    };

    startQuiz() {
        this.questions.forEach(e => {
            console.log(e.question);
            console.log(e.context);
            const r = prompt("Com qual frequencia isso acontece com vc?");
            this.reply(r);
        });

        console.log(this.replys);
    };

    reply(r) {
        this.replys.push(r);
    };
};

// const quiz = new Quiz;

// console.log('Olá, seja bem-vindo!');
// console.log('Vamos iniciar um teste de diagnóstico de TDAH?');

// quiz.startQuiz();
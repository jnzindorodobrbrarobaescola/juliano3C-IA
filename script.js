const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal diferença entre o vôlei de quadra e o vôlei de praia em termos deregras e ambiente de jogo?",
        alternativas: [
            { 
                texto: "A) O vôlei de quadra é jogado em um ambiente fechado com seis jogadores em cada equipe e um sistema de três toques por equipe, enquanto o vôlei de praia é jogado ao arlivre com duas equipes de dois jogadores e um sistema de dois toques por equipe.",
                afirmacao: "No vôlei de quadra, o jogo ocorre em ambientes fechados com seisjogadores em cada time e permite três toques por equipe antes de passar a bolapara o time adversário. No vôlei de praia, o jogo ocorre ao ar livre com duas equipesde dois jogadores e apenas três toques são permitidos por equipe. "
            },
            {
                texto: "B) O vôlei de praia é jogado em uma quadra coberta com seis jogadores em cada equipe,enquanto o vôlei de quadra é jogado ao ar livre com apenas dois jogadores por equipe.",
                afirmacao: "Isso está incorreto, pois o vôlei de praia é jogado ao ar livre comapenas dois jogadores por equipe, e o vôlei de quadra é jogado em ambientesfechados com seis jogadores em cada equipe."
            }
        ]
    },
    {
        enunciado: "Como o vôlei contribui para a promoção da cultura esportiva em diferentes regiões?",
        alternativas: [
            {
                texto: "A) O vôlei, como esporte coletivo, promove a integração social e cultural, oferecendooportunidades para pessoas de diferentes origens se reunirem em torneios locais einternacionais.",
                afirmacao: "O vôlei promove a integração social e cultural ao reunir pessoas dediferentes origens em eventos esportivos, incentivando o intercâmbio cultural e oespírito de equipe."
            },
            {
                texto: "B) O vôlei tem pouco impacto na promoção da cultura esportiva, pois é um esporte que não atrai a participação de diversos grupos etários e culturais.",
                afirmacao: "Na verdade, o vôlei tem um impacto significativo na promoção dacultura esportiva, pois é praticado por pessoas de várias idades e origens culturaisem todo o mundo.)"
            }
        ]
    },
    {
        enunciado: "Qual é o papel dos eventos internacionais de vôlei, como os Jogos Olímpicos, napopularização do esporte globalmente?",
        alternativas: [
            {
                texto: "A) Eventos internacionais como os Jogos Olímpicos ajudam a aumentar a visibilidade dovôlei, atraindo espectadores e patrocinadores e incentivando a prática do esporte emdiferentes países.",
                afirmacao: "Os Jogos Olímpicos e outros eventos internacionais de vôlei desempenham um papel importante em aumentar a visibilidade do esporte,promovendo-o globalmente e estimulando o interesse e a participação em váriospaíses."
            },
            {
                texto: "B) Esses eventos têm pouco impacto na popularização do vôlei, pois o esporte é maispromovido por eventos locais e regionais.",
                afirmacao: "Embora eventos locais e regionais também sejam importantes, eventosinternacionais como os Jogos Olímpicos têm um impacto significativo napopularização do vôlei ao alcançar uma audiência global e gerar interesseinternacional."
            }
        ]
    }, 
        
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

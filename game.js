
let pontuacao = 0;
const pontuacaoAtual = document.getElementById('pontuacao-atual');

function exibirPergunta() {
  const indice = Math.floor(Math.random() * perguntas.length);
  const perguntaAtual = perguntas[indice];
  const perguntaElemento = document.getElementById('pergunta');
  perguntaElemento.textContent = perguntaAtual.pergunta;
  return perguntaAtual.resposta;
}

function verificarResposta() {
  const respostaUsuario = document.getElementById('resposta').value;
  const respostaCorreta = exibirPergunta();
  const feedback = document.getElementById('feedback');

  if (respostaUsuario.trim().toLowerCase() === respostaCorreta.toLowerCase()) {
    feedback.textContent = "Resposta correta!";
    pontuacao++;
  } else {
    feedback.textContent = "Resposta incorreta. Tente novamente.";
  }

  pontuacaoAtual.textContent = pontuacao;
}

document.getElementById('enviar').addEventListener('click', verificarResposta);










const perguntas = [
  { pergunta: "Calcule a potência ativa em um circuito com tensão de 120V e corrente de 5A.", resposta: "600W" },
  { pergunta: "Se um resistor tem uma resistência de 10 ohms e uma corrente de 2A passa por ele, qual é a tensão através do resistor?", resposta: "20V" },
  { pergunta: "Qual é a corrente que passa por um resistor de 4 ohms quando uma tensão de 12V é aplicada a ele?", resposta: "3A" },
  { pergunta: "Qual é a resistência de um resistor que tem uma corrente de 2A passando por ele, quando uma tensão de 10V é aplicada?", resposta: "5 ohms" },
  // Adicione mais perguntas conforme necessário
  { pergunta: "Calcule a potência em um circuito com tensão de 240V e corrente de 10A.", resposta: "2400W" },
  { pergunta: "Qual é a resistência de um resistor que dissipa 180W de potência quando uma corrente de 6A passa por ele?", resposta: "5 ohms" },
  { pergunta: "Se um resistor de 8 ohms é conectado a uma bateria de 12V, qual é a corrente que passa por ele?", resposta: "1.5A" },
  { pergunta: "Calcule a potência em um circuito com resistência de 6 ohms e uma corrente de 3A.", resposta: "54W" },
  { pergunta: "Se uma fonte de 24V é conectada a um resistor de 12 ohms, qual é a corrente que passa pelo resistor?", resposta: "2A" },
  { pergunta: "Qual é a tensão através de um resistor de 5 ohms quando uma corrente de 2A passa por ele?", resposta: "10V" },
  { pergunta: "Se um resistor de 10 ohms é conectado a uma fonte de 20V, qual é a corrente que passa pelo resistor?", resposta: "2A" },
  { pergunta: "Calcule a potência em um circuito com tensão de 36V e resistência de 9 ohms.", resposta: "144W" },
  { pergunta: "Se um resistor de 6 ohms é conectado a uma bateria de 12V, qual é a corrente que passa pelo resistor?", resposta: "2A" },
  { pergunta: "Qual é a tensão através de um resistor de 8 ohms quando uma corrente de 4A passa por ele?", resposta: "32V" },
  { pergunta: "Se uma fonte de 10V é conectada a um resistor de 2 ohms, qual é a corrente que passa pelo resistor?", resposta: "5A" },
  // Adicione mais perguntas conforme necessário
];
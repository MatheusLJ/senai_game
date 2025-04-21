let perguntaAtual = null;
let botoes = null;
let tempo = 60;
let intervalo;
let pontuacao = 0;

function irParaJogo(){
    const nome = document.getElementById('nome').value.trim();
    if (nome !== ""){
    localStorage.setItem('nomeJogador', nome);
    window.location.href = 'game.html';
    }else{
    alert("Digite seu nome!");
    }
}

function logout(){
  const nome = localStorage.getItem("nomeJogador");
  const pontos = parseInt(localStorage.getItem("jogadorPontos")) || 0;

  if(nome){
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  ranking.push({ nome, pontos });
  ranking.sort((a, b) => b.pontos - a.pontos);
  localStorage.setItem("ranking", JSON.stringify(ranking));
  console.log("Ranking atualizado:");
  console.table(ranking);
  }else{
    console.warn("Nome do jogador não encontrado.");
  }
  localStorage.removeItem("nomeJogador");
  localStorage.removeItem("pontuacao");
  window.location.href = "index.html";
}

const nome = localStorage.getItem('nomeJogador');
const boasVindas = document.getElementById('boasVindas');
if (nome){ 
  boasVindas.textContent = `Bem-vindo, ${nome}!`;
  }else{
  boasVindas.textContent = "Bem-vindo!";
}

function abrirPopup(indice, elemento){
  if (elemento) {
    elemento.onclick = null; 
    elemento.style.pointerEvents = 'none'; 
    elemento.style.opacity = 0.3;
  }
  perguntaAtual = perguntas[indice];
  document.querySelector('.popup .pergunta').textContent = perguntaAtual.pergunta;
  botoes = document.querySelectorAll('.popup div button');
  botoes.forEach((botao, i) => {
    botao.textContent = perguntaAtual.opcoes[i];
    botao.onclick = () => {
      verificarResposta(i);
    };
  });
  document.getElementById('overlay').classList.add('ativo');
  document.querySelector('.popup').classList.add('ativo');
  tempo = 60;
  iniciarContagem();
}

function verificarResposta(indiceSelecionado) {
  if (indiceSelecionado === perguntaAtual.resposta) {
    botoes[indiceSelecionado].classList.add('botao-correto');
    pontuacao += tempo*2
    localStorage.setItem("jogadorPontos", pontuacao);
    addScore(pontuacao)
  } else {
    botoes[indiceSelecionado].classList.add('botao-incorreto');
    botoes[perguntaAtual.resposta].classList.add('botao-correto');
  }
  botoes.forEach(botao => botao.disabled = true);
  setTimeout(() => {
    fecharPopup();
    botoes.forEach(botao => {
      botao.classList.remove('botao-correto', 'botao-incorreto');
      botao.disabled = false;
    });
  }, 1000);
}
  
function fecharPopup(){
    clearInterval(intervalo);
    document.getElementById('overlay').classList.remove('ativo');
    document.querySelector('.popup').classList.remove('ativo'); 
}

function iniciarContagem(){
  const tempoElemento = document.getElementById("tempo");
  tempoElemento.textContent = tempo;

  intervalo = setInterval(() => {
    tempo--;
    tempoElemento.textContent = tempo;

    if (tempo <= 0) {
      clearInterval(intervalo);
      fecharPopup(); 
    }
  }, 1000); 
}

function addScore(){
  const scoreElemento = document.getElementById("score");
  scoreElemento.textContent = pontuacao;
}

document.getElementById("tip").addEventListener("click", () => {
  const blocosErro = document.querySelectorAll(".block-error");
  blocosErro.forEach(bloco => {
    bloco.classList.add("dica-ativa");
    setTimeout(() => {
      bloco.classList.remove("dica-ativa");
    }, 4000);
  });
});

function abrirPopup_2(){
  document.getElementById('overlay').classList.add('ativo');
  document.querySelector('.mudarCenario').classList.add('ativo');
}

function fecharPopup_2(){
  document.getElementById('overlay').classList.remove('ativo');
  document.querySelector('.mudarCenario').classList.remove('ativo');
}
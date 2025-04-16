function irParaJogo(){
    const nome = document.getElementById('nome').value.trim();
    if (nome !== ""){
    localStorage.setItem('nomeJogador', nome);
    window.location.href = 'game.html';
    }else{
    alert("Digite seu nome!");
    }
}

const nome = localStorage.getItem('nomeJogador');
    const boasVindas = document.getElementById('boasVindas');
    if (nome){ 
    boasVindas.textContent = `Bem-vindo, ${nome}!`;
    }else{
    boasVindas.textContent = "Bem-vindo!";
}

function abrirPopup(){
    document.getElementById('overlay').classList.add('ativo');
    document.querySelector('.popup').classList.add('ativo');
    tempo = 60;
    iniciarContagem();
}
  
function fecharPopup(){
    clearInterval(intervalo);
    document.getElementById('overlay').classList.remove('ativo');
    document.querySelector('.popup').classList.remove('ativo');
    
}

let tempo = 60;
let intervalo;

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